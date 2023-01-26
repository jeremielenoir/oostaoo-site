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