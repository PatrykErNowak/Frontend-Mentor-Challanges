import Task from '../Task/Task';
import TasksFooter from '../TasksFooter/TasksFooter';
import { filterTasks } from '../../utils/filterTasks';
import { useAppSelector } from '../../App/store';
import Message from '../Message/Message';

function TasksContainer() {
  const { show, todos } = useAppSelector((store) => store.tasks);

  const tasks = filterTasks(todos, show);

  return (
    <div className="rounded-md overflow-hidden shadow-custom">
      {todos.length > 0 && (
        <ul aria-label="Tasks list">
          {tasks.map((task) => (
            <Task key={task.id} id={task.id} isComplete={task.isComplete} title={task.title} />
          ))}
        </ul>
      )}
      {todos.length > 0 && tasks.length === 0 && <Message>No results found ❌</Message>}
      {todos.length === 0 && <Message>It's look like you don't have nothing to do 👌</Message>}
      <TasksFooter />
    </div>
  );
}

export default TasksContainer;
