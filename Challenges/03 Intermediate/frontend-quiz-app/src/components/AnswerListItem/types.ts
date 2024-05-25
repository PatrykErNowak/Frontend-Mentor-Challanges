type BtnState = 'idle' | 'active' | 'correctOption' | 'correctAnswer' | 'wrongAnswer';

type CategoryListItemProps = {
  iconSrc?: string;
  iconBgc?: string;
  iconText?: string;
  children: string;
  onAnswer: (p: string) => void;
  btnState?: BtnState;
  disabled?: boolean;
};

export type { BtnState, CategoryListItemProps };
