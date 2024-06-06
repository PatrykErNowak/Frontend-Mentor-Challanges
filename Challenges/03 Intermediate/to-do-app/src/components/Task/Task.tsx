import { SyntheticEvent } from 'react';
import ButtonCircle from '../ButtonCircle/ButtonCircle';
import { remove, completed } from '../../tasksSlice';
import { useAppDispatch } from '../../store';
import { ID } from '../../App.types';

type TaskProps = {
  id: ID;
  title: string;
  isComplete: boolean;
};

function Task({ id, title, isComplete = false }: TaskProps) {
  const dispatch = useAppDispatch();

  function handleComplete() {
    dispatch(completed(id));
  }

  function handleDelete(e: SyntheticEvent) {
    e.stopPropagation();
    dispatch(remove(id));
  }

  return (
    <li
      className="flex items-center gap-3 py-4 px-5 bg-task border-b border-defaultColor sm:py-5 sm:px-6 sm:text-lg group"
      aria-label={`${isComplete ? 'Completed' : 'Active'} task`}>
      <ButtonCircle ariaLabel={`Mark as a ${isComplete ? 'active' : 'completed'} task`} activeState={isComplete} onClick={handleComplete} />
      <p className={`${isComplete ? 'text-completeTask line-through' : 'text-activeTask'} text-xs  cursor-pointer first-letter:uppercase sm:text-base`}>
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
