import { useMemo } from "react";

const JorneyLogic = ({
  rectangle343,
  haveAnNDISPlanAndNeedHelp,
  getSupport,
  propDisplay,
  propMinWidth,
}) => {
  // Using useMemo to memoize styles based on propDisplay and propMinWidth
  const getSupportStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center pt-6 px-6 pb-8 box-border max-w-full text-left text-5xl text-taittle-color font-manrope">
      <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
        <img
          className="self-stretch h-[198px] relative rounded-md max-w-full overflow-hidden shrink-0 object-cover"
          alt="NDIS Plan"
          src="/img/talk1.png"
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
          <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-lgi mq450:leading-[29px]">
            {haveAnNDISPlanAndNeedHelp}
          </h3>
          <div className="self-stretch relative text-base leading-[28px] text-paragraph-font-color">
            We need details about the person who needs support: their disability.
          </div>
          <div className="flex flex-row items-center justify-start gap-[6px] text-lg">
            <div
              className="relative leading-[24px] font-medium inline-block min-w-[106px]"
              style={getSupportStyle}
            >
              {getSupport}
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt="Arrow Icon"
              src="/img/LeftArrow1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JorneyLogic ;
