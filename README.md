# Study Materials Library

A clean and simple static website for browsing, viewing, and downloading educational PDF materials. Built with vanilla HTML, CSS, and JavaScript - no frameworks or build tools required.

## Features

- **Subject Grid Layout** - Clean 2-button grid for each subject on the main page
- **Separate Subject Pages** - Each subject has its own dedicated page
- **Real-time Search** - Search PDFs by title, subject, or description as you type
- **PDF Viewer** - View PDFs in a modal overlay without leaving the page
- **Direct Downloads** - One-click download to save PDFs locally
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Accessible** - Keyboard navigation and screen reader friendly

## Demo

Visit the live site: [Your GitHub Pages URL will be here after deployment]

## Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/jaya-prakash1123/jaya-prakash1123.git
cd jaya-prakash1123
```

### 2. Add Your PDF Files

Place your PDF files in the appropriate subject folders:

```
pdfs/
├── mathematics/
├── science/
├── english/
├── history/
└── [add more subjects as needed]/
```

### 3. Update the PDF Data

Edit `js/data.js` and add entries for your PDFs:

```javascript
{
    id: 18,
    title: "Your PDF Title",
    category: "Mathematics",
    filename: "your-file.pdf",
    path: "pdfs/mathematics/your-file.pdf",
    description: "Brief description of the content"
}
```

### 4. Open in Browser

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Project Structure

```
jaya-prakash1123/
├── index.html              # Main page with subject grid
├── mathematics.html        # Mathematics subject page
├── science.html            # Science subject page
├── english.html            # English subject page
├── history.html            # History subject page
├── css/
│   └── styles.css         # All styling (responsive design included)
├── js/
│   ├── data.js            # PDF data array (edit this to add/remove PDFs)
│   └── main.js            # All JavaScript functionality
├── pdfs/
│   ├── mathematics/       # Math PDFs
│   ├── science/           # Science PDFs
│   ├── english/           # English PDFs
│   ├── history/           # History PDFs
│   └── [other subjects]/  # Add more categories as needed
└── README.md              # This file
```

## Navigation Structure

### Main Page (`index.html`)
- Shows a **2-button grid layout** of all subjects
- Each subject button displays:
  - Subject icon (mathematical symbols, emojis)
  - Subject name
  - PDF count for that subject
- Click any subject button to navigate to that subject's page

### Subject Pages
- **Dedicated pages** for each subject (`mathematics.html`, `science.html`, etc.)
- **Back button** to return to the main page
- **Complete PDF list** for that subject
- Same PDF viewing and downloading functionality

### Search Functionality
- **Global search** works across all subjects
- **Results grouped by category** for easy navigation
- **Real-time filtering** as you type

## How to Add PDFs

### Step 1: Upload PDF File

Add your PDF to the appropriate subject folder in `pdfs/`:

```bash
# Example: Adding a new physics PDF
cp path/to/quantum-mechanics.pdf pdfs/science/
```

### Step 2: Update Data Array

Open `js/data.js` and add a new entry:

```javascript
{
    id: 18,  // Use next available number
    title: "Quantum Mechanics - Introduction",
    category: "Science",  // Must match folder name (case-sensitive)
    filename: "quantum-mechanics.pdf",
    path: "pdfs/science/quantum-mechanics.pdf",
    description: "Introduction to quantum theory and wave mechanics"
}
```

### Step 3: Add Subject Page (if new category)

If you're adding a new subject category, create a new HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Subject - Study Materials Library</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Header -->
    <header class="subject-header">
        <a href="index.html" class="back-button">← Back to Subjects</a>
        <h1 class="subject-title">New Subject</h1>
        <div style="width: 100px;"></div>
    </header>

    <!-- Main Content -->
    <main id="mainContent">
        <div class="subject-container">
            <div class="pdf-list">
                <!-- PDF items will be populated by JavaScript -->
            </div>
        </div>
    </main>

    <!-- PDF Modal Viewer -->
    <div id="pdfModal" class="modal">
        <div class="modal-content">
            <button id="closeModal" class="close-btn">×</button>
            <iframe id="pdfViewer" title="PDF Viewer"></iframe>
        </div>
    </div>

    <!-- Footer -->
    <footer class="site-footer">
        <p>&copy; 2024 Study Materials Library. All rights reserved.</p>
    </footer>

    <!-- Scripts -->
    <script src="js/data.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

### Step 4: Refresh Page

The new PDF and subject will automatically appear on the main page grid.

## How to Add New Subjects

### Step 1: Create Folder and Page

```bash
# Create PDF folder
mkdir pdfs/computer-science

# Create HTML page
cp english.html computer-science.html
# Then edit the title and subject name in the new HTML file
```

### Step 2: Update Subject Icons (Optional)

In `js/data.js`, add custom icon and color for your new subject:

```javascript
const subjectInfo = {
    "Computer Science": {
        icon: "💻",  // Laptop icon
        color: "#3b82f6"
    }
};
```

### Step 3: Add PDFs to Data

When you add PDFs with a new category name, the subject button will automatically appear on the main page grid.

## Design Features

### Subject Grid Layout
- **2 buttons per row** on larger screens
- **Responsive design** - adjusts to 1 button on mobile
- **Square buttons** with minimum height for visual balance
- **Subject icons** with custom colors for visual distinction
- **PDF counts** displayed under each subject name
- **Hover effects** with elevation and color changes

### Subject Pages
- **Consistent styling** with the main page
- **Back navigation** for easy browsing
- **Full PDF lists** with all viewing and download functionality
- **Professional headers** with subject-specific colors

## Deployment

### GitHub Pages (Recommended)

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source: `main` branch, `/` (root) folder
4. Click Save
5. Your site will be live at: `https://[username].github.io/[repository-name]/`

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` or `.`
4. Deploy

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy (no configuration needed)

## Customization

### Change Subject Icons

Edit the `subjectInfo` object in `js/data.js`:

```javascript
const subjectInfo = {
    "Mathematics": {
        icon: "∫", // Change to any symbol or emoji
        color: "#3b82f6" // Change color
    }
};
```

### Change Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #1e3a8a;  /* Navy blue - change to your color */
    --primary-hover: #1e40af;
    /* ... other colors */
}
```

### Change Grid Layout

Modify the grid in `css/styles.css`:

```css
.subjects-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 per row */
    max-width: 800px; /* Adjust as needed */
}
```

## Browser Compatibility

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** PDF viewing relies on the browser's built-in PDF viewer. All modern browsers support this.

## Features in Detail

### Subject Grid

- **Clean 2-button layout** on desktop
- **Responsive** - single column on mobile
- **Square aspect ratio** buttons
- **Subject icons** with custom colors
- **PDF counts** automatically calculated
- **Smooth hover animations**

### Search Functionality

- **Real-time filtering** as you type
- **Case-insensitive** matching
- Searches through:
  - PDF titles
  - Subject names
  - Descriptions
- **Results grouped by category**
- Clear button to reset search

### Subject Pages

- **Dedicated pages** for each subject
- **Back navigation** to main page
- **Complete PDF lists** with full functionality
- **Consistent styling** throughout

### PDF Viewer Modal

- Opens PDF in **overlay modal**
- Click **X button** or click **outside modal** to close
- Press **Escape key** to close
- Prevents background scrolling when open

### Responsive Design

- **Desktop**: 2-button grid layout
- **Tablet**: Adjusted layouts for medium screens
- **Mobile**: Single-column, touch-friendly buttons (min 44px)
- Modal scales appropriately on all screen sizes

## Important Notes

### File Size Considerations

- GitHub has a **100MB per file** limit
- Keep total repository size **under 1GB** for best performance
- Consider compressing large PDFs

### CORS and Local Testing

- PDFs load fine when:
  - Served via web server (http://localhost:8000)
  - Deployed to hosting (GitHub Pages, Netlify, etc.)
- Some browsers block PDFs when opening `index.html` directly as a file (`file://`)
- **Solution**: Use a local web server for testing (see Quick Start)

## Troubleshooting

### Subject Grid Not Showing

1. Verify `js/data.js` has PDF data
2. Check that `pdfData` array contains categories
3. Check browser console for JavaScript errors

### Subject Pages Not Loading PDFs

1. Check that `subjectInfo` in `js/data.js` has the correct category name
2. Ensure category names match exactly (case-sensitive)
3. Verify PDF paths in the data array

### PDFs Not Loading

1. Check that PDF path in `data.js` is correct
2. Ensure PDF file exists in the specified folder
3. Use a web server (not `file://` protocol)
4. Check browser console for errors (F12)

### Navigation Issues

1. Ensure all HTML files exist (`mathematics.html`, `science.html`, etc.)
2. Check that the `.html` files are in the same directory as `index.html`
3. Verify file names are lowercase and match the links

### Styling Issues

1. Verify `css/styles.css` is linked in all HTML files
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check for CSS syntax errors

## Performance Tips

- Compress PDF files before uploading
- Limit descriptions to 1-2 sentences
- Consider pagination if you have 100+ PDFs per subject
- Optimize images if you add any to the site

## Contributing

Feel free to fork this project and customize it for your needs. If you add useful features, consider sharing them back!

## License

This project is open source and available for anyone to use and modify.

## Credits

Built with vanilla HTML, CSS, and JavaScript. No frameworks or dependencies required.

---

**Need Help?** Open an issue on GitHub or check the troubleshooting section above.