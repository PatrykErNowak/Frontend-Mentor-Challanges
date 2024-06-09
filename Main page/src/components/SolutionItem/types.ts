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
  info: string;
  type: string;
  level: Level;
  technologies: Array<Technology>;
  img: Img;
  links: Links;
}

export type Level = 'newbie' | 'junior' | 'intermediate' | 'advanced';

export enum DifficultyLevel {
  newbie = 1,
  junior,
  intermediate,
  advanced,
}
