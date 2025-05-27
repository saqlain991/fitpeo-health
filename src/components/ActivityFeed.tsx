import React from "react";

const activityData: {
  day: string;
  bars: { height: number; color: string }[];
}[] = [
  { day: "Mon", bars: [{ height: 70, color: "bg-gray-300" }, { height: 50, color: "bg-cyan-400" }, { height: 40, color: "bg-indigo-700" }] },
  { day: "Tues", bars: [{ height: 80, color: "bg-cyan-400" }, { height: 60, color: "bg-indigo-700" }, { height: 30, color: "bg-gray-300" }] },
  { day: "Wed", bars: [{ height: 40, color: "bg-gray-300" }, { height: 50, color: "bg-cyan-400" }, { height: 30, color: "bg-indigo-700" }] },
  { day: "Thurs", bars: [{ height: 70, color: "bg-cyan-400" }, { height: 50, color: "bg-indigo-700" }, { height: 40, color: "bg-gray-300" }] },
  { day: "Fri", bars: [{ height: 80, color: "bg-cyan-400" }, { height: 60, color: "bg-indigo-700" }, { height: 50, color: "bg-gray-300" }] },
  { day: "Sat", bars: [{ height: 50, color: "bg-cyan-400" }, { height: 40, color: "bg-indigo-700" }, { height: 60, color: "bg-gray-300" }] },
  { day: "Sun", bars: [{ height: 60, color: "bg-cyan-400" }, { height: 50, color: "bg-gray-300" }, { height: 40, color: "bg-indigo-700" }] },
];

const ActivityChart: React.FC = () => {
  return (
    <div className="bg-[#f4f8fd] rounded-xl p-4 sm:p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm sm:text-base font-semibold text-indigo-900">Activity</h2>
        <p className="text-xs sm:text-sm text-gray-500">3 appointment on this week</p>
      </div>

      <div className="flex justify-between items-end h-40 sm:h-48 overflow-x-auto">
        {activityData.map((day, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {/* Bars */}
            <div className="flex items-end space-x-1">
              {day.bars.map((bar, idx) => (
                <div
                  key={idx}
                  className={`w-[6px] sm:w-[8px] rounded-full ${bar.color}`}
                  style={{ height: `${bar.height}px` }}
                />
              ))}
            </div>
            {/* Day label */}
            <span className="text-[10px] sm:text-xs text-gray-500">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
