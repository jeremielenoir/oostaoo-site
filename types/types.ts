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
  id: number;
  title: string;
  status: string;
  place: string;
  sector: string;
  publishDate: number;
  startDate: number;
  weeklyWorkTime: string;
  details: string;
  image: string;
  linkedin: string;
  visibility: boolean;
};

export type ServiceType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
