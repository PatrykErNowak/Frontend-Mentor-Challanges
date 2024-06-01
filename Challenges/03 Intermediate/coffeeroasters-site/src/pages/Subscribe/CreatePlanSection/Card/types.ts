import { PlanCategory } from '../types';

type CardProps = {
  groupName: PlanCategory;
  title: string;
  children: string | string[];
  onChangePlan: (plan: PlanCategory, value: string, questionLevel: number) => void;
  questionLevel: number;
};

export type { CardProps };
