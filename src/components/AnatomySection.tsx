import React from "react";
import { healthIndicators } from "../data/healthStatus";
import {  ScanLine, ZoomIn } from "lucide-react";

const AnatomySection: React.FC = () => {
  const anatomyImageUrl = "/public/assets/body.png";

  return (
    <>
      <div className="relative bg-[#F6FAFF] rounded-xl p-6 shadow-sm px-4 md:px-6 lg:px-8">
      {/* Search button (larger size) */}
      <div className="absolute top-4 right-4 z-10">
        <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <ZoomIn  className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          <img
            src={anatomyImageUrl}
            alt="Anatomical figure"
            className="h-[400px] object-cover rounded-lg opacity-90"
          />

          {healthIndicators.map((indicator) => {
            const isLeg = indicator.label.toLowerCase().includes("leg");

            const positionStyle = {
              top: indicator.position.top,
              left: indicator.position.left,
            };

            const flexDirection = isLeg ? "flex-row-reverse" : "flex-row";
            const labelMargin = isLeg ? "mr-2" : "ml-2";

            return (
              <div
                key={indicator.id}
                className={`absolute flex items-center ${flexDirection}`}
                style={positionStyle}
              >
                {/* Scanner icon */}
                <ScanLine
                  className={`h-6 w-6 text-cyan-400 animate-pulse`}
                />

                {/* Label */}
                <div
                  className={`py-1 px-3 rounded-lg text-xs font-medium whitespace-nowrap ${labelMargin}`}
                  style={{
                    backgroundColor: indicator.bgColor,
                    color: indicator.textColor,
                  }}
                >
                  <span className="mr-2">{indicator.emoji}</span>
                  {indicator.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default AnatomySection;
