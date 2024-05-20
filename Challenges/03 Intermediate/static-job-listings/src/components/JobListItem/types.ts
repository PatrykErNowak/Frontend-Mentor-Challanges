import { JobOffer, AddFilter } from '../App/types';

export type JobListItemProps = {
  onAddFilter: AddFilter;
  jobOffer: JobOffer;
};

export type FlagProps = {
  className: string;
  children: string;
};
export type TagProps = {
  onAddFilter: AddFilter;
  children: string;
};
