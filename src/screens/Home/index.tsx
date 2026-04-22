import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors, sizes } from "@/constants/theme";
import { mockHomeData } from "./mocks/homeData";
import { styles } from "./styles";
import {
  AlertProps,
  EarningsProps,
  HoursWorkedProps,
  StatsProps,
  UserProps
} from "./types";

interface HeaderProps {
  initials: UserProps["initials"];
}

function Header({ initials }: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </TouchableOpacity>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="directions-car" size={sizes.icon_medium} color={colors["green--500"]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <View style={styles.notificationDot} />
          <MaterialIcons name="notifications-none" size={sizes.icon_medium} color={colors["green--500"]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="settings" size={sizes.icon_medium} color={colors["blue--300"]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface EarningsCardProps {
  earnings: EarningsProps;
}

function EarningsCard({ earnings }: EarningsCardProps) {
  return (
    <View style={styles.mainCard}>
      <View style={styles.mainCardHeader}>
        <Text style={styles.mainCardTitle}>Ganhos brutos</Text>
        <View style={styles.badgeSemanal}>
          <Text style={styles.badgeSemanalText}>Semanal</Text>
        </View>
      </View>
      <Text style={styles.mainCardValue}>R$ {earnings.gross}</Text>

      <View style={styles.mainCardFooter}>
        <View style={styles.mainCardFooterItem}>
          <Text style={styles.mainCardFooterLabel}>Despesas</Text>
          <Text style={[styles.mainCardFooterValue, { color: colors["red--400"] }]}>R$ {earnings.expenses}</Text>
        </View>
        <View style={styles.mainCardFooterItem}>
          <Text style={styles.mainCardFooterLabel}>Lucro líquido</Text>
          <Text style={[styles.mainCardFooterValue, { color: colors["green--500"] }]}>R$ {earnings.net}</Text>
        </View>
      </View>
    </View>
  );
}

interface StatsContainerProps {
  stats: StatsProps;
}

function StatsContainer({ stats }: StatsContainerProps) {
  return (
    <View style={styles.statsContainer}>
      <View style={styles.smallCard}>
        <MaterialIcons name="attach-money" size={sizes.icon_small} color={colors["green--500"]} style={styles.smallCardIcon} />
        <Text style={styles.smallCardValue}>R$ {stats.valuePerKm}</Text>
        <Text style={styles.smallCardLabel}>Valor/km</Text>
      </View>
      <View style={styles.smallCard}>
        <MaterialIcons name="access-time" size={sizes.icon_small} color={colors["orange--500"]} style={styles.smallCardIcon} />
        <Text style={styles.smallCardValue}>R$ {stats.profitPerHour}</Text>
        <Text style={styles.smallCardLabel}>Lucro/hora</Text>
      </View>
      <View style={styles.smallCard}>
        <MaterialIcons name="directions-car" size={sizes.icon_small} color={colors["purple--400"]} style={styles.smallCardIcon} />
        <Text style={styles.smallCardValue}>{stats.kmDriven}</Text>
        <Text style={styles.smallCardLabel}>Km rodados</Text>
      </View>
    </View>
  );
}

interface ChartCardProps {
  hoursWorked: HoursWorkedProps[];
}

function ChartCard({ hoursWorked }: ChartCardProps) {
  return (
    <View style={styles.chartCard}>
      <View style={styles.chartHeader}>
        <Text style={styles.chartTitle}>Horas trabalhadas</Text>
        <Text style={styles.chartSubtitle}>Esta semana</Text>
      </View>
      <View style={styles.chartContainer}>
        {hoursWorked.map((workDay, index) => (
          <View key={index} style={styles.chartColumn}>
            <View style={styles.chartBarBackground}>
              <View
                style={[
                  styles.chartBar,
                  {
                    height: `${workDay.value * 100}%`,
                    backgroundColor: workDay.active ? colors["green--500"] : colors["blue--300"] + "40"
                  }
                ]}
              />
            </View>
            <Text style={styles.chartDayText}>{workDay.day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

interface AlertsCardProps {
  alerts: AlertProps[];
}

function AlertsCard({ alerts }: AlertsCardProps) {
  return (
    <View style={styles.alertsCard}>
      <Text style={styles.alertsTitle}>Alertas de vencimento</Text>
      {alerts.map((alert) => (
        <View key={alert.id} style={styles.alertItem}>
          <View style={styles.alertLeft}>
            <View style={[styles.alertDot, { backgroundColor: alert.dotColor }]} />
            <Text style={styles.alertItemTitle}>{alert.title}</Text>
          </View>
          <View style={[styles.alertBadge, { backgroundColor: alert.badgeColor + "20" }]}>
            <Text style={[styles.alertBadgeText, { color: alert.badgeColor }]}>{alert.badgeText}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.scrollContent}>
        <Header initials={mockHomeData.user.initials} />
        <Text style={styles.greetingText}>Bem-vindo, {mockHomeData.user.name}!</Text>
        <EarningsCard earnings={mockHomeData.earnings} />
        <StatsContainer stats={mockHomeData.stats} />
        <ChartCard hoursWorked={mockHomeData.hoursWorked} />
        <AlertsCard alerts={mockHomeData.alerts} />
      </View>
    </View>
  );
}
