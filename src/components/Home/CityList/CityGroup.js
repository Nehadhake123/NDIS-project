// src/components/CityList/CityGroup.js
import React, { useMemo } from "react";

const CityGroup = ({
  state,
  cities,
  propWidths,
  propMinWidths,
  propTextTransform,
  propAlignSelf,
  propDisplay,
  propFlex,
}) => {
  const stateCityListStyle = useMemo(() => {
    return {
      width: propWidths,
    };
  }, [propWidths]);

  return (
    <div className="w-[150px] shrink-0 flex flex-col items-start justify-start gap-[32px] text-left text-5xl text-taittle-color font-manrope">
      <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-medium font-inherit mq450:text-lgi mq450:leading-[22px]">
        {state}
      </h3>
      <div
        className="flex flex-col items-start justify-start gap-[24px] text-base"
        style={stateCityListStyle}
      >
        {cities.map((city, index) => (
          <div className="flex flex-row items-center justify-start gap-[7px]" key={index}>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/img/location.svg"
            />
            <div
              className="relative leading-[20px] capitalize inline-block"
              style={{
                minWidth: propMinWidths[index] || "48px",
                textTransform: propTextTransform,
                alignSelf: propAlignSelf,
                display: propDisplay,
                flex: propFlex,
              }}
            >
              {city}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityGroup;
