export type VehicleType = "cars" | "motorcycles";

export type FipeItem = {
    code: string;
    name: string;
};

export class FipeApi {
    private static readonly BASE_URL = 'https://fipe.parallelum.com.br/api/v2';

    static async getBrands(vehicleType: VehicleType): Promise<FipeItem[]> {
        const response = await fetch(`${this.BASE_URL}/${vehicleType}/brands`);
        if (!response.ok) throw new Error("Failed to fetch brands");
        return response.json();
    }

    static async getModels(vehicleType: VehicleType, brandCode: string): Promise<FipeItem[]> {
        const response = await fetch(`${this.BASE_URL}/${vehicleType}/brands/${brandCode}/models`);
        if (!response.ok) throw new Error("Failed to fetch models");
        return response.json();
    }

    static async getYears(vehicleType: VehicleType, brandCode: string, modelCode: string): Promise<FipeItem[]> {
        const response = await fetch(`${this.BASE_URL}/${vehicleType}/brands/${brandCode}/models/${modelCode}/years`);
        if (!response.ok) throw new Error("Failed to fetch years");
        return response.json();
    }
}
