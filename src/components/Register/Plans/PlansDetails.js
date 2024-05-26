import { useMemo } from "react";
import PropTypes from "prop-types";

const PlansDetails = ({
  className = "",
  mobilePlan,
  everythingYouNeed,
  prop,
  month,
  everythingYouNeed1,
  propBorder,
  propBackgroundColor,
  propColor,
  propLetterSpacing,
  propMinWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const accessOurExtensiveDatabaseStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const joinOurTeamStyle = useMemo(() => {
    return {
      color: propColor,
      letterSpacing: propLetterSpacing,
    };
  }, [propColor, propLetterSpacing]);

  const everythingYouNeedStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`w-96 shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-2xl bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[38px] px-[22px] text-center text-13xl text-taittle-color font-manrope border-[1.5px] border-solid border-primery-color mq450:pt-5 mq450:pb-5 mq450:box-border mq1050:pt-[25px] mq1050:pb-[25px] mq1050:box-border ${className}`}
      style={frameDivStyle}
    >
      <div className="flex-1 flex flex-col items-center justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[17.5px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[40px] font-semibold font-inherit mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
              {mobilePlan}
            </h1>
            <div className="self-stretch relative text-base leading-[28px] font-medium text-paragraph-font-color">
              {everythingYouNeed}
            </div>
          </div>
          <b className="self-stretch relative leading-[77px] font-bold text-primery-color text-37xl mq450:text-lgi mq450:leading-[51px]">
            <span>{prop}</span>
            <span className="text-5xl">{month}</span>
          </b>
          <button
            className="cursor-pointer [border:none] py-3.5 px-5 bg-primery-color self-stretch rounded-24xl flex flex-col items-center justify-center"
            style={accessOurExtensiveDatabaseStyle}
          >
            <div className="flex flex-row items-center justify-center">
              <b
                className="relative text-lg leading-[28px] font-semibold font-manrope text-white text-center inline-block min-w-[105px] whitespace-nowrap"
                style={joinOurTeamStyle}
              >
                Get Started
              </b>
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px] text-left text-base">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div
              className="flex-1 relative leading-[24px] font-medium inline-block min-w-[133px]"
              style={everythingYouNeedStyle}
            >
              {everythingYouNeed1}
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[80px]">
              Profile Listing
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[103px]">
              Direct Messaging
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[128px]">
              Profile Customization
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[110px]">
              Customer Support
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[87px]">
              Picture Gallery
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[139px]">
              SEO-Friendly Web Links
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[153px]">
              Unlimited Service Listings
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[95px]">
              Unlimited Leads
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px]"
            alt=""
            src="/line-13.svg"
          />
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/img/tic.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[163px]">
              Receive Call Back Requests
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/img/round.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PlansDetails.propTypes = {
  className: PropTypes.string,
  mobilePlan: PropTypes.string,
  everythingYouNeed: PropTypes.string,
  prop: PropTypes.string,
  month: PropTypes.string,
  everythingYouNeed1: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propLetterSpacing: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default PlansDetails;
