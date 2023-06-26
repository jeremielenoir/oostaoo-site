import type { JobType } from '../types/types';

const jobs: JobType[] = [
  {
    id: 1,
    title: 'Développeur FullStack',
    status: 'disponible',
    place: 'Paris',
    sector: 'Finance',
    publishDate: Date.now(),
    startDate: Date.now(),
    weeklyWorkTime: '39h',
    details:
      'En tant que développeur FullStack, votre rôle ira au-delà du développement de logiciels. Vous piloterez des projets clients de bout en bout, avec une maîtrise du frontend et du backend, permettant de fournir des solutions complètes et personnalisées qui répondent aux défis spécifiques de nos clients.',
    image: 'jobFullstack.jpg',
    linkedin: 'https://www.linkedin.com/company/oostaoo-consulting/',
    visibility: true,
  },
  {
    id: 2,
    title: 'Développeur Front',
    status: 'disponible',
    place: 'Paris',
    sector: 'Immobilier',
    publishDate: Date.now(),
    startDate: Date.now(),
    weeklyWorkTime: '35h',
    details:
      'Développeur Frontend, transformez les concepts en réalités interactives. Grâce à votre maîtrise en HTML, CSS et JavaScript, vous serez amené à créer des interfaces utilisateur attrayantes et efficaces qui répondent aux besoins de nos clients et améliorent leur expérience digitale.',
    image: 'jobFront.jpg',
    linkedin: 'https://www.linkedin.com/company/oostaoo-consulting/',
    visibility: true,
  },
  {
    id: 3,
    title: 'Développeur Back',
    status: 'disponible',
    place: 'Paris',
    sector: 'Santé',
    publishDate: Date.now(),
    startDate: Date.now(),
    weeklyWorkTime: '39h',
    details:
      "Comme développeur Backend, votre expertise en Node.js, Python, Ruby et bases de données SQL/NoSQL sera cruciale. Vous serez en charge de l'optimisation et de la sécurisation des systèmes de nos clients, garantissant ainsi la performance et la fiabilité de leurs applications.",
    image: 'jobBack.jpg',
    linkedin: 'https://www.linkedin.com/company/oostaoo-consulting/',
    visibility: true,
  },
  {
    id: 4,
    title: 'Développeur Java',
    status: 'disponible',
    place: 'Paris',
    sector: 'Energie',
    publishDate: Date.now(),
    startDate: Date.now(),
    weeklyWorkTime: '39h',
    details:
      'Développeur Java, mettez à profit votre connaissance de Java et des frameworks associés, comme Spring ou Hibernate. Vous serez en charge de concevoir des solutions logicielles robustes, performantes et sur mesure pour nos clients, les aidant à résoudre leurs problèmes les plus complexes.',
    image: 'jobJava.jpg',
    linkedin: 'https://www.linkedin.com/company/oostaoo-consulting/',
    visibility: true,
  },
];

export default jobs;
