export async function getMaintenanceData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        vehicle: {
          name: "Hyundai HB20",
          details: "HBX-2J19 - 280.00 KM",
        },
        health: {
          preventive: 8,
          corrective: 8,
          avgKm: "5.000",
        },
        mileage: {
          current: "85.420 km",
          lastUpdate: "4 dias atrás",
        },
        history: [
          {
            id: "1",
            title: "Revisão de freios",
            details: "R$ xxxxx - 30/08/2025",
            km: "xxxxx km",
            type: "danger",
          },
          {
            id: "2",
            title: "Troca correia dentada",
            details: "R$ xxxx - 24/03/2018",
            km: "2.580 km",
            type: "warning",
          },
          {
            id: "3",
            title: "Revisão bateria",
            details: "R$ xxxx",
            km: "2.580 km",
            type: "info",
          },
        ],
      });
    }, 1000);
  });
}