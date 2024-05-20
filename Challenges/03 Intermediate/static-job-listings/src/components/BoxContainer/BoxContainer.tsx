import { ListProps } from './types';

export default function BoxContainer({ children }: ListProps) {
  return <div className="px-5 py-12 max-w-7xl lg:mx-auto">{children}</div>;
}
