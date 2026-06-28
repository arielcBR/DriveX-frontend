export interface DocumentationModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  userId: number;
}