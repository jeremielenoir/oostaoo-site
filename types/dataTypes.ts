export type IntroType = {
  number: string;
  title: string;
  text: string;
};

export type ServicesType = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type TitleType = {
  title: string;
  description: string;
};

export type AllTitlesType = {
  services: TitleType;
  technos: TitleType;
  references: TitleType;
  emplois: TitleType;
};

export type LogosArrayType = {
  technos: string[];
  references: string[];
};
