export interface TimeSlot {
  time: string;
  appointments?: string[];
}

export interface CalendarDay {
  day: number;
  timeSlots: TimeSlot[];
}

export const calendarDays: CalendarDay[] = [
  {
    day: 25,
    timeSlots: [
      { time: '10:00', appointments: [] },
      { time: '11:00', appointments: [] },
      { time: '12:00', appointments: [] },
    ]
  },
  {
    day: 26,
    timeSlots: [
      { time: '08:00', appointments: [] },
      { time: '09:00', appointments: ['Dentist'] },
      { time: '10:00', appointments: [] },
      { time: '12:00', appointments: [] },
    ]
  },
  {
    day: 27,
    timeSlots: [
      { time: '12:00', appointments: [] },
      { time: '13:00', appointments: [] },
    ]
  },
  {
    day: 28,
    timeSlots: [
      { time: '10:00', appointments: [] },
      { time: '11:00', appointments: ['Physiotherapy'] },
    ]
  },
  {
    day: 29,
    timeSlots: [
      { time: '14:00', appointments: [] },
      { time: '15:00', appointments: [] },
      { time: '16:00', appointments: [] },
    ]
  },
  {
    day: 30,
    timeSlots: [
      { time: '12:00', appointments: [] },
      { time: '14:00', appointments: [] },
    ]
  },
  {
    day: 31,
    timeSlots: [
      { time: '09:00', appointments: [] },
      { time: '10:00', appointments: [] },
      { time: '11:00', appointments: [] },
    ]
  }
];

export interface Appointment {
  title: string;
  time: string;
  doctor: string;
  icon?: string;
}

export const appointments: Record<number, Appointment[]> = {
  26: [
    {
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: 'tooth'
    }
  ],
  28: [
    {
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: 'tooth'
    }
  ],
  27: [
    {
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: 'activity'
    }
  ]
};