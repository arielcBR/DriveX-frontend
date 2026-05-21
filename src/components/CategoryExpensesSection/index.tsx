import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { CategoryExpenseItem } from "./components/CategoryExpenseItem";
import { styles } from "./styles";
import { Props } from "./types";


export function CategoryExpensesSection({ data }: Props) {
  const router = useRouter();

  function handlePressViewAll() {
    router.push("/expenses");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gastos por categoria</Text>
        <TouchableOpacity onPress={handlePressViewAll}>
          <Text style={styles.viewAll}>ver tudo</Text>
        </TouchableOpacity>
      </View>

      {data.map(item => (
        <CategoryExpenseItem 
          key={item.id}
          label={item.label}
          amount={item.amount}
          currentValue={item.amount}
          maxValue={item.maxValue}
          iconName={item.iconName}
          iconBgColor={item.iconBgColor}
          variant={item.variant}
        />
      ))}
    </View>
  );
}
