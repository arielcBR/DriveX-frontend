export interface MileageModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  userId: number;
}
