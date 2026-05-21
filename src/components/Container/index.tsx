import { ScrollView } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { ContainerProps } from "./types";

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