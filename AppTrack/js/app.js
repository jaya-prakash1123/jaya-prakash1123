class App {
  constructor() {
    this.store = window.appStore;
    this.ui = window.appUI;
    
    // State
    this.currentSearch = '';
    this.currentFilter = 'All';
    this.currentSort = 'dateDesc';
    this.sortCol = 'date';
    this.sortDir = 'desc'; // 'asc' or 'desc'

    this.init();
  }

  init() {
    this.bindEvents();
    this.refreshView();
  }

  bindEvents() {
    // Top Bar
    document.getElementById('addAppBtn').addEventListener('click', () => {
      this.ui.populateForm();
      this.ui.showDialog();
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
      this.currentSearch = e.target.value;
      this.refreshView();
    });

    // Filter Chips
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        chips.forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        this.currentFilter = e.target.getAttribute('data-filter');
        this.refreshView();
      });
    });

    // Sort Dropdown
    document.getElementById('sortSelect').addEventListener('change', (e) => {
      this.currentSort = e.target.value;
      // Sync table headers if possible, but for simplicity let's just refresh
      this.clearTableSortHeaders();
      this.refreshView();
    });

    // Table Column Headers Sort
    const ths = document.querySelectorAll('th[data-sort-col]');
    ths.forEach(th => {
      th.addEventListener('click', (e) => {
        const col = th.getAttribute('data-sort-col');
        
        if (this.sortCol === col) {
            this.sortDir = this.sortDir === 'desc' ? 'asc' : 'desc';
        } else {
            this.sortCol = col;
            this.sortDir = 'desc';
        }

        this.updateTableSortHeaders(th);
        
        // Map table sort to internal sort value
        const sortMap = {
            'company': 'company',
            'position': 'company', // close enough, simplify
            'date': 'date' + (this.sortDir==='desc'?'Desc':'Asc'),
            'salary': 'salary', // We desc only in our simple implemention, but let's pass it
            'rating': 'rating'
        };
        this.currentSort = sortMap[col] || 'dateDesc';
        
        // sync dropdown
        const select = document.getElementById('sortSelect');
        if([...select.options].some(o => o.value === this.currentSort)) {
            select.value = this.currentSort;
        }

        this.refreshView();
      });
    });

    // Dialog Methods
    document.getElementById('dialogCloseBtn').addEventListener('click', () => this.ui.hideDialog());
    document.getElementById('dialogCancelBtn').addEventListener('click', () => this.ui.hideDialog());
    
    // Dialog backdrop click to close
    document.getElementById('appDialog').addEventListener('click', (e) => {
        if(e.target.id === 'appDialog') {
            this.ui.hideDialog();
        }
    });

    // Form Submission
    document.getElementById('appForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = this.ui.getFormData();
      
      if (formData.id) {
          this.store.updateApp(formData.id, formData);
      } else {
          this.store.addApp(formData);
      }
      
      this.ui.hideDialog();
      this.refreshView();
    });

    // Rating Widget
    const stars = document.querySelectorAll('#ratingWidget .star');
    stars.forEach(star => {
      star.addEventListener('click', (e) => {
          const val = e.target.getAttribute('data-val');
          document.getElementById('rating').value = val;
          this.ui.updateRatingWidget(val);
      });
    });

    // Test Link Button
    document.getElementById('testLinkBtn').addEventListener('click', () => {
        const url = document.getElementById('jobLink').value;
        if(url) window.open(url, '_blank');
    });

    // Export CSV
    document.getElementById('exportCsvBtn').addEventListener('click', () => this.exportCSV());
  }

  // --- Actions ---

  refreshView() {
    const list = this.store.filterAndSort(this.currentSearch, this.currentFilter, this.currentSort);
    this.ui.renderApplications(list);
    this.ui.updateStats(this.store.getStats());
  }

  editApp(id) {
      const app = this.store.getById(id);
      if(app) {
          this.ui.populateForm(app);
          this.ui.showDialog();
      }
  }

  deleteApp(id) {
      if(confirm('Are you sure you want to delete this application record?')) {
          this.store.deleteApp(id);
          this.refreshView();
      }
  }

  openLink(url) {
      if(url) window.open(url, '_blank');
  }

  // Header UI Sync
  clearTableSortHeaders() {
      document.querySelectorAll('th').forEach(th => {
          th.classList.remove('sort-asc', 'sort-desc');
      });
  }

  updateTableSortHeaders(activeTh) {
      this.clearTableSortHeaders();
      activeTh.classList.add(`sort-${this.sortDir}`);
  }

  // Export CSV
  exportCSV() {
    const data = this.store.getAll();
    if (data.length === 0) {
        alert("No data to export.");
        return;
    }

    const headers = ['Company', 'Position', 'Status', 'Date Applied', 'Location', 'Expected Salary', 'Years Exp', 'Referral', 'Rating', 'Job Link', 'Notes'];
    
    // Escape string for CSV format
    const escapeCsv = (str) => {
        if (!str) return '""';
        const s = String(str).replace(/"/g, '""');
        return `"${s}"`;
    };

    const rows = data.map(app => [
        escapeCsv(app.company),
        escapeCsv(app.position),
        escapeCsv(app.status),
        escapeCsv(app.dateApplied),
        escapeCsv(app.location),
        escapeCsv(app.salary),
        escapeCsv(app.experience),
        escapeCsv(app.referral),
        escapeCsv(app.rating),
        escapeCsv(app.jobLink),
        escapeCsv(app.notes)
    ].join(','));

    const csvContent = "data:text/csv;charset=utf-8," + headers.join(',') + "\n" + rows.join('\n');
    const encodedUri = encodeURI(csvContent);
    
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `apptrack_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Init App once DOM is loaded safely. Since scripts are at end of body, we can just instantiate.
window.app = new App();
