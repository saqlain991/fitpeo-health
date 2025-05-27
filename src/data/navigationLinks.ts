export interface NavigationLink {
  name: string;
  icon: string;
  section: 'general' | 'tools';
}

export const navigationLinks: NavigationLink[] = [
  { name: 'Dashboard', icon: 'layout-dashboard', section: 'general' },
  { name: 'History', icon: 'history', section: 'general' },
  { name: 'Calendar', icon: 'calendar', section: 'general' },
  { name: 'Appointments', icon: 'calendar-clock', section: 'general' },
  { name: 'Statistics', icon: 'bar-chart', section: 'general' },
  { name: 'Chat', icon: 'message-square', section: 'tools' },
  { name: 'Support', icon: 'phone', section: 'tools' },
  { name: 'Setting', icon: 'settings', section: 'tools' },
];