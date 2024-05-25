type State = 'active' | 'success' | 'failure' | '';

type IconTitleProps = { children: React.ReactNode; iconSrc?: string; text?: string; iconBgc?: string; state?: State };

export type { IconTitleProps, State };
