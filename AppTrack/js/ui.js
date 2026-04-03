class UI {
  constructor() {
    this.tableBody = document.getElementById('appTableBody');
    this.cardsContainer = document.getElementById('appCardsContainer');
    this.emptyState = document.getElementById('emptyState');
    
    this.statTotal = document.getElementById('statTotal');
    this.statInProcess = document.getElementById('statInProcess');
    this.statOffers = document.getElementById('statOffers');
    this.statRejected = document.getElementById('statRejected');
  }

  // Determine standard class based on status
  getStatusClass(status) {
    const map = {
      'Applied': 'status-applied',
      'In Process': 'status-inprocess',
      'Interview': 'status-interview',
      'Offer': 'status-offer',
      'Confirmed': 'status-confirmed',
      'Rejected': 'status-rejected'
    };
    return map[status] || 'status-applied';
  }

  // Render a 5 star display
  renderStars(rating) {
    let html = '<div class="rating-stars">';
    for (let i = 1; i <= 5; i++) {
        const iconClass = i <= rating ? '' : 'inactive';
        html += `<span class="material-icons-outlined ${iconClass}">${i <= rating ? 'star' : 'star_outline'}</span>`;
    }
    html += '</div>';
    return html;
  }

  formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  updateStats(stats) {
    this.statTotal.textContent = stats.total;
    this.statInProcess.textContent = stats.inProcess;
    this.statOffers.textContent = stats.offers;
    this.statRejected.textContent = stats.rejected;
  }

  renderApplications(applications) {
    this.tableBody.innerHTML = '';
    this.cardsContainer.innerHTML = '';

    if (applications.length === 0) {
      this.emptyState.style.display = 'block';
      this.tableBody.parentElement.style.display = 'none'; // Table
      this.cardsContainer.style.display = 'none';
      return;
    }

    this.emptyState.style.display = 'none';
    this.tableBody.parentElement.style.display = 'table';
    this.cardsContainer.style.display = 'grid'; // Handled via CSS media query, but let's reset inline style to empty so class takes over
    this.tableBody.parentElement.style.display = '';
    this.cardsContainer.style.display = '';


    applications.forEach(app => {
      // Create Table Row
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="td-strong">${app.company}</td>
        <td>${app.position}</td>
        <td><span class="status-chip ${this.getStatusClass(app.status)}">${app.status}</span></td>
        <td>${this.formatDate(app.dateApplied)}</td>
        <td>${app.location || '-'}</td>
        <td>${app.salary || '-'}</td>
        <td>${this.renderStars(app.rating)}</td>
        <td>
          <div class="action-menu">
            ${app.jobLink ? `<button class="icon-button" onclick="window.app.openLink('${app.jobLink}')" title="Open Link"><span class="material-icons-outlined">link</span></button>` : ''}
            <button class="icon-button" onclick="window.app.editApp('${app.id}')" title="Edit"><span class="material-icons-outlined">edit</span></button>
            <button class="icon-button" onclick="window.app.deleteApp('${app.id}')" title="Delete"><span class="material-icons-outlined">delete</span></button>
          </div>
        </td>
      `;
      // Row click to edit
      tr.addEventListener('click', (e) => {
        // Prevent clicking if standard buttons where clicked
        if(!e.target.closest('.icon-button')) {
            window.app.editApp(app.id);
        }
      });
      this.tableBody.appendChild(tr);

      // Create Mobile Card
      const card = document.createElement('div');
      card.className = 'app-card';
      card.innerHTML = `
        <div class="card-header">
            <div>
                <div class="card-title">${app.company}</div>
                <div class="card-subtitle">${app.position}</div>
            </div>
            <span class="status-chip ${this.getStatusClass(app.status)}">${app.status}</span>
        </div>
        <div class="card-meta">
            <span>${this.formatDate(app.dateApplied)} • ${app.location || 'N/A'}</span>
            ${app.salary ? `<span>${app.salary}</span>` : ''}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
             ${this.renderStars(app.rating)}
             <div class="action-menu">
                ${app.jobLink ? `<button class="icon-button" onclick="window.app.openLink('${app.jobLink}')" title="Open Link"><span class="material-icons-outlined" style="font-size:18px;">link</span></button>` : ''}
                <button class="icon-button" onclick="window.app.editApp('${app.id}')" title="Edit"><span class="material-icons-outlined" style="font-size:18px;">edit</span></button>
                <button class="icon-button" onclick="window.app.deleteApp('${app.id}')" title="Delete"><span class="material-icons-outlined" style="font-size:18px;">delete</span></button>
            </div>
        </div>
      `;
      card.addEventListener('click', (e) => {
        if(!e.target.closest('.icon-button')) {
            window.app.editApp(app.id);
        }
      });
      this.cardsContainer.appendChild(card);
    });
  }

  showDialog() {
    document.getElementById('appDialog').classList.add('open');
  }

  hideDialog() {
    document.getElementById('appDialog').classList.remove('open');
  }

  // Populate form with existing data or clear it
  populateForm(data = null) {
      const fields = ['company', 'position', 'status', 'dateApplied', 'location', 'salary', 'experience', 'referral', 'rating', 'jobLink', 'notes'];
      
      if (data) {
          document.getElementById('dialogTitle').textContent = 'Edit Application';
          document.getElementById('appId').value = data.id; // Map id to hidden input!

          fields.forEach(field => {
             const el = document.getElementById(field);
             if (el) el.value = data[field] || '';
          });
          this.updateRatingWidget(data.rating || 0);
      } else {
          document.getElementById('dialogTitle').textContent = 'Add Application';
          document.getElementById('appId').value = '';

          fields.forEach(field => {
             const el = document.getElementById(field);
             if (el) el.value = '';
          });
          document.getElementById('position').value = 'UI/UX'; // Set Job Title default
          document.getElementById('status').value = 'Applied';
          document.getElementById('dateApplied').value = new Date().toISOString().split('T')[0];
          document.getElementById('rating').value = '0';
          this.updateRatingWidget(0);
      }
  }

  getFormData() {
      return {
          id: document.getElementById('appId').value,
          company: document.getElementById('company').value,
          position: document.getElementById('position').value,
          status: document.getElementById('status').value,
          dateApplied: document.getElementById('dateApplied').value,
          location: document.getElementById('location').value,
          salary: document.getElementById('salary').value,
          experience: document.getElementById('experience').value,
          referral: document.getElementById('referral').value,
          rating: document.getElementById('rating').value,
          jobLink: document.getElementById('jobLink').value,
          notes: document.getElementById('notes').value
      };
  }

  updateRatingWidget(rating) {
      const stars = document.querySelectorAll('#ratingWidget .star');
      stars.forEach(star => {
          const val = parseInt(star.getAttribute('data-val'));
          if (val <= rating) {
              star.classList.add('active');
              star.textContent = 'star';
          } else {
              star.classList.remove('active');
              star.textContent = 'star_outline';
          }
      });
  }
}

// Global instance
window.appUI = new UI();
