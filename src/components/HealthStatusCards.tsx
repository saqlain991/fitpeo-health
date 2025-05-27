import React from 'react';
import { ArrowRight } from 'lucide-react';

const HealthStatusCard: React.FC<{
  organ: string;
  date: string;
  progress: number;
  color: string;
}> = ({ organ, date, progress, color }) => {
  const getColors = () => {
    switch (color) {
      case 'red':
        return {
          bg: 'bg-red-500',
          light: 'bg-red-100',
        };
      case 'teal':
        return {
          bg: 'bg-teal-500',
          light: 'bg-teal-100',
        };
      case 'orange':
        return {
          bg: 'bg-orange-500',
          light: 'bg-orange-100',
        };
      default:
        return {
          bg: 'bg-blue-500',
          light: 'bg-blue-100',
        };
    }
  };

  const colors = getColors();

  const getIcon = () => {
    switch (organ) {
      case 'Lungs':
        return "url('https://api.iconify.design/mdi:lungs.svg?color=red')";
      case 'Teeth':
        return "url('https://api.iconify.design/mdi:tooth.svg?color=teal')";
      case 'Bone':
        return "url('https://api.iconify.design/mdi:bone.svg?color=orange')";
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#F6FAFF] rounded-xl p-4 shadow-sm mb-4">
      {/* Icon + Organ name */}
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.light}`}>
          <div
            className="w-6 h-6 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: getIcon() }}
          ></div>
        </div>
        <h3 className="text-sm font-semibold text-gray-800">{organ}</h3>
      </div>

      {/* Date */}
      <p className="text-xs text-gray-500 mb-2">{date}</p>

      {/* Progress bar */}
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${colors.bg}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const HealthStatusCards: React.FC = () => {
  return (
    <div className="p-6  ">
      {/* Individual Cards */}
      <HealthStatusCard organ="Lungs" date="26 Oct 2021" progress={30} color="red" />
      <HealthStatusCard organ="Teeth" date="26 Oct 2021" progress={90} color="teal" />
      <HealthStatusCard organ="Bone" date="26 Oct 2021" progress={60} color="orange" />

      {/* Details link */}
      <div className="mt-4 flex text-end gap-1 text-sm text-blue-600 font-medium cursor-pointer hover:underline">
        <span>Details</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

export default HealthStatusCards;
