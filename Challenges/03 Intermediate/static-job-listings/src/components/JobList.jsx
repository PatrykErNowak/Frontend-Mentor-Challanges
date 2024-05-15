import JobListItem from './JobListItem';

export default function JobList() {
  return (
    <ul className="flex flex-col gap-8">
      <JobListItem></JobListItem>
    </ul>
  );
}
