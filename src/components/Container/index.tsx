import { ScrollView } from "react-native"; // Importe o ScrollView nativo
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface ContainerProps {
    children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.scrollContent} 
                showsVerticalScrollIndicator={false}      
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
}