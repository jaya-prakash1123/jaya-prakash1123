const STORAGE_KEY = 'apptrack_applications';

class Store {
  constructor() {
    this.applications = this.loadData();
  }

  loadData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    // Return empty array initially, or some mock data if we want to demonstrate.
    // The user requested empty state if it's personal and persistent.
    return [];
  }

  saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.applications));
  }

  getAll() {
    return this.applications;
  }

  getById(id) {
    return this.applications.find(app => app.id === id);
  }

  addApp(appData) {
    const newApp = {
      ...appData,
      id: Date.now().toString(),
      dateUpdated: new Date().toISOString()
    };
    this.applications.push(newApp);
    this.saveData();
    return newApp;
  }

  updateApp(id, updatedData) {
    const index = this.applications.findIndex(app => app.id === id);
    if (index !== -1) {
      this.applications[index] = {
        ...this.applications[index],
        ...updatedData,
        dateUpdated: new Date().toISOString()
      };
      this.saveData();
      return this.applications[index];
    }
    return null;
  }

  deleteApp(id) {
    this.applications = this.applications.filter(app => app.id !== id);
    this.saveData();
  }

  // Returns {total, inProcess, offers, rejected}
  getStats() {
    return this.applications.reduce((acc, app) => {
      acc.total++;
      if (app.status === 'In Process') acc.inProcess++;
      if (app.status === 'Offer') acc.offers++;
      if (app.status === 'Rejected') acc.rejected++;
      return acc;
    }, { total: 0, inProcess: 0, offers: 0, rejected: 0 });
  }

  filterAndSort(searchTerm, filterStatus, sortBy) {
    let result = [...this.applications];

    // Filter by status
    if (filterStatus && filterStatus !== 'All') {
      result = result.filter(app => app.status === filterStatus);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(app => 
        app.company.toLowerCase().includes(term) || 
        app.position.toLowerCase().includes(term)
      );
    }

    // Sort
    result.sort((a, b) => {
      let valA = a[sortBy.replace('Desc', '').replace('Asc', '')] || '';
      let valB = b[sortBy.replace('Desc', '').replace('Asc', '')] || '';

      if (sortBy.includes('date')) {
        valA = new Date(a.dateApplied).getTime();
        valB = new Date(b.dateApplied).getTime();
        return sortBy.includes('Desc') ? valB - valA : valA - valB;
      }
      
      if (sortBy === 'salary') {
        // Strip non-numeric for basic sorting
        valA = parseInt(String(valA).replace(/\D/g, '')) || 0;
        valB = parseInt(String(valB).replace(/\D/g, '')) || 0;
        return valB - valA; // Descending
      }

      if (sortBy === 'rating') {
        valA = parseInt(valA) || 0;
        valB = parseInt(valB) || 0;
        return valB - valA; // Descending
      }

      // Default string sort for company, position
      return String(valA).localeCompare(String(valB));
    });

    return result;
  }
}

// Global instance
window.appStore = new Store();
