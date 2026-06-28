export interface MaintenanceModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  vehicleId: number;
}