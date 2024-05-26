import React from 'react';

const GroupComponent = () => {
  return (
    <section className="self-stretch bg-white flex flex-row items-start justify-center py-[100px] px-5 box-border max-w-full text-left text-29xl text-taittle-color font-manrope">
      <div className="h-[676px] w-[1440px] relative bg-white hidden max-w-full" />
      <div className="w-[1210px] flex flex-row items-center justify-start gap-[75px] max-w-full z-[1] lg:flex-wrap mq450:gap-[19px] mq825:gap-[37px]">
        <img
          className="w-[562px] relative max-h-full max-w-full lg:flex-1"
          loading="lazy"
          alt="NDIS Navigators"
          src="/img/grp.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-center py-5 px-0 box-border gap-[40px] min-w-[372px] max-w-full mq825:gap-[20px] mq1425:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center">
              <h1 className="m-0 self-stretch relative text-inherit leading-[64px] capitalize font-bold font-inherit mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
                <span>Your </span>
                <span className="text-primery-color">NDIS</span>
                <span> Navigators are ready to help</span>
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center max-w-full text-base text-paragraph-font-color">
              <div className="w-[517px] flex flex-col items-start justify-center max-w-full">
                <div className="self-stretch relative leading-[28px]">
                  Our friendly Connections Team takes away the stress by doing
                  the search for you, finding local NDIS Providers that meet
                  your needs to choose from.
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
            <div className="rounded-23xl bg-primery-color flex flex-row items-center justify-center py-[15px] px-8 gap-[8px] whitespace-nowrap">
              <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[81px]">
                Let’s Talk
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt="Arrow Icon"
                src="/img/upArrow.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
