import React from 'react';
// import { upcomingSchedule } from '../data/upcomingAppointments';
import * as LucideIcons from 'lucide-react';
// import { XIcon as Icon } from 'lucide-react';

// Dynamic icon component
const DynamicIcon = ({ name }: { name: string }) => {
  const LucideIcon = (LucideIcons as Record<string, Icon>)[name];
  return LucideIcon ? <LucideIcon size={16} /> : null;
};

const AppointmentCard: React.FC<{
  title: string;
  time: string;
  icon: string;
}> = ({ title, time, icon }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
      <div>
        <h3 className="font-medium">{title}</h3>
        <div className="text-xs text-gray-500 mt-1">{time}</div>
      </div>
      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-blue-600">
        <DynamicIcon name={icon} />
      </div>
    </div>
  );
};

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="bg-[#F6FAFF] rounded-xl shadow-sm p-4">
      <h2 className="text-2xl font-bold mb-4">The Upcoming Schedule</h2>
      <h4 className='text-neutral-500'>On Thursday</h4>
      
      <div className="mt-6 flex gap-4">
        {/* Dentist Card - 40% width - Navy Blue */}
        <div className="w-[60%] bg-[#DDE2F9] text-black rounded-[20px] p-4 transition-transform hover:scale-105 cursor-pointer">
          <div className="flex justify-between">
            <h3 className="font-medium">Health Checkup Complete</h3>
            <div className="w-6 h-6 flex items-center justify-center">
              <div
                className="w-6 h-6 bg-contain bg-center bg-no-repeat"
                
              >💉</div>
            </div>
          </div>
          <div className="text-xs mt-2">11:00 AM</div>
        </div>

        {/* Physiotherapy Card - 60% width - Gray */}
        <div className="w-[40%] bg-[#DDE2F9] text-black rounded-[20px] p-4 transition-transform hover:scale-105 cursor-pointer">
          <div className="flex justify-between">
            <h3 className="font-medium">Ophthalmologist </h3>
            <div className="w-6 h-6 flex items-center justify-center">
            <div
                className="w-10 h-10 bg-contain bg-center bg-no-repeat"
              >👁️</div>
              
            </div>
          </div>
          {/* <div className="text-xs opacity-80 mt-1">11:00-12:00</div> */}
          <div className="text-xs mt-2">14:00 PM</div>
        </div>
      </div>


      <h4 className='text-neutral-500 pt-10 -pb-5'>On Saturday</h4>         
      <div className="mt-6 flex gap-4">
        {/* Dentist Card - 40% width - Navy Blue */}
        <div className="w-[40%] bg-[#DDE2F9] text-black rounded-[20px] p-4 transition-transform hover:scale-105 cursor-pointer">
          <div className="flex justify-between">
            <h3 className="font-medium">Cardiologist</h3>
            <div className="w-6 h-6 flex items-center justify-center">
              <div
                className="w-6 h-6 bg-contain bg-center bg-no-repeat"
              >❤️</div>
            </div>
          </div>
          <div className="text-xs mt-2">11:00 AM</div>
        </div>

        {/* Physiotherapy Card - 60% width - Gray */}
        <div className="w-[40%] bg-[#DDE2F9] text-black rounded-[20px] p-4 transition-transform hover:scale-105 cursor-pointer">
          <div className="flex justify-between">
            <h3 className="font-medium">Neurologist </h3>
            <div className="w-6 h-6 flex items-center justify-center">
            <div
                className="w-10 h-10 bg-contain bg-center bg-no-repeat"
              >👨‍⚕️</div>
              
            </div>
          </div>
          {/* <div className="text-xs opacity-80 mt-1">11:00-12:00</div> */}
          <div className="text-xs mt-2">14:00 PM</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;