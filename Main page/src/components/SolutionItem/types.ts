interface Img {
  src: string;
  alt: string;
}
interface Links {
  live: string;
  repo: string;
}

export interface Technology {
  type: string;
  name: string;
  icon: string;
}

export interface Solution {
  id: number;
  title: string;
  type: string;
  level: DifficultyLevel;
  technologies: Array<Technology>;
  img: Img;
  links: Links;
}

export enum DifficultyLevel {
  newbie = 1,
  junior,
  intermediate,
  advanced,
}
