import { RemoveFilter } from '../App/types';

export type FilterBoxProps = {
  onRemoveFilter: RemoveFilter;
  filters: string[];
};
export type FilterItemProps = {
  onRemoveFilter: RemoveFilter;
  children: string;
};
