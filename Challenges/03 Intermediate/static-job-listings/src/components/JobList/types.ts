import { JobOffer, AddFilter } from '../App/types';

export type ListProps = {
  onAddFilter: AddFilter;
  jobsOffers: JobOffer[];
};
