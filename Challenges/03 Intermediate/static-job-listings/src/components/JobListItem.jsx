export default function JobListItem({ jobOffer }) {
  const { company, logo, new: newOffer, featured, position, role, level, postedAt, contract, location, languages, tools } = jobOffer;

  const borderStyles = 'before:absolute before:w-1.5 before:bg-main before:h-full before:top-0 before:left-0 before:rounded-l-md';

  return (
    <li className={`relative pt-10 p-6 bg-white rounded-md shadow-xl lg:flex lg:gap-6 lg:pl-10 lg:p-6  ${featured && borderStyles}`}>
      <img src={logo} alt="" className="absolute lg:relative lg:-top-0 lg:size-max -top-7 size-14" />
      <div className="lg:w-max">
        <div className="flex items-baseline gap-7">
          <p className="text-main font-bold">{company}</p>
          <div className="flex gap-2 text-sm font-bold">
            {newOffer && <Flag className="bg-main">new!</Flag>}
            {featured && <Flag className="bg-black">featured</Flag>}
          </div>
        </div>
        <p className="inline-block py-2 font-bold lg:text-lg hover:cursor-pointer hover:text-main">{position}</p>
        <p className="font-medium text-main-gray">
          {postedAt} &nbsp;&bull;&nbsp; {contract} &nbsp;&bull;&nbsp; {location}
        </p>
      </div>
      <div className="bg-main-gray h-px mt-3 mb-4 opacity-60 lg:hidden"></div>
      <ul className="flex items-center  gap-5 flex-wrap lg:ml-auto">
        {[role, level, ...languages, ...tools].map((techTag, i) => (
          <Tag key={i}>{techTag}</Tag>
        ))}
      </ul>
    </li>
  );
}

function Flag({ className, children }) {
  return <p className={`flex items-center px-3 py-0.5 uppercase text-main-light rounded-full leading-normal ${className}`}>{children}</p>;
}

function Tag({ children }) {
  return (
    <li
      className="relative flex justify-center items-center  font-extrabold px-3 py-1 text-main  rounded-md  overflow-hidden before:content-[''] before:size-full before:absolute
   before:bg-main before:opacity-15 hover:cursor-pointer hover:text-white hover:bg-main">
      {children}
    </li>
  );
}
