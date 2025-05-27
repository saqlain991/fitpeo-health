export interface HealthStatus {
  organ: string;
  status: 'healthy' | 'warning' | 'critical';
  date: string;
  color: string;
  progress: number;
}

export const healthStatus: HealthStatus[] = [
  { 
    organ: 'Lungs', 
    status: 'critical', 
    date: '26 Oct 2021', 
    color: 'red', 
    progress: 30 
  },
  { 
    organ: 'Teeth', 
    status: 'healthy', 
    date: '26 Oct 2021', 
    color: 'green', 
    progress: 90 
  },
  { 
    organ: 'Bone', 
    status: 'warning', 
    date: '26 Oct 2021', 
    color: 'orange', 
    progress: 60 
  },
];

export const healthIndicators = [
  {
    id: 'heart',
    label: 'Healthy Heart',
    emoji: '❤️',
    position: { top: '23%', left: '52%' },
    bgColor: '#3632AC',
    textColor: '#FFFFFF',
    status: 'healthy',
  },
  {
    id: 'knee',
    label: 'Healthy Leg',
    emoji: '🦵',
    position: { top: '66%', left: '-18%' },
    bgColor: '#03E0F0',
    textColor: '#3632AC',
    status: 'healthy',
  },
  // {
  //   id: 'spine',
  //   label: 'Spine Alignment',
  //   position: { top: '40%', left: '45%' },
  //   color: 'cyan',
  //   status: 'healthy'
  // }
];