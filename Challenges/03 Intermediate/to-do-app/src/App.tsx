import { useState } from 'react';
import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';
import Main from './components/Main/Main';
import AddTaskInput from './components/AddTaskInput/AddTaskInput';
import TasksContainer from './components/TasksContainer/TasksContainer';

function App() {
  const [darkTheme, setDarkTheme] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  const isDarkTheme = darkTheme ? 'dark' : '';
  const heroStyles =
    'before:absolute before:top-0 before:left-0 before:h-[200px] before:w-full before:bg-mobile  before:bg-no-repeat before:bg-cover sm:before:bg-desktop sm:before:h-[300px]';

  return (
    <div className={`min-h-screen relative bg-app  ${heroStyles} ${isDarkTheme}`}>
      <Wrapper>
        <Header darkTheme={darkTheme} onClick={() => setDarkTheme((prev) => !prev)} />
        <Main>
          <AddTaskInput />
          <TasksContainer />
        </Main>
      </Wrapper>
    </div>
  );
}

export default App;
