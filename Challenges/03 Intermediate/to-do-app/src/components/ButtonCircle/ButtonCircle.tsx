import { useState } from 'react';

type ButtonCircleProps = {
  ariaLabel?: string;
  activeState?: boolean;
  onClick: () => void;
};

function ButtonCircle({ ariaLabel = '', activeState = false, onClick }: ButtonCircleProps) {
  const [active, setActive] = useState(activeState);

  const beforeStyles = `relative  before:absolute before:top-1/2 before:left-1/2 before:size-[calc(100%-1px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full ${
    active ? 'before:bg-gradientButton' : 'before:bg-task'
  }`;

  function handleClick() {
    setActive((prev) => !prev);
    onClick();
  }

  return (
    <button
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`flex-shrink-0 flex justify-center items-center size-5 border-none border-transparent rounded-full bg-defaultColor hover:bg-gradientButton sm:size-6
       ${beforeStyles}`}>
      {active && (
        <svg className="scale-90" xmlns="http://www.w3.org/2000/svg" width="10" height="9">
          <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
        </svg>
      )}
    </button>
  );
}

export default ButtonCircle;
