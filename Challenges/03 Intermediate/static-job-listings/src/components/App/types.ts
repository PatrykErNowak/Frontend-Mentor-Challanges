export interface JobOffer {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: 'Junior' | 'Midweight' | 'Senior';
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export type AddFilter = (category: string) => void;
export type RemoveFilter = (category: string) => void;
