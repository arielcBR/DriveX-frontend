export interface SummaryData {
    preventivesCount?: number;
    correctivesCount?: number;
    totalPreventivesCost?: string | number;
}

export interface SummaryBoxesProps {
    data?: SummaryData;
}
