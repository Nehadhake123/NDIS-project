// import HousingNursingServices from "./HousingNursingServices";

const ServicesSection = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-10 px-[120px] pb-0 mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[60px] mq725:pr-[60px] mq725:box-border">
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <h1 className="m-0 relative text-inherit leading-[44px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px] mq950:text-7xl mq950:leading-[35px]">
            Services
          </h1>
          <button className="cursor-pointer py-2.5 px-[2px] bg-[transparent] rounded-22xl flex flex-col items-start justify-start border-[1px] border-solid border-primery-color">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative text-base leading-[24px] font-medium font-manrope text-primery-color text-left inline-block min-w-[119px]">
                See All Services
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/img/LeftArrow2.svg"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center">
        <div className="self-stretch shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-2xl bg-white overflow-hidden flex flex-col items-center justify-center py-4 px-2 mq450:pt-8 mq450:pb-3 mq450:box-border">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-4 min-h-[300px]">
            <HousingNursingServices
              group470="/group-470.svg"
              housing="Housing"
              propWidth="140px"
              propAlignSelf="stretch"
            />
            <HousingNursingServices
              group470="/group-471.svg"
              housing="Nursing Services"
              propWidth="140px"
              propAlignSelf="stretch"
            />
            <HousingNursingServices
              group470="/group-472.svg"
              housing="Respite Accommodation"
              propWidth="140px"
              propAlignSelf="stretch"
            />
            <HousingNursingServices
              group470="/group-473.svg"
              housing="Software and Apps"
              propWidth="140px"
              propAlignSelf="stretch"
            />
            <HousingNursingServices
              group470="/group-471.svg"
              housing="Nursing Services"
              propWidth="140px"
              propAlignSelf="stretch"
            />
            <HousingNursingServices
              group470="/group-472.svg"
              housing="Respite Accommodation"
              propWidth="140px"
              propAlignSelf="stretch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
