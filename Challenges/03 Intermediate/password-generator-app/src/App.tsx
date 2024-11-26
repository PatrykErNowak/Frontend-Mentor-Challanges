import { FormEvent, useState } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Heading from './components/Heading';
import Password from './components/Password';
import PasswordLength from './components/PasswordLength';
import Options from './components/Options';
import PasswrodStrength from './components/PasswrodStrength';
import { GeneratePassword } from 'js-generate-password';
import validPassword from 'password-strength';

function App() {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrenth] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [length, setLength] = useState(0);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  });

  const maxLength = 18;

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

    if (password) {
      setPassword(password);
      const { valid, strength } = validPassword(password);

      if (!valid) setPasswordStrenth(1);
      if (valid) {
        if (strength === 'simple') setPasswordStrenth(2);
        if (strength === 'medium') setPasswordStrenth(3);
        if (strength === 'strong') setPasswordStrenth(4);
      }
    }
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
          <PasswrodStrength strengthLevel={passwordStrength} />
          <Button />
        </form>
      </Container>
    </div>
  );
}

export default App;
