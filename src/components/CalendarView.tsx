import React, { useState } from 'react';
import { format, isSameDay, isWithinInterval, startOfDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarDays } from '../data/calendarData';

const dayNames = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const CalendarView: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<{
    start: Date | null;
    end: Date | null;
    startTime: string | null;
    endTime: string | null;
  }>({
    start: null,
    end: null,
    startTime: null,
    endTime: null,
  });

  const handleDateSelect = (date: Date) => {
    if (!selectedRange.start) {
      setSelectedRange({
        start: date,
        end: null,
        startTime: null,
        endTime: null,
      });
    } else if (!selectedRange.end && date >= selectedRange.start) {
      setSelectedRange({
        ...selectedRange,
        end: date,
        endTime: null,
      });
    } else {
      setSelectedRange({
        start: date,
        end: null,
        startTime: null,
        endTime: null,
      });
    }
  };

  const handleTimeSelect = (time: string, date: Date) => {
    const currentDate = startOfDay(date);

    if (selectedRange.start && isSameDay(currentDate, selectedRange.start)) {
      setSelectedRange({
        ...selectedRange,
        startTime: time,
      });
    } else if (
      selectedRange.end &&
      isSameDay(currentDate, selectedRange.end)
    ) {
      setSelectedRange({
        ...selectedRange,
        endTime: time,
      });
    }
  };

  const isDateInRange = (date: Date) => {
    if (!selectedRange.start || !selectedRange.end) return false;
    return isWithinInterval(date, {
      start: selectedRange.start,
      end: selectedRange.end,
    });
  };

  return (
    <div className="bg-[#F6FAFF] p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-[#3734A9] font-semibold">October 2021</h2>
        <div className="flex gap-2">
          <button className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200">
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200">
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-sm font-medium mb-2">
            {day}
          </div>
        ))}

        {calendarDays.map((day) => {
          const date = new Date(2021, 9, day.day);
          const isSelected =
            (selectedRange.start && isSameDay(date, selectedRange.start)) ||
            (selectedRange.end && isSameDay(date, selectedRange.end));
          const isInRange = isDateInRange(date);

          return (
            <div
              key={day.day}
              className={`flex flex-col cursor-pointer transition-colors rounded-lg ${
                isSelected
                  ? 'bg-blue-100 ring-2 ring-blue-400'
                  : isInRange
                  ? 'bg-blue-50'
                  : ''
              }`}
              onClick={() => handleDateSelect(date)}
            >
              <div className="text-center font-semibold mb-2 pt-2">
                {day.day}
              </div>

              <div className="flex flex-col gap-1 p-1">
                {day.timeSlots.map((slot, index) => (
                  <div
                    key={`${day.day}-${index}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTimeSelect(slot.time, date);
                    }}
                    className={`text-xs text-center py-1 px-2 rounded cursor-pointer hover:bg-blue-100 transition-colors ${
                      (selectedRange.start &&
                        isSameDay(date, selectedRange.start) &&
                        selectedRange.startTime === slot.time) ||
                      (selectedRange.end &&
                        isSameDay(date, selectedRange.end) &&
                        selectedRange.endTime === slot.time)
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-500'
                    }`}
                  >
                    {slot.time}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Static Appointment Cards with 40/60 split */}
      <div className="mt-6 flex gap-4">
        {/* Dentist Card - 40% width - Navy Blue */}
        <div className="w-[40%] bg-blue-900 text-white rounded-[28px] p-4 transition-transform hover:scale-105 cursor-pointer">
          <div className="flex justify-between">
            <h3 className="font-medium">Dentist</h3>
            <div className="w-6 h-6 flex items-center justify-center">
              <div
                className="w-6 h-6 bg-contain bg-center bg-no-repeat"
                
              >🦷</div>
            </div>
          </div>
          <div className="text-xs opacity-80 mt-1">09:00-11:00</div>
          <div className="text-xs mt-2">Dr. Cameron Williamson</div>
        </div>

        {/* Physiotherapy Card - 60% width - Gray */}
        <div className="w-[60%] bg-[#DDE2F9] text-black rounded-[28px] p-4 transition-transform hover:scale-105 cursor-pointer">
          <div className="flex justify-between">
            <h3 className="font-medium">Physiotherapy Appointment</h3>
            <div className="w-6 h-6 flex items-center justify-center">
            <div
                className="w-10 h-10 bg-contain bg-center bg-no-repeat"
              >💪🏻</div>
              
            </div>
          </div>
          <div className="text-xs opacity-80 mt-1">11:00-12:00</div>
          <div className="text-xs mt-2">Dr. Kevin Djones</div>
        </div>
      </div>

      {/* Selected Range Info */}
      {selectedRange.start && selectedRange.end && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            Selected: {format(selectedRange.start, 'MMM dd')}
            {selectedRange.startTime && ` ${selectedRange.startTime}`} →{' '}
            {format(selectedRange.end, 'MMM dd')}
            {selectedRange.endTime && ` ${selectedRange.endTime}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
