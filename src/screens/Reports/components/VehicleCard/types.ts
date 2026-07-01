export interface VehicleResponse {
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
  kmAtual: number;
  proximaManutencaoKm: number;
}

export interface VehicleCardProps {
  data: VehicleResponse | null;
  proximaRevisao: number;
}