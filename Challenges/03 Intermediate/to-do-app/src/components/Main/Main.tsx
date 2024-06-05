type MainProps = {
  children: React.ReactElement[];
};

function Main({ children }: MainProps) {
  return <main className="flex flex-col gap-4">{children}</main>;
}

export default Main;
