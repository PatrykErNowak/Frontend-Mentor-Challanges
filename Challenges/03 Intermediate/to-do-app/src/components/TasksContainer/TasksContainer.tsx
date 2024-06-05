import { useSelector } from 'react-redux';
import Task from '../Task/Task';

function TasksContainer() {
  const tasks = useSelector((store) => store.tasks);

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
