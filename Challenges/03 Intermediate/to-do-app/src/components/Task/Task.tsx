import { SyntheticEvent, useState } from 'react';
import ButtonCircle from '../ButtonCircle/ButtonCircle';

import { ID } from '../../App/App.types';
import { useAppDispatch } from '../../App/store';
import { completed, remove } from '../../features/todos/tasksSlice';

type TaskProps = {
  id: ID;
  title: string;
  isComplete: boolean;
};

function Task({ id, title, isComplete = false }: TaskProps) {
  const [complete, setComplete] = useState(isComplete);
  const dispatch = useAppDispatch();

  function handleComplete() {
    setComplete((prev) => !prev);
    dispatch(completed(id));
  }

  function handleDelete(e: SyntheticEvent) {
    e.stopPropagation();
    dispatch(remove(id));
  }

  return (
    <li
      className="flex items-center gap-3 py-4 px-5 bg-task border-b border-defaultColor sm:py-5 sm:px-6 sm:text-lg group"
      aria-label={`${complete ? 'Completed' : 'Active'} task`}>
      <ButtonCircle ariaLabel={`Mark as a ${complete ? 'active' : 'completed'} task`} activeState={complete} onClick={handleComplete} />
      <p
        className={`${complete ? 'text-completeTask line-through' : 'text-activeTask'} text-xs  cursor-pointer first-letter:uppercase sm:text-base`}
        onClick={handleComplete}>
        {title}
      </p>
      <button
        className="ml-auto sm:opacity-0 sm:pointer-events-none sm:group-hover:opacity-100 sm:group-hover:pointer-events-auto sm:hover:scale-110 transition-transform"
        onClick={handleDelete}
        aria-label="Delete task">
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
}

export default Task;
