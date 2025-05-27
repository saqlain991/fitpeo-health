import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Left column */}
            <div className="col-span-12 md:col-span-4 space-y-6">
              <AnatomySection />
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <HealthStatusCards />
                </div>
                <div className="col-span-2">
                  <ActivityFeed />
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="col-span-12 md:col-span-8 space-y-6">
              <CalendarView />
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <UpcomingSchedule />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;