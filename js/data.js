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
    {
        id: 1,
        title: "Anatomy Of Flowering Plants",
        category: "Biology",
        filename: "Anatomy of flowering plants.pdf",
        path: "pdfs/Biology/Anatomy of flowering plants.pdf",
        description: ""
    },
    {
        id: 2,
        title: "Animal Kingdom",
        category: "Biology",
        filename: "Animal kingdom.pdf",
        path: "pdfs/Biology/Animal kingdom.pdf",
        description: ""
    },
    {
        id: 3,
        title: "Biodiversity And Conservation",
        category: "Biology",
        filename: "Biodiversity and conservation.pdf",
        path: "pdfs/Biology/Biodiversity and conservation.pdf",
        description: ""
    },
    {
        id: 4,
        title: "Biological Classification",
        category: "Biology",
        filename: "Biological classification.pdf",
        path: "pdfs/Biology/Biological classification.pdf",
        description: ""
    },
    {
        id: 5,
        title: "Biomolecules",
        category: "Biology",
        filename: "Biomolecules.pdf",
        path: "pdfs/Biology/Biomolecules.pdf",
        description: ""
    },
    {
        id: 6,
        title: "Biotechonology And Its Applications",
        category: "Biology",
        filename: "Biotechonology and its applications.pdf",
        path: "pdfs/Biology/Biotechonology and its applications.pdf",
        description: ""
    },
    {
        id: 7,
        title: "Biotechonology Principles And Processes",
        category: "Biology",
        filename: "Biotechonology principles and processes.pdf",
        path: "pdfs/Biology/Biotechonology principles and processes.pdf",
        description: ""
    },
    {
        id: 8,
        title: "Body Fluids And Circulation",
        category: "Biology",
        filename: "Body fluids and circulation.pdf",
        path: "pdfs/Biology/Body fluids and circulation.pdf",
        description: ""
    },
    {
        id: 9,
        title: "Breathing And Exchage Of Gases",
        category: "Biology",
        filename: "Breathing and exchage of gases.pdf",
        path: "pdfs/Biology/Breathing and exchage of gases.pdf",
        description: ""
    },
    {
        id: 10,
        title: "Cell Cycle And Cell Division",
        category: "Biology",
        filename: "Cell cycle and cell division.pdf",
        path: "pdfs/Biology/Cell cycle and cell division.pdf",
        description: ""
    },
    {
        id: 11,
        title: "Cell The Unit Of Life",
        category: "Biology",
        filename: "Cell The unit of life.pdf",
        path: "pdfs/Biology/Cell The unit of life.pdf",
        description: ""
    },
    {
        id: 12,
        title: "Chemical Coordination And Integration",
        category: "Biology",
        filename: "Chemical coordination and integration.pdf",
        path: "pdfs/Biology/Chemical coordination and integration.pdf",
        description: ""
    },
    {
        id: 13,
        title: "Ecosystem",
        category: "Biology",
        filename: "Ecosystem.pdf",
        path: "pdfs/Biology/Ecosystem.pdf",
        description: ""
    },
    {
        id: 14,
        title: "Evolution",
        category: "Biology",
        filename: "Evolution.pdf",
        path: "pdfs/Biology/Evolution.pdf",
        description: ""
    },
    {
        id: 15,
        title: "Excreator Products And Their Elimination",
        category: "Biology",
        filename: "Excreator products and their elimination.pdf",
        path: "pdfs/Biology/Excreator products and their elimination.pdf",
        description: ""
    },
    {
        id: 16,
        title: "Human Health And Disease",
        category: "Biology",
        filename: "Human health and disease.pdf",
        path: "pdfs/Biology/Human health and disease.pdf",
        description: ""
    },
    {
        id: 17,
        title: "Human Reproduction",
        category: "Biology",
        filename: "Human reproduction.pdf",
        path: "pdfs/Biology/Human reproduction.pdf",
        description: ""
    },
    {
        id: 18,
        title: "Kebo1Ps",
        category: "Biology",
        filename: "kebo1ps.pdf",
        path: "pdfs/Biology/kebo1ps.pdf",
        description: ""
    },
    {
        id: 19,
        title: "Locomotion And Movement",
        category: "Biology",
        filename: "Locomotion and movement.pdf",
        path: "pdfs/Biology/Locomotion and movement.pdf",
        description: ""
    },
    {
        id: 20,
        title: "Microbes In Human Welfare",
        category: "Biology",
        filename: "Microbes in human welfare.pdf",
        path: "pdfs/Biology/Microbes in human welfare.pdf",
        description: ""
    },
    {
        id: 21,
        title: "Molecular Basis Of Inheritance",
        category: "Biology",
        filename: "Molecular basis of inheritance.pdf",
        path: "pdfs/Biology/Molecular basis of inheritance.pdf",
        description: ""
    },
    {
        id: 22,
        title: "Morphology Of Flovering Plants",
        category: "Biology",
        filename: "Morphology of flovering plants.pdf",
        path: "pdfs/Biology/Morphology of flovering plants.pdf",
        description: ""
    },
    {
        id: 23,
        title: "Neural Control And Coordination",
        category: "Biology",
        filename: "Neural control and coordination.pdf",
        path: "pdfs/Biology/Neural control and coordination.pdf",
        description: ""
    },
    {
        id: 24,
        title: "Organisams And Populations",
        category: "Biology",
        filename: "Organisams and populations.pdf",
        path: "pdfs/Biology/Organisams and populations.pdf",
        description: ""
    },
    {
        id: 25,
        title: "Photosynthesis In Higher Plants",
        category: "Biology",
        filename: "Photosynthesis in higher plants.pdf",
        path: "pdfs/Biology/Photosynthesis in higher plants.pdf",
        description: ""
    },
    {
        id: 26,
        title: "Plant Growth And Development",
        category: "Biology",
        filename: "Plant growth and development.pdf",
        path: "pdfs/Biology/Plant growth and development.pdf",
        description: ""
    },
    {
        id: 27,
        title: "Plant Kingdom",
        category: "Biology",
        filename: "Plant kingdom.pdf",
        path: "pdfs/Biology/Plant kingdom.pdf",
        description: ""
    },
    {
        id: 28,
        title: "Principles Of Inheritance And Variation",
        category: "Biology",
        filename: "Principles of inheritance and variation.pdf",
        path: "pdfs/Biology/Principles of inheritance and variation.pdf",
        description: ""
    },
    {
        id: 29,
        title: "Reproduction In Flowering Plants",
        category: "Biology",
        filename: "Reproduction in flowering plants.pdf",
        path: "pdfs/Biology/Reproduction in flowering plants.pdf",
        description: ""
    },
    {
        id: 30,
        title: "Reproductive Health",
        category: "Biology",
        filename: "Reproductive health.pdf",
        path: "pdfs/Biology/Reproductive health.pdf",
        description: ""
    },
    {
        id: 31,
        title: "Respiration In Plants",
        category: "Biology",
        filename: "Respiration in plants.pdf",
        path: "pdfs/Biology/Respiration in plants.pdf",
        description: ""
    },
    {
        id: 32,
        title: "Structural Organisation In Animals",
        category: "Biology",
        filename: "structural organisation in animals.pdf",
        path: "pdfs/Biology/structural organisation in animals.pdf",
        description: ""
    },
    {
        id: 33,
        title: "The Living World",
        category: "Biology",
        filename: "The living world.pdf",
        path: "pdfs/Biology/The living world.pdf",
        description: ""
    },
    {
        id: 34,
        title: "Alcohols, Phenols, Ethers",
        category: "Chemistry",
        filename: "Alcohols, Phenols, Ethers.pdf",
        path: "pdfs/Chemistry/Alcohols, Phenols, Ethers.pdf",
        description: ""
    },
    {
        id: 35,
        title: "Aldehydes, Ketones And Carboxylic Acids",
        category: "Chemistry",
        filename: "Aldehydes, Ketones and Carboxylic acids.pdf",
        path: "pdfs/Chemistry/Aldehydes, Ketones and Carboxylic acids.pdf",
        description: ""
    },
    {
        id: 36,
        title: "Amines",
        category: "Chemistry",
        filename: "Amines.pdf",
        path: "pdfs/Chemistry/Amines.pdf",
        description: ""
    },
    {
        id: 37,
        title: "Biomolecules",
        category: "Chemistry",
        filename: "Biomolecules.pdf",
        path: "pdfs/Chemistry/Biomolecules.pdf",
        description: ""
    },
    {
        id: 38,
        title: "Chemical Bonding And Molecular Structure",
        category: "Chemistry",
        filename: "Chemical bonding and molecular structure.pdf",
        path: "pdfs/Chemistry/Chemical bonding and molecular structure.pdf",
        description: ""
    },
    {
        id: 39,
        title: "Chemical Kinetics",
        category: "Chemistry",
        filename: "Chemical kinetics.pdf",
        path: "pdfs/Chemistry/Chemical kinetics.pdf",
        description: ""
    },
    {
        id: 40,
        title: "Clasification Of Elements And Periodic Properties",
        category: "Chemistry",
        filename: "Clasification of elements and periodic properties.pdf",
        path: "pdfs/Chemistry/Clasification of elements and periodic properties.pdf",
        description: ""
    },
    {
        id: 41,
        title: "Coordination Compounds",
        category: "Chemistry",
        filename: "Coordination compounds.pdf",
        path: "pdfs/Chemistry/Coordination compounds.pdf",
        description: ""
    },
    {
        id: 42,
        title: "Electrochemistry",
        category: "Chemistry",
        filename: "Electrochemistry.pdf",
        path: "pdfs/Chemistry/Electrochemistry.pdf",
        description: ""
    },
    {
        id: 43,
        title: "Equilibrium",
        category: "Chemistry",
        filename: "Equilibrium.pdf",
        path: "pdfs/Chemistry/Equilibrium.pdf",
        description: ""
    },
    {
        id: 44,
        title: "Haloalkanes And Haloarenes",
        category: "Chemistry",
        filename: "Haloalkanes and Haloarenes.pdf",
        path: "pdfs/Chemistry/Haloalkanes and Haloarenes.pdf",
        description: ""
    },
    {
        id: 45,
        title: "Solutions",
        category: "Chemistry",
        filename: "Solutions.pdf",
        path: "pdfs/Chemistry/Solutions.pdf",
        description: ""
    },
    {
        id: 46,
        title: "Some Basic Concepts Of Chemistry",
        category: "Chemistry",
        filename: "Some basic concepts of chemistry.pdf",
        path: "pdfs/Chemistry/Some basic concepts of chemistry.pdf",
        description: ""
    },
    {
        id: 47,
        title: "Structure Of Atom",
        category: "Chemistry",
        filename: "Structure of atom.pdf",
        path: "pdfs/Chemistry/Structure of atom.pdf",
        description: ""
    },
    {
        id: 48,
        title: "The D And F Block Elements",
        category: "Chemistry",
        filename: "The D and F block elements.pdf",
        path: "pdfs/Chemistry/The D and F block elements.pdf",
        description: ""
    },
    {
        id: 49,
        title: "Thermodynamics",
        category: "Chemistry",
        filename: "Thermodynamics.pdf",
        path: "pdfs/Chemistry/Thermodynamics.pdf",
        description: ""
    },
    {
        id: 50,
        title: "pygame",
        category: "Math",
        filename: "Application of integrals.pdf",
        path: "pdfs/Math/Application of integrals.pdf",
        description: ""
    },
    {
        id: 51,
        title: "Applications Of Derivatives",
        category: "Math",
        filename: "Applications of derivatives.pdf",
        path: "pdfs/Math/Applications of derivatives.pdf",
        description: ""
    },
    {
        id: 52,
        title: "Binomial Theorem",
        category: "Math",
        filename: "Binomial theorem.pdf",
        path: "pdfs/Math/Binomial theorem.pdf",
        description: ""
    },
    {
        id: 53,
        title: "Complex Numbers And Quadratic Equations",
        category: "Math",
        filename: "Complex numbers and quadratic equations.pdf",
        path: "pdfs/Math/Complex numbers and quadratic equations.pdf",
        description: ""
    },
    {
        id: 54,
        title: "Conic Sections",
        category: "Math",
        filename: "Conic sections.pdf",
        path: "pdfs/Math/Conic sections.pdf",
        description: ""
    },
    {
        id: 55,
        title: "Continuity And Differentiability",
        category: "Math",
        filename: "Continuity and differentiability.pdf",
        path: "pdfs/Math/Continuity and differentiability.pdf",
        description: ""
    },
    {
        id: 56,
        title: "Determinants",
        category: "Math",
        filename: "Determinants.pdf",
        path: "pdfs/Math/Determinants.pdf",
        description: ""
    },
    {
        id: 57,
        title: "Differential Equations",
        category: "Math",
        filename: "Differential equations.pdf",
        path: "pdfs/Math/Differential equations.pdf",
        description: ""
    },
    {
        id: 58,
        title: "Integrals",
        category: "Math",
        filename: "Integrals.pdf",
        path: "pdfs/Math/Integrals.pdf",
        description: ""
    },
    {
        id: 59,
        title: "Introduction To 3D Geometry",
        category: "Math",
        filename: "Introduction to 3d geometry.pdf",
        path: "pdfs/Math/Introduction to 3d geometry.pdf",
        description: ""
    },
    {
        id: 60,
        title: "Inverse Trigonometric Functions",
        category: "Math",
        filename: "Inverse trigonometric functions.pdf",
        path: "pdfs/Math/Inverse trigonometric functions.pdf",
        description: ""
    },
    {
        id: 61,
        title: "Limits And Derivatives",
        category: "Math",
        filename: "Limits and derivatives.pdf",
        path: "pdfs/Math/Limits and derivatives.pdf",
        description: ""
    },
    {
        id: 62,
        title: "Linear Inequalities",
        category: "Math",
        filename: "Linear inequalities.pdf",
        path: "pdfs/Math/Linear inequalities.pdf",
        description: ""
    },
    {
        id: 63,
        title: "Linear Programming",
        category: "Math",
        filename: "Linear programming.pdf",
        path: "pdfs/Math/Linear programming.pdf",
        description: ""
    },
    {
        id: 64,
        title: "Matrices",
        category: "Math",
        filename: "Matrices.pdf",
        path: "pdfs/Math/Matrices.pdf",
        description: ""
    },
    {
        id: 65,
        title: "Permutations And Combinations",
        category: "Math",
        filename: "Permutations and combinations.pdf",
        path: "pdfs/Math/Permutations and combinations.pdf",
        description: ""
    },
    {
        id: 66,
        title: "Probability",
        category: "Math",
        filename: "Probability.pdf",
        path: "pdfs/Math/Probability.pdf",
        description: ""
    },
    {
        id: 67,
        title: "Relations And Functions",
        category: "Math",
        filename: "Relations and Functions.pdf",
        path: "pdfs/Math/Relations and Functions.pdf",
        description: ""
    },
    {
        id: 68,
        title: "Sequences And Series",
        category: "Math",
        filename: "Sequences and series.pdf",
        path: "pdfs/Math/Sequences and series.pdf",
        description: ""
    },
    {
        id: 69,
        title: "Sets",
        category: "Math",
        filename: "Sets.pdf",
        path: "pdfs/Math/Sets.pdf",
        description: ""
    },
    {
        id: 70,
        title: "Statistics",
        category: "Math",
        filename: "statistics.pdf",
        path: "pdfs/Math/statistics.pdf",
        description: ""
    },
    {
        id: 71,
        title: "Stright Lines",
        category: "Math",
        filename: "Stright lines.pdf",
        path: "pdfs/Math/Stright lines.pdf",
        description: ""
    },
    {
        id: 72,
        title: "Trignometric Functions",
        category: "Math",
        filename: "Trignometric functions.pdf",
        path: "pdfs/Math/Trignometric functions.pdf",
        description: ""
    },
    {
        id: 73,
        title: "Vector Algebra",
        category: "Math",
        filename: "Vector algebra.pdf",
        path: "pdfs/Math/Vector algebra.pdf",
        description: ""
    },
    {
        id: 74,
        title: "Alternating Current",
        category: "Physics",
        filename: "Alternating current.pdf",
        path: "pdfs/Physics/Alternating current.pdf",
        description: ""
    },
    {
        id: 75,
        title: "Atoms",
        category: "Physics",
        filename: "Atoms.pdf",
        path: "pdfs/Physics/Atoms.pdf",
        description: ""
    },
    {
        id: 76,
        title: "Current Electricity",
        category: "Physics",
        filename: "Current electricity.pdf",
        path: "pdfs/Physics/Current electricity.pdf",
        description: ""
    },
    {
        id: 77,
        title: "Duel Nature Of Radiation And Matter",
        category: "Physics",
        filename: "Duel nature of radiation and matter.pdf",
        path: "pdfs/Physics/Duel nature of radiation and matter.pdf",
        description: ""
    },
    {
        id: 78,
        title: "Electric Charges And Fields",
        category: "Physics",
        filename: "Electric charges and fields.pdf",
        path: "pdfs/Physics/Electric charges and fields.pdf",
        description: ""
    },
    {
        id: 79,
        title: "Electromagnetic Induction",
        category: "Physics",
        filename: "Electromagnetic induction.pdf",
        path: "pdfs/Physics/Electromagnetic induction.pdf",
        description: ""
    },
    {
        id: 80,
        title: "Electromangetic Waves",
        category: "Physics",
        filename: "Electromangetic waves.pdf",
        path: "pdfs/Physics/Electromangetic waves.pdf",
        description: ""
    },
    {
        id: 81,
        title: "Electrostatic Potential And Capacitance",
        category: "Physics",
        filename: "Electrostatic potential and capacitance.pdf",
        path: "pdfs/Physics/Electrostatic potential and capacitance.pdf",
        description: ""
    },
    {
        id: 82,
        title: "Gravitation",
        category: "Physics",
        filename: "Gravitation.pdf",
        path: "pdfs/Physics/Gravitation.pdf",
        description: ""
    },
    {
        id: 83,
        title: "Laws Of Motion",
        category: "Physics",
        filename: "Laws of motion.pdf",
        path: "pdfs/Physics/Laws of motion.pdf",
        description: ""
    },
    {
        id: 84,
        title: "Magnetism And Matter",
        category: "Physics",
        filename: "Magnetism and Matter.pdf",
        path: "pdfs/Physics/Magnetism and Matter.pdf",
        description: ""
    },
    {
        id: 85,
        title: "Motion In A Plane",
        category: "Physics",
        filename: "Motion in a plane.pdf",
        path: "pdfs/Physics/Motion in a plane.pdf",
        description: ""
    },
    {
        id: 86,
        title: "Motion In A Stright Line",
        category: "Physics",
        filename: "Motion in a stright line.pdf",
        path: "pdfs/Physics/Motion in a stright line.pdf",
        description: ""
    },
    {
        id: 87,
        title: "Moving Charges And Magnetism",
        category: "Physics",
        filename: "Moving charges and magnetism.pdf",
        path: "pdfs/Physics/Moving charges and magnetism.pdf",
        description: ""
    },
    {
        id: 88,
        title: "Nuclei",
        category: "Physics",
        filename: "Nuclei.pdf",
        path: "pdfs/Physics/Nuclei.pdf",
        description: ""
    },
    {
        id: 89,
        title: "Ray Optics And Optical Instruments",
        category: "Physics",
        filename: "Ray optics and optical instruments.pdf",
        path: "pdfs/Physics/Ray optics and optical instruments.pdf",
        description: ""
    },
    {
        id: 90,
        title: "Semiconductor Electronics  Materials, Devices And Simple Circuits",
        category: "Physics",
        filename: "Semiconductor electronics- Materials, devices and simple circuits.pdf",
        path: "pdfs/Physics/Semiconductor electronics- Materials, devices and simple circuits.pdf",
        description: ""
    },
    {
        id: 91,
        title: "System Of Particles And Rotational Motion",
        category: "Physics",
        filename: "System of particles and Rotational motion.pdf",
        path: "pdfs/Physics/System of particles and Rotational motion.pdf",
        description: ""
    },
    {
        id: 92,
        title: "Units And Measurements",
        category: "Physics",
        filename: "Units and measurements.pdf",
        path: "pdfs/Physics/Units and measurements.pdf",
        description: ""
    },
    {
        id: 93,
        title: "Wave Optics",
        category: "Physics",
        filename: "Wave optics.pdf",
        path: "pdfs/Physics/Wave optics.pdf",
        description: ""
    },
    {
        id: 94,
        title: "Work, Power, Energy",
        category: "Physics",
        filename: "Work, Power, Energy.pdf",
        path: "pdfs/Physics/Work, Power, Energy.pdf",
        description: ""
    },
    {
        id: 95,
        title: "Introduction to Computer Science",
        category: "Computer Science",
        filename: "Introduction to Computer Science.pdf",
        path: "pdfs/Computer Science/Introduction to Computer Science.pdf",
        description: "Fundamental concepts and principles of computer science"
    },
    {
        id: 96,
        title: "Data Structures and Algorithms",
        category: "Computer Science",
        filename: "Data Structures and Algorithms.pdf",
        path: "pdfs/Computer Science/Data Structures and Algorithms.pdf",
        description: "Core data structures and algorithm analysis techniques"
    },
    {
        id: 97,
        title: "Web Development Fundamentals",
        category: "Computer Science",
        filename: "Web Development Fundamentals.pdf",
        path: "pdfs/Computer Science/Web Development Fundamentals.pdf",
        description: "HTML, CSS, JavaScript and modern web development practices"
    },
    {
        id: 98,
        title: "Database Management Systems",
        category: "Computer Science",
        filename: "Database Management Systems.pdf",
        path: "pdfs/Computer Science/Database Management Systems.pdf",
        description: "Relational databases, SQL, and database design principles"
    },
    {
        id: 99,
        title: "Object-Oriented Programming",
        category: "Computer Science",
        filename: "Object-Oriented Programming.pdf",
        path: "pdfs/Computer Science/Object-Oriented Programming.pdf",
        description: "OOP concepts, design patterns, and principles"
    },
    {
        id: 100,
        title: "Computer Networks",
        category: "Computer Science",
        filename: "Computer Networks.pdf",
        path: "pdfs/Computer Science/Computer Networks.pdf",
        description: "Network protocols, architectures, and communication systems"
    },
    {
        id: 101,
        title: "Operating Systems",
        category: "Computer Science",
        filename: "Operating Systems.pdf",
        path: "pdfs/Computer Science/Operating Systems.pdf",
        description: "Process management, memory management, and file systems"
    },
    {
        id: 102,
        title: "Software Engineering",
        category: "Computer Science",
        filename: "Software Engineering.pdf",
        path: "pdfs/Computer Science/Software Engineering.pdf",
        description: "Software development methodologies and best practices"
    },
    {
        id: 103,
        title: "Artificial Intelligence",
        category: "Computer Science",
        filename: "Artificial Intelligence.pdf",
        path: "pdfs/Computer Science/Artificial Intelligence.pdf",
        description: "Introduction to AI concepts, machine learning fundamentals"
    },
    {
        id: 104,
        title: "Cybersecurity Essentials",
        category: "Computer Science",
        filename: "Cybersecurity Essentials.pdf",
        path: "pdfs/Computer Science/Cybersecurity Essentials.pdf",
        description: "Network security, cryptography, and protection mechanisms"
    },
    {
        id: 105,
        title: "Python Programming",
        category: "Computer Science",
        filename: "Python Programming.pdf",
        path: "pdfs/Computer Science/Python Programming.pdf",
        description: "Comprehensive guide to Python programming language"
    },
    {
        id: 106,
        title: "Java Programming",
        category: "Computer Science",
        filename: "Java Programming.pdf",
        path: "pdfs/Computer Science/Java Programming.pdf",
        description: "Object-oriented programming with Java"
    },
    {
        id: 107,
        title: "Mobile App Development",
        category: "Computer Science",
        filename: "Mobile App Development.pdf",
        path: "pdfs/Computer Science/Mobile App Development.pdf",
        description: "iOS and Android application development"
    }
];
