export interface JobOffer {
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
}

export type PropsLogosWrapper = {
    logos: string[];
    section: "technos" | "references";
};

export type SectionReferencesTechnosProps = {
    section: "technos" | "references";
}

export type ListButtonNavProps = {
    handleClick: (section: string) => void;
    displayFull: string;
    section: "accueil" | "services" | "technos" | "references" | "offres" | "contact";
}

export type ListButtonNavArray = [
    "accueil",
    "services",
    "technos",
    "references",
    "offres",
    "contact"
  ];