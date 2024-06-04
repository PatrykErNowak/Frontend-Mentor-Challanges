type HeaderProps = {
  darkTheme: boolean;
  onClick: () => void;
};

function Header({ darkTheme, onClick }: HeaderProps) {
  return (
    <header className="flex justify-between items-baseline pt-12 relative z-10">
      <h1 className="text-white text-3xl uppercase tracking-[0.4em] font-bold sm:text-4xl">Todo</h1>
      <button onClick={onClick} aria-label={`Change to ${darkTheme ? 'light' : 'dark'} theme`}>
        {darkTheme ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}

export default Header;

function Moon() {
  return (
    <svg role="img" xlinkTitle="moon" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
      />
    </svg>
  );
}
export function Sun() {
  return (
    <svg role="img" xlinkTitle="sun" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path
        fill="#FFF"
        fillRule="evenodd"
        d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
      />
    </svg>
  );
}
