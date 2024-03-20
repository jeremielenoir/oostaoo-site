export type SectionReferencesTechnosProps = {
  section: 'technos' | 'references';
};

export type ListButtonNavArray = [
  'accueil',
  'services',
  'technos',
  'references',
  'offres',
  'contact',
];

export type JobType = {
  _id: string;
  title: string;
  status: string;
  date: Date;
  contenu: string;
  description: string;
  image: string;
};

export type ServiceType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
