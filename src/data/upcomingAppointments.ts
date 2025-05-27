export interface ScheduleAppointment {
  title: string;
  time: string;
  icon: string;
}

export interface DaySchedule {
  day: string;
  appointments: ScheduleAppointment[];
}

export const upcomingSchedule: DaySchedule[] = [
  {
    day: 'Thursday',
    appointments: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: 'clipboard-check' },
      { title: 'Ophthalmologist', time: '14:00 PM', icon: 'eye' }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      { title: 'Cardiologist', time: '12:00 AM', icon: 'heart' },
      { title: 'Neurologist', time: '16:00 PM', icon: 'brain' }
    ]
  }
];