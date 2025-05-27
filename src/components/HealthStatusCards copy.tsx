import React from 'react';
import { healthStatus } from '../data/healthStatus';

const HealthStatusCard: React.FC<{ 
  organ: string; 
  date: string; 
  progress: number; 
  color: string; 
}> = ({ 
  organ, 
  date, 
  progress, 
  color 
}) => {
  // Get appropriate background and text colors based on health status
  const getColors = () => {
    switch(color) {
      case 'red':
        return {
          bg: 'bg-red-500',
          text: 'text-red-600',
          light: 'bg-red-100'
        };
      case 'teal':
        return {
          bg: 'bg-teal-500',
          text: 'text-teal-600',
          light: 'bg-teal-100'
        };
      case 'orange':
        return {
          bg: 'bg-orange-500',
          text: 'text-orange-600',
          light: 'bg-orange-100'
        };
      default:
        return {
          bg: 'bg-blue-500',
          text: 'text-blue-600',
          light: 'bg-blue-100'
        };
    }
  };

  const colors = getColors();

  return (
    <div className="flex items-start gap-4 mb-6">
      {/* Organ icon - using colored background divs as placeholders */}
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.light}`}>
        {organ === 'Lungs' && (
          <div className="w-7 h-7 bg-contain bg-center bg-no-repeat\" style={{ backgroundImage: "url('https://api.iconify.design/mdi:lungs.svg?color=red')" }}></div>
        )}
        {organ === 'Teeth' && (
          <div className="w-7 h-7 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://api.iconify.design/mdi:tooth.svg?color=teal')" }}></div>
        )}
        {organ === 'Bone' && (
          <div className="w-7 h-7 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://api.iconify.design/mdi:bone.svg?color=orange')" }}></div>
        )}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">{organ}</h3>
          <span className="text-xs text-gray-500">{date}</span>
        </div>

        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${colors.bg}`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const HealthStatusCards: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      {healthStatus.map((item) => (
        <HealthStatusCard 
          key={item.organ}
          organ={item.organ}
          date={item.date}
          progress={item.progress}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default HealthStatusCards;