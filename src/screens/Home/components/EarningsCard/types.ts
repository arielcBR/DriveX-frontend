export interface EarningsProps {
    gross?: number | string;
    expenses?: number | string;
    net?: number | string;
}
  
export interface EarningsCardProps {
    earnings: EarningsProps;
}