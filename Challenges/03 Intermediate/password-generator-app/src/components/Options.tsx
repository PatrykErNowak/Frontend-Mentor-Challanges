import { useState } from 'react';

type Options = {
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  symbol: boolean;
};

type OptionsProps = {
  options: Options;
  onOptionChange: (option: keyof Options) => void;
};

function Options({ options, onOptionChange }: OptionsProps) {
  return (
    <fieldset className="flex flex-col gap-4 py-3 md:py-0">
      <Option
        onChange={onOptionChange}
        initState={options.uppercase}
        id="uppercase"
        label="Include Uppercase Letters"
      />
      <Option
        onChange={onOptionChange}
        initState={options.lowercase}
        id="lowercase"
        label="Include Lowercase Letters"
      />
      <Option
        onChange={onOptionChange}
        initState={options.number}
        id="number"
        label="Include Numbers"
      />
      <Option
        onChange={onOptionChange}
        initState={options.symbol}
        id="symbol"
        label="Include Symbols"
      />
    </fieldset>
  );
}

export default Options;

type OptionProps = {
  id: keyof Options;
  label: string;
  initState: boolean;
  onChange: (id: keyof Options) => void;
};

function Option({ id, label, initState, onChange }: OptionProps) {
  const [checked, setChecked] = useState(initState);

  function onChangeOption() {
    setChecked((prev) => !prev);
    onChange(id);
  }

  return (
    <div className="flex items-center gap-5 ">
      <span
        className={`relative w-5 h-5  border-2 hover:border-main ${
          checked ? 'bg-main border-main' : 'bg-veryDark'
        }`}>
        <IconCheck className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
        <input
          className="w-5 h-5 opacity-0 cursor-pointer"
          type="checkbox"
          checked={checked}
          name={id}
          id={id}
          onChange={onChangeOption}
        />
      </span>

      <label htmlFor={id} className="leading-none">
        {label}
      </label>
    </div>
  );
}

function IconCheck({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="12"
      xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="#18171F"
        stroke-width="3"
        fill="none"
        d="M1 5.607 4.393 9l8-8"
      />
    </svg>
  );
}
