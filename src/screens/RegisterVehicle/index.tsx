import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { Select } from "@/components/Select";
import { FipeApi, FipeItem, VehicleType } from "@/utils/FipeApi";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function RegisterVehicle() {
    const [vehicleTypeStr, setVehicleTypeStr] = useState<string>("Carro");
    const vehicleType: VehicleType = vehicleTypeStr === "Moto" ? "motorcycles" : "cars";

    const [brands, setBrands] = useState<FipeItem[]>([]);
    const [models, setModels] = useState<FipeItem[]>([]);
    const [versions, setVersions] = useState<FipeItem[]>([]);

    const [brand, setBrand] = useState<FipeItem | null>(null);
    const [model, setModel] = useState<FipeItem | null>(null);
    const [version, setVersion] = useState<FipeItem | null>(null);

    const [loadingBrands, setLoadingBrands] = useState(false);
    const [loadingModels, setLoadingModels] = useState(false);
    const [loadingVersions, setLoadingVersions] = useState(false);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                setLoadingBrands(true);
                const data = await FipeApi.getBrands(vehicleType);
                setBrands(data);

                setBrand(null);
                setModel(null);
                setVersion(null);
                setModels([]);
                setVersions([]);
            } catch (error) {
                console.error("Erro ao buscar marcas", error);
            } finally {
                setLoadingBrands(false);
            }
        };

        fetchBrands();
    }, [vehicleType]);

    const handleTypeSelect = (selectedType: string) => {
        setVehicleTypeStr(selectedType);
    };

    const handleBrandSelect = async (selectedName: string) => {
        const selected = brands.find(b => b.name === selectedName);
        if (!selected) return;

        setBrand(selected);
        setModel(null);
        setVersion(null);
        setModels([]);
        setVersions([]);

        try {
            setLoadingModels(true);
            const data = await FipeApi.getModels(vehicleType, selected.code);
            setModels(data);
        } catch (error) {
            console.error("Erro ao buscar modelos", error);
        } finally {
            setLoadingModels(false);
        }
    };

    const handleModelSelect = async (selectedName: string) => {
        const selected = models.find(m => m.name === selectedName);
        if (!selected || !brand) return;

        setModel(selected);
        setVersion(null);
        setVersions([]);

        try {
            setLoadingVersions(true);
            const data = await FipeApi.getYears(vehicleType, brand.code, selected.code);
            setVersions(data);
        } catch (error) {
            console.error("Erro ao buscar versões", error);
        } finally {
            setLoadingVersions(false);
        }
    };

    const handleVersionSelect = (selectedName: string) => {
        const selected = versions.find(v => v.name === selectedName);
        if (selected) {
            setVersion(selected);
        }
    };

    return (
        <Container>
            <View style={styles.content}>
                <Logo />
                <View style={styles.form}>
                    <Text style={styles.title}>Cadastro do veículo</Text>
                    <Text style={styles.subtitle}>Identificação</Text>
                    <View style={styles.containerWrapper}>
                        <Select
                            labelText="Tipo"
                            placeholder="Carro"
                            iconName="dashboard"
                            value={vehicleTypeStr}
                            options={["Carro", "Moto"]}
                            onSelect={handleTypeSelect}
                        />
                        <Select
                            labelText={loadingBrands ? "Carregando..." : "Marca"}
                            placeholder="Ex: Fiat"
                            iconName="directions-car"
                            value={brand?.name || ""}
                            options={brands.map(b => b.name)}
                            onSelect={handleBrandSelect}
                            disabled={loadingBrands || brands.length === 0}
                        />
                    </View>

                    <View style={styles.containerWrapper}>
                        <Select
                            labelText={loadingModels ? "Carregando..." : "Modelo"}
                            placeholder="Ex: Argo"
                            iconName="local-offer"
                            value={model?.name || ""}
                            options={models.map(m => m.name)}
                            onSelect={handleModelSelect}
                            disabled={!brand || loadingModels || models.length === 0}
                        />
                        <Select
                            labelText={loadingVersions ? "Carregando..." : "Ano"}
                            placeholder="Ex: 2022 Diesel"
                            iconName="calendar-month"
                            value={version?.name || ""}
                            options={versions.map(v => v.name)}
                            onSelect={handleVersionSelect}
                            disabled={!model || loadingVersions || versions.length === 0}
                        />
                    </View>

                    <View style={styles.containerWrapper}>
                        <Input labelText="Cor" placeholder="Prata" iconName="palette" />
                        <Input labelText="Placa" placeholder="ABC1D26" iconName="credit-card" />
                    </View>

                    <Text style={styles.subtitle}>Detalhes</Text>
                    <View style={styles.containerWrapper}>
                        <Input labelText="Km inicial" placeholder="25000" iconName="speed" />
                    </View>
                </View>
                <Button variant="primary" title="Cadastrar" />
            </View>
        </Container>
    );
}