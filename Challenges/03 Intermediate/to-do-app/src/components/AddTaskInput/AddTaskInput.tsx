import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../tasksSlice';

function AddTaskInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (text.length > 3) dispatch(add(text));
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task" className="flex items-center gap-3 w-full py-[0.9rem] px-5 bg-task rounded-md sm:py-5 sm:px-6 sm:text-lg">
        <Circle />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="Create a new todo..."
          className="w-full bg-transparent text-input placeholder:text-inputPlaceholder outline-none"
        />
      </label>
    </form>
  );
}

export default AddTaskInput;

function Circle() {
  return <div className="flex-shrink-0 flex justify-center items-center size-5 border border-defaultColor rounded-full sm:size-6"></div>;
}
