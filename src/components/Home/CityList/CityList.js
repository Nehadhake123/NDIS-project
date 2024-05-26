// src/components/CityList/CityList.js
import React from "react";
import CityGroup from "./CityGroup";

const CityList = () => {
  const cityGroups = [
    {
      state: "NSW",
      cities: ["Albury", "Bathurst", "Central Coast", "Coffs Harbour", "Dubbo", "Lismore", "Maitland", "Newcastle", "Richmond", "Port Macquarie", "Sydney", "Tamworth", "Wagga Wagga"],
      propWidths: "120px",
      propMinWidths: ["56px", "62px", "89px", "110px", "64px", "60px", "65px", "79px", "76px", "113px", "56px", "74px", "106px"],
    },
    {
      state: "Victoria",
      cities: ["Ballarat", "Bendigo", "Cranbourne", "Frankston East", "Geelong", "Melbourne", "Melton", "Shepparton", "St Albans", "Geelong", "Warrnambool", "Wodonga"],
      propWidths: "143px",
      propMinWidths: ["56px", "62px", "89px", "110px", "64px", "100px", "72px", "53px", "88px", "71px", "64px", "100px"],
    },
    // Add other states and cities here...
  ];

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full shrink-0 text-left text-13xl text-taittle-color font-manrope mq750:pb-[34px] mq750:box-border mq1050:pb-[52px] mq1050:box-border">
      <div className="flex-1 bg-background-color flex flex-col items-center justify-center py-20 px-5 box-border max-w-full z-[2] mq450:pt-[34px] mq450:pb-[34px] mq450:box-border mq1050:pt-[52px] mq1050:pb-[52px] mq1050:box-border">
        <div className="flex flex-col items-center justify-start gap-[56px] max-w-full mq750:gap-[28px]">
          <h1 className="m-0 relative text-inherit leading-[40px] capitalize font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">{`Nearby Popular Cities `}</h1>
          <div className="w-[1200px] overflow-x-auto flex flex-row items-start justify-between gap-[20px] max-w-full text-5xl">
            {cityGroups.map((group, index) => (
              <CityGroup
                key={index}
                state={group.state}
                cities={group.cities}
                propWidths={group.propWidths}
                propMinWidths={group.propMinWidths}
                propTextTransform="capitalize"
                propAlignSelf="stretch"
                propDisplay="unset"
                propFlex="1"
              />
            ))}
            <div className="w-[150px] shrink-0 flex flex-col items-start justify-center gap-[40px]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[32px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-medium font-inherit mq450:text-lgi mq450:leading-[22px]">
                  NT
                </h3>
                <div className="flex flex-col items-start justify-start gap-[24px] text-base">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/img/location.svg"
                    />
                    <div className="relative leading-[20px] capitalize inline-block min-w-[97px]">
                      Alice Springs
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/img/location.svg"
                    />
                    <div className="relative leading-[20px] capitalize inline-block min-w-[51px]">
                      Darwin
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/img/location.svg"
                    />
                    <div className="relative leading-[20px] capitalize inline-block min-w-[73px]">
                      Katherine
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/img/location.svg"
                    />
                    <div className="relative leading-[20px] capitalize inline-block min-w-[68px]">
                      McMinns
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/img/location.svg"
                    />
                    <div className="relative leading-[20px] capitalize inline-block min-w-[85px]">
                      Palmerston
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[32px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[28px] font-medium font-inherit mq450:text-lgi mq450:leading-[22px]">
                  ACT
                </h3>
                <div className="flex flex-col items-start justify-start text-base">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/img/location.svg"
                    />
                    <div className="relative leading-[20px] capitalize inline-block min-w-[69px]">
                      Canberra
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityList;
