import React from 'react';

const FrameComponent = ({ servicesType, servicesType1, propWidth = 'auto', propAlignSelf = 'auto' }) => {
  return (
    <div className={`w-[${propWidth}] self-[${propAlignSelf}] flex flex-col items-start justify-start gap-[12px]`}>
      <div className="relative text-xl leading-[28px] font-medium font-manrope text-taittle-color text-left inline-block">
        {servicesType}
      </div>
      <div className="self-stretch rounded-4xs bg-background-color flex flex-row items-start justify-start py-[11px] px-3 border-[0.5px] border-solid border-orange">
        <input
          className="w-full [border:none] [outline:none] font-manrope text-base bg-[transparent] h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0"
          placeholder={servicesType1}
          type="text"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
