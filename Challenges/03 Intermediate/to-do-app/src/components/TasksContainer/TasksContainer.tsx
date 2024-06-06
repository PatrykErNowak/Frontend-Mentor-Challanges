import Task from '../Task/Task';
import { useAppSelector } from '../../store';

function TasksContainer() {
  const tasks = useAppSelector((store) => store.tasks);

  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} complete={task.complete} title={task.title} />
        ))}
      </ul>
    </div>
  );
}

export default TasksContainer;
