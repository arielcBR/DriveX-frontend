import React from "react";
import { View } from "react-native";
import { AlertItem } from "../AlertItem";
import { styles } from "./styles";
import { ProcessedAlert } from "../../types";

export function AlertSlide ({ alerts }: { alerts: ProcessedAlert[] }) {
    return (
        <View style={styles.slideContainer}>
            {alerts.map((alert) => (
            <AlertItem key={alert.costId.toString()} item={alert} />
            ))}
        </View>
    );
};