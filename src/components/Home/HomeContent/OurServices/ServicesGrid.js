import React from 'react';

const ServicesGrid = ({ serviceSeparator, acupuncture }) => {
  return (
    <div className="w-96 shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-center justify-center p-6 box-border max-w-full text-left text-xl text-taittle-color font-manrope">
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
        <div className="h-[72px] w-[72px] relative flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[9px] top-[0px] [transform:scale(1.917)]"
            loading="lazy"
            alt="Service Icon"
            src={serviceSeparator}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-[12px] min-w-[161px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-semibold font-inherit mq450:text-base mq450:leading-[22px]">
            {acupuncture}
          </h3>
          <div className="self-stretch relative text-sm tracking-[-0.11px] leading-[24px] text-paragraph-font-color">
            We believe in creating an atmosphere where every child can thrive.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
