export interface VehicleData {
    plate?: string;
    year?: string | number;
    brand?: string;
    manufactureYear?: string | number;
    currentKm?: string | number;
    model?: string;
    nextRevisionKm?: string | number;
}

export interface VehicleCardProps {
    data?: VehicleData;
}
