type ListProps = {
  children: Array<React.ReactElement>;
};

export default function WrapperContainer({ children }: ListProps) {
  return <div className="wrapper">{children}</div>;
}
