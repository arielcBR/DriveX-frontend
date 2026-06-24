
interface UserProps {
  initials: string;
  name: string;
}

export interface HeaderProps {
  initials: UserProps["initials"];
  onCarPress?: () => void;
}