import { FormEvent, useState } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Heading from './components/Heading';
import Password from './components/Password';
import PasswordLength from './components/PasswordLength';
import Options from './components/Options';
import PasswrodStrength from './components/PasswrodStrength';
import { GeneratePassword } from 'js-generate-password';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  });

  const maxLength = 20;

  function onOptionChange(option: keyof Options) {
    setOptions((prevState) => ({ ...prevState, [option]: !prevState[option] }));
  }

  function handleGeneratePassword(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const numOfOptions = Object.values(options).reduce(
      (acc, cur) => (cur === true ? acc + 1 : acc),
      0
    );

    if (!length || !numOfOptions || numOfOptions > length) return;

    const password = GeneratePassword({
      length: length,
      symbols: options.symbol,
      numbers: options.number,
      lowercase: options.lowercase,
      uppercase: options.uppercase,
    });

    if (password) setPassword(password);
  }

  return (
    <div className="container mx-auto flex flex-col justify-center h-screen gap-4 text-white px-4 max-w-[540px] md:text-lg md:gap-6">
      <Heading />
      <Password password={password} key={password} />
      <Container>
        <form
          className="flex flex-col gap-4 md:gap-8 md:pb-2"
          onSubmit={handleGeneratePassword}>
          <PasswordLength
            length={length}
            maxLength={maxLength}
            onChange={setLength}
          />
          <Options options={options} onOptionChange={onOptionChange} />
          <PasswrodStrength strengthLevel={0} />
          <Button />
        </form>
      </Container>
    </div>
  );
}

export default App;
