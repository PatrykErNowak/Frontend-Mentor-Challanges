import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};

function Container({ className, children }: ContainerProps) {
  return (
    <div className={`bg-dark p-4 md:py-6 md:px-8 ${className}`}>{children}</div>
  );
}

export default Container;
