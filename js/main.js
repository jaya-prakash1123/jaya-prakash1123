/**
 * Study Materials Library - Main JavaScript
 * Handles all interactive functionality including:
 * - Subject grid display with 2-per-row layout
 * - Search and filtering across all PDFs
 * - PDF modal viewer
 * - Navigation between pages
 */

// DOM Elements
let subjectsGrid;
let searchResults;
let noResults;
let searchInput;
let clearSearchBtn;
let pdfModal;
let pdfViewer;
let closeModalBtn;

/**
 * Initialize the application on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    subjectsGrid = document.getElementById('subjectsGrid');
    searchResults = document.getElementById('searchResults');
    noResults = document.getElementById('noResults');
    searchInput = document.getElementById('searchInput');
    clearSearchBtn = document.getElementById('clearSearch');
    pdfModal = document.getElementById('pdfModal');
    pdfViewer = document.getElementById('pdfViewer');
    closeModalBtn = document.getElementById('closeModal');

    // Check if we're on the main page or a subject page
    if (subjectsGrid) {
        // Main page - show subject grid
        renderSubjectsGrid();
    } else {
        // Subject page - show PDF list for this subject
        renderSubjectPdfs();
    }

    // Set up event listeners
    setupEventListeners();
});

/**
 * Render subjects grid on main page
 */
function renderSubjectsGrid() {
    // Get unique categories from pdfData
    const categories = [...new Set(pdfData.map(pdf => pdf.category))];

    // Sort categories alphabetically
    categories.sort();

    // Clear the grid
    subjectsGrid.innerHTML = '';

    // Create subject buttons
    categories.forEach(categoryName => {
        // Count PDFs in this category
        const pdfCount = pdfData.filter(pdf => pdf.category === categoryName).length;

        // Create subject button
        const subjectButton = document.createElement('a');
        subjectButton.className = 'subject-button';
        subjectButton.href = `${categoryName.toLowerCase()}.html`;

        // Get subject icon and color
        const subjectData = subjectInfo[categoryName] || { icon: "📚", color: "#6b7280" };

        // Create content
        subjectButton.innerHTML = `
            <div class="subject-icon" style="color: ${subjectData.color}">${subjectData.icon}</div>
            <div class="subject-name">${categoryName}</div>
            <div class="subject-count">${pdfCount} PDF${pdfCount !== 1 ? 's' : ''}</div>
        `;

        subjectsGrid.appendChild(subjectButton);
    });
}

/**
 * Render PDFs for a subject page
 */
function renderSubjectPdfs() {
    // Get subject name from page title or URL
    const subjectName = document.title.split(' - ')[0];

    // Find PDFs for this subject
    const subjectPdfs = pdfData.filter(pdf => pdf.category === subjectName);

    // Get the pdf-list container
    const pdfListContainer = document.querySelector('.pdf-list');

    if (!pdfListContainer) return;

    // Clear existing content
    pdfListContainer.innerHTML = '';

    if (subjectPdfs.length === 0) {
        // Show no PDFs message
        pdfListContainer.innerHTML = `
            <div class="no-results">
                <p>No PDFs available for ${subjectName} yet.</p>
            </div>
        `;
        return;
    }

    // Add PDF items
    subjectPdfs.forEach(pdf => {
        const pdfItem = createPdfElement(pdf);
        pdfListContainer.appendChild(pdfItem);
    });
}

/**
 * Create a PDF item element
 * @param {Object} pdf - PDF data object
 * @returns {HTMLElement} - PDF item div
 */
function createPdfElement(pdf) {
    const pdfItem = document.createElement('div');
    pdfItem.className = 'pdf-item';

    // PDF info section
    const pdfInfo = document.createElement('div');
    pdfInfo.className = 'pdf-info';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'pdf-title';
    titleDiv.textContent = pdf.title;

    pdfInfo.appendChild(titleDiv);

    // Add description if available
    if (pdf.description && pdf.description.trim() !== '') {
        const descDiv = document.createElement('div');
        descDiv.className = 'pdf-description';
        descDiv.textContent = pdf.description;
        pdfInfo.appendChild(descDiv);
    }

    // Actions section
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'pdf-actions';

    // View button
    const viewBtn = document.createElement('button');
    viewBtn.className = 'btn-view';
    viewBtn.textContent = 'View';
    viewBtn.setAttribute('data-pdf-path', pdf.path);
    viewBtn.addEventListener('click', () => openPdfModal(pdf.path));

    // Download button
    const downloadBtn = document.createElement('a');
    downloadBtn.className = 'btn-download';
    downloadBtn.textContent = 'Download';
    downloadBtn.href = pdf.path;
    downloadBtn.download = pdf.filename;

    actionsDiv.appendChild(viewBtn);
    actionsDiv.appendChild(downloadBtn);

    // Assemble PDF item
    pdfItem.appendChild(pdfInfo);
    pdfItem.appendChild(actionsDiv);

    return pdfItem;
}

/**
 * Handle search input and filter PDFs
 */
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    // If search is empty, return to subject view
    if (query === '') {
        clearSearchResults();
        return;
    }

    // Filter PDFs based on query
    const results = pdfData.filter(pdf => {
        const titleMatch = pdf.title.toLowerCase().includes(query);
        const categoryMatch = pdf.category.toLowerCase().includes(query);
        const descriptionMatch = pdf.description && pdf.description.toLowerCase().includes(query);

        return titleMatch || categoryMatch || descriptionMatch;
    });

    // Display results
    if (results.length > 0) {
        displaySearchResults(results);
    } else {
        displayNoResults();
    }
}

/**
 * Display search results grouped by category
 * @param {Array} results - Filtered PDF array
 */
function displaySearchResults(results) {
    // Hide subjects grid and no results
    subjectsGrid.style.display = 'none';
    noResults.style.display = 'none';
    searchResults.style.display = 'block';

    // Clear previous results
    searchResults.innerHTML = '';

    // Group results by category
    const groupedResults = {};
    results.forEach(pdf => {
        if (!groupedResults[pdf.category]) {
            groupedResults[pdf.category] = [];
        }
        groupedResults[pdf.category].push(pdf);
    });

    // Display results by category
    Object.keys(groupedResults).sort().forEach(category => {
        // Add category header
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'search-category';
        categoryHeader.textContent = category;
        searchResults.appendChild(categoryHeader);

        // Add PDFs in this category
        groupedResults[category].forEach(pdf => {
            const pdfItem = createPdfElement(pdf);
            searchResults.appendChild(pdfItem);
        });
    });
}

/**
 * Display "no results" message
 */
function displayNoResults() {
    subjectsGrid.style.display = 'none';
    searchResults.style.display = 'none';
    noResults.style.display = 'block';
}

/**
 * Clear search and return to subject grid view
 */
function clearSearchResults() {
    searchInput.value = '';
    searchResults.style.display = 'none';
    noResults.style.display = 'none';
    subjectsGrid.style.display = 'grid';
}

/**
 * Open PDF in modal viewer
 * @param {string} pdfPath - Path to PDF file
 */
function openPdfModal(pdfPath) {
    pdfViewer.src = pdfPath;
    pdfModal.classList.add('active');

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

/**
 * Close PDF modal
 */
function closePdfModal() {
    pdfModal.classList.remove('active');
    pdfViewer.src = '';

    // Restore background scrolling
    document.body.style.overflow = '';
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    // Search input - real-time filtering
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Clear search button
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearchResults);
    }

    // Close modal button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closePdfModal);
    }

    // Close modal on backdrop click
    if (pdfModal) {
        pdfModal.addEventListener('click', (e) => {
            if (e.target === pdfModal) {
                closePdfModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pdfModal && pdfModal.classList.contains('active')) {
            closePdfModal();
        }
    });
}