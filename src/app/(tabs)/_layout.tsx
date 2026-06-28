import { colors } from "@/constants/theme";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors["green--400"], tabBarStyle: {backgroundColor: colors['blue--600']}, headerShown: false, }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="finance"
        options={{
          title: "Finance",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="attach-money" color={color} />,
        }}
      />
      <Tabs.Screen
        name="maintenance"
        options={{
          title: "Manutenção",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="wrench-cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Relatórios",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="bar-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="edit-profile"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
