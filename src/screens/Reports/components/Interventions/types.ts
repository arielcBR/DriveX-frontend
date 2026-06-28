import { ManutencaoResponse } from "@/services/reportsServices";

export type InterventionVariant = "danger" | "warning" | "info";

export interface InterventionData {
    id?: string;
    title: string;
    subtitle: string;
    rightText: string;
    variant: InterventionVariant;
    isPill?: boolean;
}

export interface InterventionsListProps {
    data?: ManutencaoResponse[] | null;
}
