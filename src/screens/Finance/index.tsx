import { Container } from "@/components/Container";
import { styles } from "./styles";
import { View } from "react-native";
import { StatCard } from "./components/StatCard";
import { Button } from "@/components/Button";

export function Finance(){
    return(
        <Container>
            <View style={styles.content}>
                <View style={styles.statCardsWrapper}>
                    <View style={styles.column}>
                        <StatCard type="income" amountOfCash={1000} amountOfTransactions={5}/>
                        <Button 
                            textStyle={styles.buttonText}
                            title="+ Entrada" 
                        />
                    </View>
                    <View style={styles.column}>
                        <StatCard type="outcome" amountOfCash={500} amountOfTransactions={5}/>
                        <Button 
                            textStyle={styles.buttonText}
                            title="- Saída" 
                            variant="danger"
                        />
                    </View>
                </View>
            </View>
        </Container>
    );
}