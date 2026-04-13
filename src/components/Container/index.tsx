import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface ContainerProps {
    children: React.ReactNode;
}

export function Container({ children} : ContainerProps) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}
