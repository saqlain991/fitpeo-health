export interface DayActivity {
  day: string;
  appointments: number[];
}

export const weeklyActivity: DayActivity[] = [
  {
    day: 'Mon',
    appointments: [2, 0, 1]
  },
  {
    day: 'Tues',
    appointments: [1, 3, 0]
  },
  {
    day: 'Wed',
    appointments: [0, 1, 2]
  },
  {
    day: 'Thurs',
    appointments: [2, 0, 1]
  },
  {
    day: 'Fri',
    appointments: [1, 2, 0]
  },
  {
    day: 'Sat',
    appointments: [3, 1, 0]
  },
  {
    day: 'Sun',
    appointments: [0, 1, 2]
  }
];