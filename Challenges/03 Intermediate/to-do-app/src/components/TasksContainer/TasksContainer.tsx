import Task from '../Task/Task';
import { useAppSelector } from '../../store';
import TasksFooter from '../TasksFooter/TasksFooter';
import { filterTasks } from '../../utils/filterTasks';

function TasksContainer() {
  const { show, todos } = useAppSelector((store) => store.tasks);

  const tasks = filterTasks(todos, show);

  return (
    <div className="rounded-md overflow-hidden shadow-custom">
      <ul aria-label="Tasks list">
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} isComplete={task.isComplete} title={task.title} />
        ))}
      </ul>
      <TasksFooter />
    </div>
  );
}

export default TasksContainer;
