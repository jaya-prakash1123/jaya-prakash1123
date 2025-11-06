// Subject Page JavaScript - Handles PDF loading for individual subject pages

// Subject PDF viewer class
class SubjectPDFViewer {
    constructor() {
        this.currentPDF = null;
        this.currentPage = 1;
        this.totalPages = 0;
        this.currentScale = 1.0;
        this.pdfRenderingTask = null;
        this.isRendering = false;

        this.initializeElements();
        this.attachEventListeners();
        this.loadSubjectPDFs();
    }

    initializeElements() {
        // Modal elements
        this.pdfModal = document.getElementById('pdfModal');
        this.pdfCanvas = document.getElementById('pdfCanvas');
        this.pdfTitle = document.getElementById('pdfTitle');
        this.pdfLoadingOverlay = document.getElementById('pdfLoadingOverlay');
        this.pdfProgressFill = document.getElementById('pdfProgressFill');
        this.pdfProgressText = document.getElementById('pdfProgressText');

        // Control elements
        this.prevPageBtn = document.getElementById('prevPageBtn');
        this.nextPageBtn = document.getElementById('nextPageBtn');
        this.zoomInBtn = document.getElementById('zoomInBtn');
        this.zoomOutBtn = document.getElementById('zoomOutBtn');
        this.zoomResetBtn = document('zoomResetBtn');
        this.downloadPdfBtn = document.getElementById('downloadPdfBtn');
        this.closePdfBtn = document.getElementById('closePdfBtn');

        // Display elements
        this.pdfZoomDisplay = document.getElementById('pdfZoomDisplay');
        this.pdfPageInfo = document.getElementById('pdfPageInfo');
        this.pdfThumbnails = document.getElementById('pdfThumbnails');

        // Search elements
        this.pdfSearchInput = document.getElementById('pdfSearchInput');
        this.clearPdfSearch = document.getElementById('clearPdfSearch');
        this.pdfsGrid = document.getElementById('pdfsGrid');
        this.noResults = document.getElementById('noResults');
        this.viewAllBtn = document.getElementById('viewAllBtn');

        // Subject elements
        this.subjectCount = document.querySelector('[id$="Count"]');
    }

    attachEventListeners() {
        // PDF controls
        this.prevPageBtn.addEventListener('click', () => this.previousPage());
        this.nextPageBtn.addEventListener('click', () => this.nextPage());
        this.zoomInBtn.addEventListener('click', () => this.zoomIn());
        this.zoomOutBtn.addEventListener('click', () => this.zoomOut());
        this.zoomResetBtn.addEventListener('click', () => this.resetZoom());
        this.closePdfBtn.addEventListener('click', () => this.closePDFModal());

        // Search functionality
        this.pdfSearchInput.addEventListener('input', (e) => this.searchPDFs(e.target.value));
        this.clearPdfSearch.addEventListener('click', () => this.clearSearch());
        this.viewAllBtn.addEventListener('click', () => this.clearSearch());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Close modal on background click
        this.pdfModal.addEventListener('click', (e) => {
            if (e.target === this.pdfModal) {
                this.closePDFModal();
            }
        });

        // Canvas zoom with mouse wheel
        this.pdfCanvas.addEventListener('wheel', (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    this.zoomIn();
                } else {
                    this.zoomOut();
                }
            }
        });
    }

    // Get current subject from page
    getCurrentSubject() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || path.substring(path.lastIndexOf('/') + 1);

        if (filename.includes('mathematics')) return 'Mathematics';
        if (filename.includes('physics')) return 'Physics';
        if (filename.includes('chemistry')) return 'Chemistry';
        if (filename.includes('biology')) return 'Biology';

        return 'Mathematics'; // Default
    }

    // Load PDFs for current subject
    loadSubjectPDFs() {
        const subject = this.getCurrentSubject();
        const subjectPDFs = pdfData[subject] || [];

        // Update subject count
        if (this.subjectCount) {
            this.subjectCount.textContent = `${subjectPDFs.length} PDFs`;
        }

        // Hide loading overlay
        setTimeout(() => {
            const loadingOverlay = document.getElementById('loadingOverlay');
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
        }, 1000);

        // Display PDFs
        this.displayPDFs(subjectPDFs);
    }

    // Display PDFs in grid
    displayPDFs(pdfs) {
        this.pdfsGrid.innerHTML = '';

        if (pdfs.length === 0) {
            this.showNoResults();
            return;
        }

        pdfs.forEach(pdf => {
            const pdfCard = this.createPDFCard(pdf);
            this.pdfsGrid.appendChild(pdfCard);
        });
    }

    // Create PDF card element
    createPDFCard(pdf) {
        const card = document.createElement('div');
        card.className = 'pdf-card';

        card.innerHTML = `
            <div class="pdf-thumbnail">
                <i class="fas fa-file-pdf"></i>
            </div>
            <div class="pdf-info">
                <h3>${pdf.title}</h3>
                <p>${pdf.description}</p>
                <div class="pdf-meta">
                    <span class="pdf-size">${pdf.size}</span>
                    <span class="pdf-date">${pdf.uploadDate}</span>
                </div>
            </div>
            <div class="pdf-actions">
                <button class="btn-primary" onclick="pdfViewer.openPDF('${pdf.file}', '${pdf.title}')">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="btn-secondary" onclick="pdfViewer.downloadPDF('${pdf.file}', '${pdf.title}')">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        `;

        return card;
    }

    // Open PDF in modal
    async openPDF(fileUrl, title) {
        try {
            this.pdfModal.style.display = 'flex';
            this.pdfTitle.textContent = title;
            this.pdfLoadingOverlay.style.display = 'flex';

            // Load PDF
            const loadingTask = pdfjsLib.getDocument(fileUrl);
            this.currentPDF = await loadingTask.promise;
            this.totalPages = this.currentPDF.numPages;
            this.currentPage = 1;

            // Hide loading overlay
            this.pdfLoadingOverlay.style.display = 'none';

            // Render first page
            await this.renderPage(this.currentPage);
            this.updateControls();
            this.generateThumbnails();

        } catch (error) {
            console.error('Error loading PDF:', error);
            this.showError('Failed to load PDF');
            this.pdfLoadingOverlay.style.display = 'none';
        }
    }

    // Render PDF page
    async renderPage(pageNumber) {
        if (this.isRendering || !this.currentPDF) return;

        try {
            this.isRendering = true;

            const page = await this.currentPDF.getPage(pageNumber);
            const viewport = page.getViewport({ scale: this.currentScale });

            // Set canvas dimensions
            const context = this.pdfCanvas.getContext('2d');
            this.pdfCanvas.height = viewport.height;
            this.pdfCanvas.width = viewport.width;

            // Render PDF page
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            this.pdfRenderingTask = page.render(renderContext);
            await this.pdfRenderingTask.promise;

            this.updatePageInfo();

        } catch (error) {
            console.error('Error rendering page:', error);
        } finally {
            this.isRendering = false;
        }
    }

    // Generate PDF thumbnails
    async generateThumbnails() {
        this.pdfThumbnails.innerHTML = '';

        for (let i = 1; i <= this.totalPages; i++) {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'pdf-thumbnail-item';
            if (i === this.currentPage) {
                thumbnail.classList.add('active');
            }

            thumbnail.innerHTML = `
                <canvas id="thumbnail-${i}"></canvas>
                <span>Page ${i}</span>
            `;

            thumbnail.addEventListener('click', () => {
                this.goToPage(i);
            });

            this.pdfThumbnails.appendChild(thumbnail);
            await this.renderThumbnail(i);
        }
    }

    // Render thumbnail for page
    async renderThumbnail(pageNumber) {
        try {
            const page = await this.currentPDF.getPage(pageNumber);
            const viewport = page.getViewport({ scale: 0.2 });

            const canvas = document.getElementById(`thumbnail-${pageNumber}`);
            if (!canvas) return;

            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            await page.render(renderContext).promise;

        } catch (error) {
            console.error(`Error rendering thumbnail ${pageNumber}:`, error);
        }
    }

    // Navigation methods
    async previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            await this.renderPage(this.currentPage);
            this.updateControls();
            this.updateThumbnailSelection();
        }
    }

    async nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            await this.renderPage(this.currentPage);
            this.updateControls();
            this.updateThumbnailSelection();
        }
    }

    async goToPage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= this.totalPages) {
            this.currentPage = pageNumber;
            await this.renderPage(this.currentPage);
            this.updateControls();
            this.updateThumbnailSelection();
        }
    }

    // Zoom methods
    async zoomIn() {
        this.currentScale = Math.min(this.currentScale + 0.25, 3.0);
        await this.renderPage(this.currentPage);
        this.updateZoomDisplay();
    }

    async zoomOut() {
        this.currentScale = Math.max(this.currentScale - 0.25, 0.5);
        await this.renderPage(this.currentPage);
        this.updateZoomDisplay();
    }

    async resetZoom() {
        this.currentScale = 1.0;
        await this.renderPage(this.currentPage);
        this.updateZoomDisplay();
    }

    // Update methods
    updateControls() {
        this.prevPageBtn.disabled = this.currentPage <= 1;
        this.nextPageBtn.disabled = this.currentPage >= this.totalPages;
        this.updatePageInfo();
        this.updateThumbnailSelection();
    }

    updatePageInfo() {
        this.pdfPageInfo.textContent = `Page ${this.currentPage} of ${this.totalPages}`;
    }

    updateZoomDisplay() {
        this.pdfZoomDisplay.textContent = `${Math.round(this.currentScale * 100)}%`;
    }

    updateThumbnailSelection() {
        const thumbnails = this.pdfThumbnails.querySelectorAll('.pdf-thumbnail-item');
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index + 1 === this.currentPage);
        });
    }

    // Close PDF modal
    closePDFModal() {
        this.pdfModal.style.display = 'none';
        this.currentPDF = null;
        this.currentPage = 1;
        this.totalPages = 0;
        this.currentScale = 1.0;

        // Clear canvas
        const context = this.pdfCanvas.getContext('2d');
        context.clearRect(0, 0, this.pdfCanvas.width, this.pdfCanvas.height);

        // Clear thumbnails
        this.pdfThumbnails.innerHTML = '';
    }

    // Download PDF
    downloadPDF(fileUrl, title) {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = title + '.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Search functionality
    searchPDFs(query) {
        const subject = this.getCurrentSubject();
        const subjectPDFs = pdfData[subject] || [];

        if (!query.trim()) {
            this.displayPDFs(subjectPDFs);
            return;
        }

        const filteredPDFs = subjectPDFs.filter(pdf =>
            pdf.title.toLowerCase().includes(query.toLowerCase()) ||
            pdf.description.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredPDFs.length === 0) {
            this.showNoResults();
        } else {
            this.displayPDFs(filteredPDFs);
        }
    }

    clearSearch() {
        this.pdfSearchInput.value = '';
        const subject = this.getCurrentSubject();
        const subjectPDFs = pdfData[subject] || [];
        this.displayPDFs(subjectPDFs);
    }

    showNoResults() {
        this.pdfsGrid.style.display = 'none';
        this.noResults.style.display = 'block';
    }

    showError(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(errorDiv);

        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    // Keyboard shortcuts
    handleKeyboard(event) {
        if (this.pdfModal.style.display !== 'flex') return;

        switch (event.key) {
            case 'Escape':
                this.closePDFModal();
                break;
            case 'ArrowLeft':
                this.previousPage();
                break;
            case 'ArrowRight':
                this.nextPage();
                break;
            case '+':
            case '=':
                if (event.ctrlKey) {
                    event.preventDefault();
                    this.zoomIn();
                }
                break;
            case '-':
                if (event.ctrlKey) {
                    event.preventDefault();
                    this.zoomOut();
                }
                break;
            case '0':
                if (event.ctrlKey) {
                    event.preventDefault();
                    this.resetZoom();
                }
                break;
        }
    }
}

// Initialize the subject PDF viewer when page loads
let pdfViewer;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize PDF.js worker
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    // Initialize the PDF viewer
    pdfViewer = new SubjectPDFViewer();

    // Hide loading overlay
    setTimeout(() => {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }
    }, 1500);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden && pdfViewer) {
        // Cancel any ongoing PDF rendering when page is hidden
        if (pdfViewer.pdfRenderingTask) {
            pdfViewer.pdfRenderingTask.cancel();
        }
    }
});