import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import { ChevronDown} from "lucide-react";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="bg-white flex-1 overflow-y-auto p-6">
          <div className="flex  items-center gap-96">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <div className="flex items-center text-sm text-[#3635A7]">
          <span>This Week</span>
          <div className="flex items-center justify-center ml-1">
            <ChevronDown size={16} className="text-[#3635A7]" />
          </div>
        </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left column */}
            <div className="col-span-12 md:col-span-6 space-y-6">
              {/* Anatomy and Health side-by-side on medium screens and up */}
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="w-full md:w-2/3">
                  <AnatomySection />
                </div>
                <div className="w-full md:w-1/3">
                  <HealthStatusCards />
                </div>
              </div>

              {/* ActivityFeed below Anatomy + Health */}
              <div className="w-full">
                <ActivityFeed />
              </div>
            </div>

            {/* Right column */}
            <div className="bg-[#F6FAFF] rounded-lg  col-span-12 md:col-span-6 space-y-6">
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
