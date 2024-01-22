import type { JobType } from '../types/types';

const jobs: JobType[] = [
  {
    id: 1,
    title: 'Lead Développeur Nextjs',
    status: 'disponible',
    place: 'Paris',
    sector: 'Finance',
    publishDate: Date.now(),
    startDate: Date.now(),
    weeklyWorkTime: '39h',
    details:
      "Oostaoo Consulting recherche un Lead Développeur Next.js passionné pour rejoindre notre équipe en pleine croissance. Vous serez en charge de diriger des projets innovants, en utilisant Next.js pour créer des applications web performantes et évolutives. Avec votre expertise technique et votre capacité à guider une équipe de développeurs talentueux, vous jouerez un rôle clé dans la livraison de solutions de haute qualité à nos clients. Si vous avez une solide expérience en JavaScript et Next.js, ainsi qu'un talent pour le leadership technique, nous vous invitons à postuler pour façonner l'avenir du développement web avec nous.",
    image: 'https://www.w3bai.com/w3css/img_fjords.jpg',
    linkedin: 'https://fr.linkedin.com/',
    visibility: true,
  },
  {
    id: 2,
    title: 'Développeur Front React',
    status: 'disponible',
    place: 'Paris',
    sector: 'Immobilier',
    publishDate: Date.now(),
    startDate: Date.now(),
    weeklyWorkTime: '35h',
    details:
      "Oostaoo Consulting cherche à enrichir son équipe avec un Développeur Front-End React passionné et créatif. Dans ce rôle, vous serez chargé de concevoir et de développer des interfaces utilisateur interactives et modernes, en utilisant React.js. Vous travaillerez en étroite collaboration avec notre équipe de développement pour créer des expériences web fluides et réactives. Nous recherchons quelqu'un avec une solide compréhension de React et un œil pour le design UX/UI, prêt à relever des défis techniques et à apporter des solutions innovantes. Rejoignez-nous pour transformer les concepts en réalités visuelles captivantes et contribuer à des projets à la pointe de la technologie.",
    image: 'https://www.w3bai.com/w3css/img_fjords.jpg',
    linkedin: 'https://fr.linkedin.com/',
    visibility: true,
  },
  {
    id: 3,
    title: 'Développeur Front Vuejs',
    status: 'disponible',
    place: 'Paris',
    sector: 'Immobilier',
    publishDate: Date.now(),
    startDate: Date.now(),
    weeklyWorkTime: '39h',
    details:
      "Rejoignez l'équipe avant-gardiste d'Oostaoo Consulting en tant que Développeur Front-End Vue.js. Nous sommes à la recherche d'un professionnel talentueux et dynamique pour développer des interfaces utilisateur hautement interactives et efficaces avec Vue.js. Vous jouerez un rôle essentiel dans la conception et l'implémentation de solutions front-end innovantes, en collaboration étroite avec notre équipe de développement pour créer des applications web esthétiques et performantes. Les candidats doivent posséder une expérience solide en Vue.js et une passion pour le développement d'UI/UX de qualité. Si vous êtes motivé par les défis techniques et désireux d'apporter une contribution significative dans un environnement collaboratif, nous aimerions vous avoir dans notre équipe.",
    image: 'https://www.w3bai.com/w3css/img_fjords.jpg',
    linkedin: 'https://fr.linkedin.com/',
    visibility: true,
  },
];

export default jobs;
