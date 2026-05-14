export type HomeUser = {
    initials: string;
    name: string;
  };
  
  export type HomeEarnings = {
    gross: string;
    expenses: string;
    net: string;
  };
  
  export type HomeStats = {
    valuePerKm: string;
    profitPerHour: string;
    kmDriven: string;
  };
  
  export type HomeHoursWorked = {
    day: string;
    value: number;
    active: boolean;
  };
  
  export type HomeAlert = {
    id: string;
    title: string;
    badgeText: string;
    badgeColor: string;
    dotColor: string;
  };
  
  export type HomeData = {
    user: HomeUser;
    earnings: HomeEarnings;
    stats: HomeStats;
    hoursWorked: HomeHoursWorked[];
    alerts: HomeAlert[];
  };