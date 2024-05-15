import JobListItem from './JobListItem';

export default function JobList({ jobsOffers }) {
  return (
    <ul className="flex flex-col gap-11">
      {jobsOffers.map((job) => (
        <JobListItem jobOffer={job} key={job.id}></JobListItem>
      ))}
    </ul>
  );
}
