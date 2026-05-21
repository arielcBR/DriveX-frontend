export interface RegisterVehiclePayload {
    marca: string;
    modelo: string;
    placa: string;
    tipo: string;
    ano: number;
    cor: string;
    kmAtual: number;
    idUsuario: number;
  }
  
  export interface VehicleResponse {
    idVeiculo: number;
    modelo: string;
    dataUltimaAtualizacaoKm: string;
    marca: string;
    placa: string;
    tipo: string;
    ano: number;
    cor: string;
    kmAtual: number;
  }