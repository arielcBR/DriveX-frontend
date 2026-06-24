export interface NotificationPanelProps {
  visible: boolean;
  onClose: () => void;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}
