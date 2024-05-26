import React from 'react';
import ServicesGrid from './ServicesGrid';

const BestServices = () => {
  return (
    <div className="w-full relative bg-background-color flex flex-col items-center justify-center py-[100px] px-5 box-border gap-[56px] leading-[normal] tracking-[normal] text-center text-[48px] text-taittle-color font-manrope mq675:gap-[28px]">
      <div className="w-[667px] flex flex-col items-center justify-start max-w-full mq750:gap-[28px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-bold font-inherit mq450:text-[29px] mq450:leading-[38px] mq750:text-[38px] mq750:leading-[51px]">
          Our Best Services
        </h1>
      </div>
      <section className="w-[1200px] flex flex-row flex-wrap items-start justify-start gap-[24px_22px] min-h-[456px] max-w-full">
        <ServicesGrid serviceSeparator="/img/Services1.svg" acupuncture="Acupuncture" />
        <ServicesGrid serviceSeparator="/img/Services2.svg" acupuncture="Art Therapy" />
        <ServicesGrid serviceSeparator="/img/Services3.svg" acupuncture="Audiology" />
        <ServicesGrid serviceSeparator="/img/Services4.svg" acupuncture="Behavioral Support" />
        <ServicesGrid serviceSeparator="/img/Services5.svg" acupuncture="Car Modifications" />
        <ServicesGrid serviceSeparator="/img/Services6.svg" acupuncture="Chiropractor" />
        <ServicesGrid serviceSeparator="/img/Services7.svg" acupuncture="Cleaning" />
        <ServicesGrid serviceSeparator="/img/Services8.svg" acupuncture="Consumables" />
        <ServicesGrid serviceSeparator="/Services9.svg" acupuncture="Creative Arts" />
      </section>
      <div className="flex flex-row items-center justify-center text-left text-[18px] text-white">
        <div className="rounded-[42px] bg-primery-color flex flex-row items-center justify-center py-[15px] px-8 gap-[7px] whitespace-nowrap">
          <div className="relative leading-[26px] font-semibold">
            View All Services
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="Arrow Icon"
            src="/img/LeftArrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default BestServices;
