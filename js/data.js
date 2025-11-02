/**
 * PDF Data Array
 *
 * This array contains all PDF information for the study materials library.
 * Each PDF object should have the following properties:
 *
 * - id: Unique identifier (number)
 * - title: Display name of the PDF (string)
 * - category: Subject category (string) - must match category names exactly
 * - filename: PDF filename with extension (string)
 * - path: Relative path to the PDF file (string)
 * - description: Brief description of the content (string, optional)
 *
 * To add a new PDF:
 * 1. Upload the PDF file to the appropriate pdfs/[category]/ folder
 * 2. Add a new object to the pdfData array below with all required properties
 * 3. Make sure the category name matches existing categories or create a new one
 * 4. Ensure the path correctly points to the PDF file location
 */

const pdfData = [
    // Mathematics
    {
        id: 1,
        title: "Calculus - Chapter 1: Limits and Continuity",
        category: "Mathematics",
        filename: "calculus-limits.pdf",
        path: "pdfs/mathematics/calculus-limits.pdf",
        description: "Introduction to limits, continuity, and foundational calculus concepts"
    },
    {
        id: 2,
        title: "Linear Algebra - Matrix Operations",
        category: "Mathematics",
        filename: "linear-algebra-matrices.pdf",
        path: "pdfs/mathematics/linear-algebra-matrices.pdf",
        description: "Matrix operations, determinants, and linear transformations"
    },
    {
        id: 3,
        title: "Trigonometry Fundamentals",
        category: "Mathematics",
        filename: "trigonometry-basics.pdf",
        path: "pdfs/mathematics/trigonometry-basics.pdf",
        description: "Trigonometric functions, identities, and applications"
    },
    {
        id: 4,
        title: "Probability and Statistics - Basic Concepts",
        category: "Mathematics",
        filename: "probability-stats.pdf",
        path: "pdfs/mathematics/probability-stats.pdf",
        description: "Introduction to probability theory and statistical analysis"
    },

    // Science
    {
        id: 5,
        title: "Physics - Newton's Laws of Motion",
        category: "Science",
        filename: "newtons-laws.pdf",
        path: "pdfs/science/newtons-laws.pdf",
        description: "Comprehensive guide to Newton's three laws and their applications"
    },
    {
        id: 6,
        title: "Chemistry - Periodic Table and Elements",
        category: "Science",
        filename: "periodic-table.pdf",
        path: "pdfs/science/periodic-table.pdf",
        description: "Understanding the periodic table, element properties, and chemical families"
    },
    {
        id: 7,
        title: "Biology - Cell Structure and Function",
        category: "Science",
        filename: "cell-biology.pdf",
        path: "pdfs/science/cell-biology.pdf",
        description: "Detailed overview of cellular components and their functions"
    },
    {
        id: 8,
        title: "Physics - Electricity and Magnetism",
        category: "Science",
        filename: "electricity-magnetism.pdf",
        path: "pdfs/science/electricity-magnetism.pdf",
        description: "Principles of electric circuits, magnetic fields, and electromagnetic induction"
    },
    {
        id: 9,
        title: "Chemistry - Chemical Reactions and Equations",
        category: "Science",
        filename: "chemical-reactions.pdf",
        path: "pdfs/science/chemical-reactions.pdf",
        description: "Types of chemical reactions, balancing equations, and stoichiometry"
    },

    // English
    {
        id: 10,
        title: "Grammar Essentials - Parts of Speech",
        category: "English",
        filename: "grammar-parts-of-speech.pdf",
        path: "pdfs/english/grammar-parts-of-speech.pdf",
        description: "Complete guide to nouns, verbs, adjectives, and other parts of speech"
    },
    {
        id: 11,
        title: "Essay Writing Guide",
        category: "English",
        filename: "essay-writing.pdf",
        path: "pdfs/english/essay-writing.pdf",
        description: "Techniques for writing effective essays, from planning to editing"
    },
    {
        id: 12,
        title: "Literature Analysis - Shakespeare's Works",
        category: "English",
        filename: "shakespeare-analysis.pdf",
        path: "pdfs/english/shakespeare-analysis.pdf",
        description: "Critical analysis of major Shakespearean plays and sonnets"
    },
    {
        id: 13,
        title: "Vocabulary Building Strategies",
        category: "English",
        filename: "vocabulary-building.pdf",
        path: "pdfs/english/vocabulary-building.pdf",
        description: "Proven methods for expanding vocabulary and word usage"
    },

    // History
    {
        id: 14,
        title: "World War II - Major Events and Timeline",
        category: "History",
        filename: "world-war-2.pdf",
        path: "pdfs/history/world-war-2.pdf",
        description: "Comprehensive timeline and analysis of World War II events"
    },
    {
        id: 15,
        title: "Ancient Civilizations - Egypt, Greece, and Rome",
        category: "History",
        filename: "ancient-civilizations.pdf",
        path: "pdfs/history/ancient-civilizations.pdf",
        description: "Study of ancient Egyptian, Greek, and Roman civilizations"
    },
    {
        id: 16,
        title: "The Industrial Revolution",
        category: "History",
        filename: "industrial-revolution.pdf",
        path: "pdfs/history/industrial-revolution.pdf",
        description: "Impact of industrialization on society, economy, and technology"
    },
    {
        id: 17,
        title: "American History - The Civil Rights Movement",
        category: "History",
        filename: "civil-rights-movement.pdf",
        path: "pdfs/history/civil-rights-movement.pdf",
        description: "Key events, leaders, and achievements of the Civil Rights Movement"
    }
];

/**
 * Subject Icons and Information
 * Configuration for subject display on the main page
 */
const subjectInfo = {
    "Mathematics": {
        icon: "∫", // Integral symbol
        color: "#3b82f6"
    },
    "Science": {
        icon: "⚛", // Atom symbol
        color: "#10b981"
    },
    "English": {
        icon: "📖", // Book symbol
        color: "#f59e0b"
    },
    "History": {
        icon: "🏛", // Building/temple symbol
        color: "#8b5cf6"
    }
};