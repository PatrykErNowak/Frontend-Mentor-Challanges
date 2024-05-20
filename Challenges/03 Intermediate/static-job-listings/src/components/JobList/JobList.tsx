import JobListItem from '../JobListItem/JobListItem';
import { ListProps } from './types';

export default function JobList({ onAddFilter, jobsOffers }: ListProps) {
  return (
    <ul className="flex flex-col gap-11">
      {jobsOffers.map((job) => (
        <JobListItem onAddFilter={onAddFilter} jobOffer={job} key={job.id}></JobListItem>
      ))}
    </ul>
  );
}
