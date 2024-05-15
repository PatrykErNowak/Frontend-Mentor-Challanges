export default function JobListItem() {
  return (
    <li className="relative pt-10 p-6 bg-white rounded-md shadow-xl lg:flex lg:gap-6 lg:pl-10 lg:p-6">
      <img src="./images/photosnap.svg" alt="" className="absolute lg:relative lg:-top-0 lg:size-max -top-7 size-14" />
      <div className="lg:w-max">
        <div className="flex items-baseline gap-7">
          <p className="text-main font-bold">Photosnap</p>
          <div className="flex gap-2 text-sm font-bold">
            <Flag className="bg-main">new!</Flag>
            <Flag className="bg-black">featured</Flag>
          </div>
        </div>
        <p className="pt-3 pb-2 font-bold lg:text-lg">Senior Frontend Developer</p>
        <p className="font-medium text-main-gray">
          {`1d ago`} &bull; {`Full Time`} &bull; {`USA Only`}
        </p>
      </div>
      <div className="bg-main-gray h-px mt-3 mb-4 opacity-60 lg:hidden"></div>
      <ul className="flex items-center  gap-5 flex-wrap lg:ml-auto">
        <Tag>Frontend</Tag>
        <Tag>Senior</Tag>
        <Tag>HTML</Tag>
        <Tag>CSS</Tag>
        <Tag>JavaScript</Tag>
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
   before:bg-main before:opacity-15">
      {children}
    </li>
  );
}
