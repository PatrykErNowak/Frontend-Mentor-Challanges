import JobListItem from './JobListItem';

export default function JobList({ onAddFilter, jobsOffers }) {
  return (
    <ul className="flex flex-col gap-11">
      {jobsOffers.map((job) => (
        <JobListItem onAddFilter={onAddFilter} jobOffer={job} key={job.id}></JobListItem>
      ))}
    </ul>
  );
}
