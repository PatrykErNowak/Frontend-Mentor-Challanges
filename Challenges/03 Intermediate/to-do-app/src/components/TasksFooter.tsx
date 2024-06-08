import { useAppDispatch, useAppSelector } from '../App/store';
import { removeAllCompleted } from '../features/todos/tasksSlice';

function TasksFooter() {
  const activeTasksNumber = useAppSelector((store) => store.tasks.todos.reduce((a, task) => (a += Number(!task.isComplete)), 0));
  const dispatch = useAppDispatch();

  function handleClearCompleted() {
    dispatch(removeAllCompleted());
  }

  return (
    <div className="flex justify-between relative bg-task py-4 px-5 text-filters text-sm sm:text-sm ">
      <p>
        {activeTasksNumber} {activeTasksNumber === 1 ? 'item' : 'items'} left
      </p>

      <button className="hover:text-activeTask" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </div>
  );
}

export default TasksFooter;
