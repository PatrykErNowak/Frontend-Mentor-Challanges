export default function FilterBox({ onRemoveFilter, filters }) {
  return (
    <div className="flex justify-between gap-2 -mt-20 mb-12 p-4 lg:p-6 bg-white rounded-md shadow-xl ">
      <ul className="flex gap-4 flex-wrap">
        {filters.map((filter, i) => (
          <FilterItem onRemoveFilter={onRemoveFilter} key={i}>
            {filter}
          </FilterItem>
        ))}
      </ul>
      <button onClick={() => onRemoveFilter('all')} className="text-main-gray font-bold hover:text-main hover:underline underline-offset-2">
        Clear
      </button>
    </div>
  );
}

function FilterItem({ onRemoveFilter, children }) {
  return (
    <li className="flex rounded-md overflow-hidden">
      <p className="relative p-1 px-2 font-bold text-main before:absolute before:size-full before:bg-main before:top-0 before:left-0 before:opacity-15">
        {children}
      </p>
      <button onClick={() => onRemoveFilter(children)} className="px-2 text-white bg-main hover:bg-black">
        <span className="relative top-0.5">&#10006;</span>
      </button>
    </li>
  );
}
