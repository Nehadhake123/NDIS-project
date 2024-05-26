import React from 'react';
import FrameComponent from './FrameComponent ';

const SearchForm = () => {
    return (
        <div className="self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full text-center text-xl text-white font-manrope mq725:gap-[18px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[731px] flex flex-col items-start justify-start gap-[32px] max-w-full mq975:gap-[16px]">
              <div className="self-stretch relative leading-[36px] font-medium z-[1] mq450:text-base mq450:leading-[29px]">
                Let us do the NDIS Provider search for you, connecting you with
                verified local providers to choose from
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <button className="cursor-pointer [border:none] py-[15px] px-8 bg-primery-color rounded-23xl flex flex-row items-start justify-start gap-[8px] z-[1]">
                  <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[81px]">
                    Let’s Talk
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/img/Arrow.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start py-10 px-8 gap-[32px] z-[1] text-13xl text-taittle-color mq725:gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-center">
              <h1 className="m-0 w-[386px] relative text-inherit leading-[36px] capitalize font-bold font-inherit inline-block mq450:text-lgi mq450:leading-[22px] mq975:text-7xl mq975:leading-[29px]">
                NDIS Providers in Sydney
              </h1>
            </div>
            <form className="m-0 self-stretch flex flex-row flex-wrap items-end justify-center py-0 pr-[3px] pl-0 gap-[19px]">
              <FrameComponent
                servicesType="Services Type"
                servicesType1="Services Type"
              />
              <div className="h-[77px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
                <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-darkgray-200" />
              </div>
              <div className="w-[201px] flex flex-col items-start justify-start gap-[12px]">
                <div className="w-[194px] relative text-xl leading-[28px] font-medium font-manrope text-taittle-color text-left inline-block mq450:text-base mq450:leading-[22px]">
                  Locations
                </div>
                <div className="self-stretch rounded-4xs bg-background-color flex flex-row items-start justify-start py-[11px] px-3 border-[0.5px] border-solid border-orange">
                  <input
                    className="w-[120px] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0"
                    placeholder="Locations"
                    type="text"
                  />
                  <div className="h-6 w-6 relative overflow-hidden shrink-0 hidden" />
                </div>
              </div>
              <div className="h-[77px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
                <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-darkgray-200" />
              </div>
              <FrameComponent
                servicesType="Providers Near You"
                servicesType1="Providers Near"
                propWidth="201px"
                propAlignSelf="unset"
              />
              <div className="h-[77px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border">
                <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-darkgray-200" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border min-w-[142px]">
                <FrameComponent
                  servicesType="Disabilities types"
                  servicesType1="Disabilities "
                  propWidth="unset"
                  propAlignSelf="stretch"
                />
              </div>
              <button className="cursor-pointer [border:none] py-[15px] px-14 bg-primery-color rounded-23xl flex flex-row items-start justify-start hover:bg-chocolate">
                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[63px]">
                  Search
                </div>
              </button>
            </form>
          </div>
        </div>
      );
    };
    
export default SearchForm;
