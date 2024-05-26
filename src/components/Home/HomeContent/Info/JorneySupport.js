import JorneyLogic from "@/components/Home/HomeContent/Info/JorneyLogic";
const JourneySupport = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-center text-29xl text-taittle-color font-manrope">
      <div className="flex-1 bg-background-color flex flex-col items-center justify-center py-[100px] px-5 box-border gap-[56px] max-w-full mq825:gap-[28px]">
        <h1 className="m-0 w-[876px] relative text-inherit leading-[64px] capitalize font-bold font-inherit flex items-center max-w-full mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
          <span className="w-full">
            <p className="m-0">Support for every</p>
            <p className="m-0">
              <span>{`stage of your `}</span>
              <span className="text-primery-color">NDIS</span>
              <span className="text-taittle-color"> journey</span>
            </p>
          </span>
        </h1>
        <div className="w-[1200px] grid grid-cols-[repeat(3,_minmax(288px,_1fr))] gap-[24px] max-w-full text-left text-5xl lg:justify-center lg:grid-cols-[minmax(288px,_1fr)] mq450:justify-center mq450:grid-cols-[repeat(2,_minmax(288px,_499px))] mq825:justify-center mq825:grid-cols-[repeat(2,_minmax(288px,_499px))] mq1425:justify-center mq1425:grid-cols-[repeat(2,_minmax(288px,_499px))]">
          <div className="rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center p-6 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
              <img
                className="self-stretch h-[198px] relative rounded-md max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt="NDIS Plan"
                src="/img/talk1.png"
              />
              <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]">
                  <p className="m-0">{`Don’t have an NDIS plan `}</p>
                  <p className="m-0">yet?</p>
                </h3>
                <div className="self-stretch relative text-base leading-[28px] text-paragraph-font-color">
                  We need details about the person who needs support: their disability.
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px] text-lg">
                  <div className="relative leading-[24px] font-medium">
                    Find information
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt="Arrow Icon"
                    src="/img/LeftArrow1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <JorneyLogic
            rectangle343="/rectangle-343@2x.png"
            haveAnNDISPlanAndNeedHelp="Have an NDIS plan and need help finding providers?"
            getSupport="Get Support"
          />
          <JorneyLogic
            rectangle343="/rectangle-343-2@2x.png"
            haveAnNDISPlanAndNeedHelp="Prefer to find your own service providers?"
            getSupport="Search Providers"
            propDisplay="unset"
            propMinWidth="unset"
          />
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
          <div className="rounded-23xl bg-primery-color flex flex-row items-center justify-center py-[15px] px-8 gap-[7px] whitespace-nowrap">
            <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[91px]">
              View More
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt="Arrow Icon"
              src="/img/LeftArrow.svg"
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default JourneySupport;
