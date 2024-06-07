import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/store';

import { Show } from '../../App/App.types';
import { setFilter } from '../../features/todos/tasksSlice';

function Filters() {
  const dispatch = useAppDispatch();
  const initFilter = useAppSelector((store) => store.tasks.show);
  const [filterBy, setFilterBy] = useState(initFilter);

  const largeScreenStyles = 'sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:bg-transparent sm:w-max';

  function onFilterChange(e: ChangeEvent<HTMLInputElement>) {
    setFilterBy(e.target.value as Show);
    dispatch(setFilter(e.target.value as Show));
  }

  return (
    <fieldset
      className={`flex justify-center gap-5  py-4 px-5 text-filters text-sm font-bold sm:text-sm w-full bg-task  rounded-md shadow-custom ${largeScreenStyles}`}>
      <legend className="opacity-0 absolute pointer-events-none">Filter:</legend>
      <div>
        <input
          type="radio"
          name="tasks"
          id="all"
          value="all"
          className="appearance-none [&:checked+label]:text-filtersActive"
          checked={filterBy === 'all'}
          onChange={onFilterChange}
        />
        <label htmlFor="all" className="cursor-pointer">
          All
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="tasks"
          id="active"
          value="active"
          className="appearance-none [&:checked+label]:text-filtersActive"
          checked={filterBy === 'active'}
          onChange={onFilterChange}
        />
        <label htmlFor="active" className="cursor-pointer">
          Active
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="tasks"
          id="completed"
          value="completed"
          className="appearance-none [&:checked+label]:text-filtersActive"
          checked={filterBy === 'completed'}
          onChange={onFilterChange}
        />
        <label htmlFor="completed" className="cursor-pointer">
          Completed
        </label>
      </div>
    </fieldset>
  );
}

export default Filters;
