/**
 * Enhanced Study Materials Library - Main JavaScript
 * Advanced animations, particle effects, and modern interactions
 *
 * Features:
 * - Animated particle background
 * - Skeleton loading states
 * - Smooth page transitions
 * - Advanced micro-interactions
 * - Glassmorphism effects
 * - Enhanced search with live filtering
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
let loadingSkeleton;
let particlesContainer;

// Animation state
let isSearching = false;
let animationFrameId;
let particles = [];

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
    loadingSkeleton = document.getElementById('loadingSkeleton');
    particlesContainer = document.getElementById('particles-container');

    // Initialize enhanced features
    initializeParticles();
    initializeEnhancedEffects();

    // Check if we're on the main page or a subject page
    if (subjectsGrid) {
        // Main page - show subject grid with loading animation
        initializeMainPage();
    } else {
        // Subject page - show PDF list for this subject
        initializeSubjectPage();
    }

    // Set up event listeners
    setupEventListeners();
});

/**
 * Initialize main page with loading states
 */
function initializeMainPage() {
    // Show loading skeleton
    loadingSkeleton.style.display = 'flex';

    // Simulate loading time for better UX
    setTimeout(() => {
        renderSubjectsGrid();

        // Hide skeleton and show grid with animation
        loadingSkeleton.style.opacity = '0';
        setTimeout(() => {
            loadingSkeleton.style.display = 'none';
            subjectsGrid.style.display = 'grid';
            subjectsGrid.style.animation = 'fadeInScale 0.8s ease-out both';
        }, 300);
    }, 1500);
}

/**
 * Initialize subject page
 */
function initializeSubjectPage() {
    // Get subject name from page title
    const subjectName = document.title.split(' - ')[0];

    // Add page transition effect
    document.body.style.animation = 'fadeIn 0.6s ease-out both';

    // Render PDFs with staggered animation
    renderSubjectPdfs(subjectName);
}

/**
 * Initialize particle animation system
 */
function initializeParticles() {
    if (!particlesContainer) return;

    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle();
    }

    // Start animation loop
    animateParticles();
}

/**
 * Create individual particle
 */
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 4 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--particle-colors').split(', ')[Math.floor(Math.random() * 6)];
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '-1';
    particle.style.opacity = Math.random() * 0.6 + 0.2;

    // Random initial position
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';

    // Particle properties
    particle.dataset.velocityX = (Math.random() - 0.5) * 0.5;
    particle.dataset.velocityY = (Math.random() - 0.5) * 0.5;
    particle.dataset.size = parseFloat(particle.style.width);

    document.body.appendChild(particle);
    particles.push(particle);
}

/**
 * Animate particles
 */
function animateParticles() {
    particles.forEach(particle => {
        let x = parseFloat(particle.style.left);
        let y = parseFloat(particle.style.top);
        let vx = parseFloat(particle.dataset.velocityX);
        let vy = parseFloat(particle.dataset.velocityY);
        const size = parseFloat(particle.dataset.size);

        // Update position
        x += vx;
        y += vy;

        // Bounce off walls
        if (x <= 0 || x >= window.innerWidth - size) {
            vx = -vx;
            particle.dataset.velocityX = vx;
        }
        if (y <= 0 || y >= window.innerHeight - size) {
            vy = -vy;
            particle.dataset.velocityY = vy;
        }

        // Apply position
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';

        // Floating effect
        particle.style.transform = `translateY(${Math.sin(Date.now() * 0.001 + x) * 2}px)`;
    });

    animationFrameId = requestAnimationFrame(animateParticles);
}

/**
 * Initialize enhanced effects
 */
function initializeEnhancedEffects() {
    // Add subtle parallax effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        if (particlesContainer) {
            particlesContainer.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Add entrance animations for interactive elements
    addEntranceAnimations();
}

/**
 * Add entrance animations to interactive elements
 */
function addEntranceAnimations() {
    const animatedElements = document.querySelectorAll('.subject-button, .pdf-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `fadeInUp 0.6s ease-out both`;
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Render subjects grid with enhanced animations
 */
function renderSubjectsGrid() {
    // Get unique categories from pdfData
    const categories = [...new Set(pdfData.map(pdf => pdf.category))];

    // Sort categories alphabetically
    categories.sort();

    // Clear the grid
    subjectsGrid.innerHTML = '';

    // Create subject buttons with staggered animation
    categories.forEach((categoryName, index) => {
        // Count PDFs in this category
        const pdfCount = pdfData.filter(pdf => pdf.category === categoryName).length;

        // Create subject button
        const subjectButton = createEnhancedSubjectButton(categoryName, pdfCount, index);

        // Add staggered animation delay
        setTimeout(() => {
            subjectsGrid.appendChild(subjectButton);
        }, index * 150);
    });
}

/**
 * Create enhanced subject button with advanced animations
 */
function createEnhancedSubjectButton(categoryName, pdfCount, index) {
    const subjectButton = document.createElement('a');
    subjectButton.className = 'subject-button';
    subjectButton.href = `${categoryName.toLowerCase()}.html`;
    subjectButton.style.animationDelay = `${index * 0.1}s`;

    // Get subject icon and color
    const subjectData = subjectInfo[categoryName] || { icon: "📚", color: "#6b7280" };

    // Create content with enhanced structure
    subjectButton.innerHTML = `
        <div class="subject-icon-wrapper">
            <div class="subject-icon">${subjectData.icon}</div>
        </div>
        <div class="subject-content">
            <div class="subject-name">${categoryName}</div>
            <div class="subject-count">${pdfCount} PDF${pdfCount !== 1 ? 's' : ''}</div>
        </div>
        <div class="subject-glow"></div>
    `;

    // Add advanced hover effects
    addSubjectButtonEffects(subjectButton);

    return subjectButton;
}

/**
 * Add advanced effects to subject buttons
 */
function addSubjectButtonEffects(button) {
    // Ripple effect on click
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = ripple.style.height = '40px';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 20) + 'px';
        ripple.style.top = (e.clientY - rect.top - 20) + 'px';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });

    // Magnetic effect
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `translateY(-8px) rotateX(${-y * 0.01}deg) rotateY(${x * 0.01}deg)`;
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
}

/**
 * Render PDFs for a subject page with staggered animations
 */
function renderSubjectPdfs(subjectName) {
    // Find PDFs for this subject
    const subjectPdfs = pdfData.filter(pdf => pdf.category === subjectName);

    // Get the pdf-list container
    const pdfListContainer = document.querySelector('.pdf-list');

    if (!pdfListContainer) return;

    // Clear existing content
    pdfListContainer.innerHTML = '';

    if (subjectPdfs.length === 0) {
        // Show no PDFs message with animation
        pdfListContainer.innerHTML = `
            <div class="no-results">
                <p>No PDFs available for ${subjectName} yet.</p>
            </div>
        `;
        return;
    }

    // Add PDF items with staggered animation
    subjectPdfs.forEach((pdf, index) => {
        setTimeout(() => {
            const pdfItem = createEnhancedPdfElement(pdf);
            pdfListContainer.appendChild(pdfItem);
        }, index * 100);
    });
}

/**
 * Create enhanced PDF item with advanced animations
 */
function createEnhancedPdfElement(pdf) {
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

    // View button with enhanced effects
    const viewBtn = document.createElement('button');
    viewBtn.className = 'btn-view';
    viewBtn.textContent = 'View';
    viewBtn.setAttribute('data-pdf-path', pdf.path);
    viewBtn.addEventListener('click', () => openPdfModal(pdf.path, pdf.title));

    // Download button with enhanced effects
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

    // Add hover effects
    addPdfItemEffects(pdfItem);

    return pdfItem;
}

/**
 * Add enhanced effects to PDF items
 */
function addPdfItemEffects(pdfItem) {
    pdfItem.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
    });

    pdfItem.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
}

/**
 * Enhanced search with animations
 */
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    // If search is empty, return to subject view
    if (query === '') {
        clearSearchResults();
        return;
    }

    // Add searching state
    if (!isSearching) {
        isSearching = true;
        searchInput.style.animation = 'pulse 1s ease-in-out infinite';
    }

    // Filter PDFs based on query
    const results = pdfData.filter(pdf => {
        const titleMatch = pdf.title.toLowerCase().includes(query);
        const categoryMatch = pdf.category.toLowerCase().includes(query);
        const descriptionMatch = pdf.description && pdf.description.toLowerCase().includes(query);

        return titleMatch || categoryMatch || descriptionMatch;
    });

    // Animate search results
    setTimeout(() => {
        if (results.length > 0) {
            displayEnhancedSearchResults(results);
        } else {
            displayEnhancedNoResults();
        }

        // Remove searching state
        isSearching = false;
        searchInput.style.animation = '';
    }, 300);
}

/**
 * Display enhanced search results with animations
 */
function displayEnhancedSearchResults(results) {
    // Hide subjects grid and no results
    subjectsGrid.style.animation = 'fadeOut 0.3s ease-out both';

    setTimeout(() => {
        subjectsGrid.style.display = 'none';
        noResults.style.display = 'none';
        searchResults.style.display = 'block';
        searchResults.style.animation = 'fadeInScale 0.5s ease-out both';

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

        // Display results by category with staggered animation
        Object.keys(groupedResults).sort().forEach((category, categoryIndex) => {
            setTimeout(() => {
                // Add category header
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'search-category';
                categoryHeader.textContent = category;
                categoryHeader.style.animation = 'slideInLeft 0.4s ease-out both';
                searchResults.appendChild(categoryHeader);

                // Add PDFs in this category
                groupedResults[category].forEach((pdf, pdfIndex) => {
                    setTimeout(() => {
                        const pdfItem = createEnhancedPdfElement(pdf);
                        searchResults.appendChild(pdfItem);
                    }, pdfIndex * 100);
                });
            }, categoryIndex * 200);
        });
    }, 300);
}

/**
 * Display enhanced no results message
 */
function displayEnhancedNoResults() {
    subjectsGrid.style.animation = 'fadeOut 0.3s ease-out both';

    setTimeout(() => {
        subjectsGrid.style.display = 'none';
        searchResults.style.display = 'none';
        noResults.style.display = 'block';
        noResults.style.animation = 'fadeInScale 0.5s ease-out both';
    }, 300);
}

/**
 * Clear search with animations
 */
function clearSearchResults() {
    searchInput.value = '';
    searchResults.style.animation = 'fadeOut 0.3s ease-out both';

    setTimeout(() => {
        searchResults.style.display = 'none';
        noResults.style.display = 'none';
        subjectsGrid.style.display = 'grid';
        subjectsGrid.style.animation = 'fadeInScale 0.5s ease-out both';
    }, 300);
}

/**
 * Enhanced PDF modal with animations
 */
function openPdfModal(pdfPath) {
    // Show loading state
    pdfModal.classList.add('active');
    pdfModal.style.opacity = '0';

    pdfViewer.style.opacity = '0';
    pdfViewer.src = pdfPath;

    // Animate modal entrance
    setTimeout(() => {
        pdfModal.style.opacity = '1';
        pdfModal.querySelector('.modal-content').style.animation = 'slideUpScale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }, 10);

    // Fade in PDF viewer after load
    pdfViewer.onload = () => {
        pdfViewer.style.transition = 'opacity 0.3s ease-out';
        pdfViewer.style.opacity = '1';
    };

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

/**
 * Enhanced modal close with animations
 */
function closePdfModal() {
    pdfModal.querySelector('.modal-content').style.animation = 'fadeOut 0.3s ease-out both';

    setTimeout(() => {
        pdfModal.classList.remove('active');
        pdfModal.style.opacity = '0';
        pdfViewer.style.opacity = '0';
        pdfViewer.src = '';

        // Restore background scrolling
        document.body.style.overflow = '';
    }, 300);
}

/**
 * Enhanced event listeners setup
 */
function setupEventListeners() {
    // Search input with debouncing
    let searchTimeout;
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(handleSearch, 300);
        });
    }

    // Clear search button with animation
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            clearSearchBtn.style.transform = 'translateY(-50%) rotate(180deg)';
            clearSearchResults();
            setTimeout(() => {
                clearSearchBtn.style.transform = 'translateY(-50%) rotate(0deg)';
            }, 300);
        });
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

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Clean up animations on page unload
 */
window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }

    .subject-icon-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .subject-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
    }

    .subject-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    }

    .subject-button:hover .subject-glow {
        opacity: 1;
    }
`;
document.head.appendChild(style);