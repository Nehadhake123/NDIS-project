import PropTypes from "prop-types";
import { useMemo } from "react";

const FilterOption = ({
  className = "",
  location2,
  servicesType,
  propGap,
  propMinWidth,
  propDisplay,
}) => {
  const locationStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const servicesTypeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <button
      className={`cursor-pointer py-[18px] px-[15px] bg-white self-stretch rounded-xl overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-whitesmoke-100 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
        <div
          className="flex flex-row items-center justify-start gap-[4px]"
          style={locationStyle}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt="Location"
            src={location2}
          />
          <div
            className="relative text-lg leading-[24px] font-medium font-manrope text-title-color text-left inline-block min-w-[121px]"
            style={servicesTypeStyle}
          >
            {servicesType}
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt="Down Arrow"
          src="/img/dropDown.svg"
        />
      </div>
    </button>
  );
};

FilterOption.propTypes = {
  className: PropTypes.string,
  location2: PropTypes.string.isRequired,
  servicesType: PropTypes.string.isRequired,
  propGap: PropTypes.string,
  propMinWidth: PropTypes.string,
  propDisplay: PropTypes.string,
};

export default FilterOption;
