import PropTypes from "prop-types";

const ActionButtons = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-5xl text-title-color font-inter mq450:gap-[16px] ${className}`}>
      <div className="flex flex-row items-start justify-start gap-[23.5px] max-w-full mq725:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px]"
            loading="lazy"
            alt=""
            src="/img/save.svg"
          />
          <h3 className="m-0 relative text-inherit leading-[32px] font-normal font-inherit inline-block min-w-[56px] mq450:text-lgi mq450:leading-[26px]">
            Save
          </h3>
        </div>
        <div className="h-[29px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="w-px h-[27px] relative box-border border-r-[1px] border-solid border-primary-color" />
        </div>
        <h3 className="m-0 relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[26px]">
          License this article
        </h3>
        <div className="h-[29px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="w-px h-[27px] relative box-border border-r-[1px] border-solid border-primary-color" />
        </div>
        <h3 className="m-0 relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[26px]">
          Your Opinion
        </h3>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center gap-[16px] text-base font-manrope">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="h-14 w-14 relative rounded-[50%] object-cover min-h-[56px]"
            loading="lazy"
            alt=""
            src="/img/man.png"
          />
          <div className="flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[24px] font-medium">
              Eleyas Hasan Shirsho
            </div>
            <div className="relative leading-[24px] text-slategray inline-block min-w-[90px]">
              2 April ,2024
            </div>
          </div>
        </div>
        <div className="self-stretch relative leading-[28px] text-slategray">
          Eleyas Hasan IsWe obviously can’t sign off without sharing Tristram and Tyla’s introduction to Michael the calf. We saw so many providers doing some very cool things but loved this.
        </div>
      </div>
      <div className="w-[407px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0 object-contain min-h-[32px]"
              loading="lazy"
              alt=""
              src="/img/share.svg"
            />
            <h3 className="m-0 relative text-inherit leading-[32px] font-normal font-inherit inline-block min-w-[79px] mq450:text-lgi mq450:leading-[26px]">
              Share :
            </h3>
          </div>
        </div>
        <img
          className="h-12 w-12 relative min-h-[48px]"
          loading="lazy"
          alt=""
          src="/img/fb1.svg"
        />
        <img
          className="h-12 w-12 relative min-h-[48px]"
          loading="lazy"
          alt=""
          src="/img/pin.svg"
        />
        <img
          className="h-12 w-12 relative min-h-[48px]"
          loading="lazy"
          alt=""
          src="/img/linkdin.svg"
        />
        <img
          className="h-12 w-12 relative min-h-[48px]"
          loading="lazy"
          alt=""
          src="/img/xx.svg"
        />
      </div>
    </div>
  );
};

ActionButtons.propTypes = {
  className: PropTypes.string,
};

export default ActionButtons;
