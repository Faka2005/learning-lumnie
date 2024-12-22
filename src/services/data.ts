//Liste de toutes les interfaces utilisé
export interface Course {
  id: number;
  theme: string;
  title: string;
  description: string;
}

export interface Exercise {
  id: number;
  theme: string;
  title: string;
  description: string;
}

export interface Tool {
  id: number;
  title: string;
  description: string;
}
interface Quiz {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
export interface CardProps {
  title: string;
  url: string;
  theme?:string
}
export interface Card {
  title: string;
  links: string;
  active?: boolean;
}

export interface Page {
    label: string;
    path: string;
}

export interface Recitateur {
  id: string;
  name: string;
  sourate: Sourate[];
}

export interface Sourate {
  name: string;
  url: string;
}

// Données des récitateurs
export const Recitateurs: Recitateur[] = [
  {
    id: "1",
    name: "Yasser Al-Dossary",
    sourate: [
      { name: "Al-Fatiha", url: "https://example.com/1" },
      { name: "Al-Baqara", url: "https://example.com/2" },
    ],
  },
  {
    id: "2",
    name: "Mishary Rashid Alafasy",
    sourate: [
      { name: "Al-Fatiha", url: "https://example.com/1" },
      { name: "An-Nas", url: "https://example.com/114" },
    ],
  },
];
export const Pages: Page[] = [
    { label: "Home", path: "" },
    { label: "Amplificateur opérationnel" , path: "/cours/5" },
    { label: "Cours", path: "/cours" },
    { label: "Exercices", path: "/exercices" },
    { label: "Quiz", path: "/quiz" },
    { label: "Diode", path: "/cours/7" },
    { label: "Transistors", path: "/cours/6" },
    { label: "Filtre", path: "/cours/8" },
    { label: "Nombre complexe", path: "/cours/4" },
    { label:"Fiche", path:'/fiche'}

];
export const NavItem: Card[] = [
  { title: 'Home', links: '/', active: true },
  { title: 'Exercice', links: '/exercice', active: true },
  { title: 'Cours', links: '/cours', active: true },
  { title: 'Contact', links: '/contact', active:false },
  {title: 'Outils', links: '/outils', active:true},
  { title: 'Fiche', links: '/fiche', active:true},
  
];
export const courses: Course[] = [
  { id: 1, theme: 'Progrmmation', title: 'React Basics', description: 'Learn the fundamentals of React.' },
  { id: 2, theme: 'Progrmmation', title: 'TypeScript for Beginners', description: 'Understand TypeScript essentials.' },
  { id: 3, theme: 'Progrmmation', title: 'Node.js Essentials', description: 'Master the basics of Node.js.' },
  { id: 4, theme: 'mathématique', title: 'Nombre Complexe', description: 'Apprendre les nombres complexes.' },
  { id: 5, theme: 'Electronnique', title: 'Amplificateur opérationnel', description: 'Les différents montages d\'un amplificateur opérationnel.' },
  { id: 6, theme: 'Electronnique',title:'Transistors',description:"Les différents transistors et caractéristique"},
  { id: 7, theme: 'Electronnique',title:'Diode',description:"Les différents types de diodes"},
  { id: 8, theme: 'Physique',title:'Filtre',description:"Les différents filtre"}
];

export const exercices: Exercise[] = [
  { id: 1, theme: 'mathématique', title: 'Nomre Complexe', description: 'Exercice sur les nombres complexes.' },
];

export const outils: Tool[] = [
  { id: 1, title: 'Fusionneur', description: 'Fusionner plusieurs fichiers PDF' },
  { id: 2, title: 'Compresser', description: 'Compresser un fichier' },
  { id: 3, title: 'Convertisseur de fichier', description: 'Convertir des formats de documents' },
];

export const quizData :Quiz[] = [
  {
    question: "Exercice 1: Résolvez z = 1 + i.",
    options: ["1 + i", "2i", "0", "-1 + i"],
    correctAnswer: "1 + i",
    explanation: "Pour z = 1 + i, la solution est z directement.",
  },
  {
    question: "Exercice 2: Simplifiez z = (1 + i)².",
    options: ["2i", "1 + 2i", "0", "-2"],
    correctAnswer: "2i",
    explanation: "Utilisez l'identité (a+b)² = a² + 2ab + b².",
  },
  {
    question: "Exercice 3: Trouvez le module de z = 3 + 4i.",
    options: ["7", "5", "1", "4"],
    correctAnswer: "5",
    explanation: "Le module d'un nombre complexe est √(Re² + Im²).",
  },
  {
    question: "Exercice 4: Trouvez l'argument de z = -1 + i√3.",
    options: ["π/2", "π/3", "-π/2", "-π/3"],
    correctAnswer: "π/3",
    explanation: "L'argument d'un complexe est calculé avec atan2(Im, Re).",
  },
  {
    question: "Exercice 5: Résolvez z³ = 1 (racines de l'unité).",
    options: ["1, -1, i", "1, ω, ω²", "1, 0, -1", "e^(2iπ)"],
    correctAnswer: "1, ω, ω²",
    explanation: "Les racines de l'unité sont e^(2iπk/3), k=0,1,2.",
  },
];