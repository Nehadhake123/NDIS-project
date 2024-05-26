import { useMemo } from "react";
import PropTypes from "prop-types";


const SectionContent = ({
  className = "",
  group471,
  nursingServices,
  arrowUpRightMD1,
  propBackgroundColor,
  propBorder,
  propWidth,
  propAlignSelf,
  propColor,
  propColor1,
  propColor2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const sendersNameStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const nursingServicesStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const supportedIndependentLivingStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const readMoreStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div
      className={`w-[243px] rounded bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-2.5 px-[11px] text-left text-base text-taittle-color font-manrope border-[1px] border-solid border-orange ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
          <div
            className="w-[162px] flex flex-col items-start justify-center gap-[12px]"
            style={sendersNameStyle}
          >
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src={group471}
            />
            <div
              className="self-stretch relative leading-[20px] font-medium"
              style={nursingServicesStyle}
            >
              {nursingServices}
            </div>
          </div>
          <p
            className="m-0 self-stretch relative text-xs leading-[18px] text-paragraph-font-color"
            style={supportedIndependentLivingStyle}
          >
            Supported Independent Living ( SIL), Short Term Accommodation or
            Respite....
          </p>
        </div>
        <div className="flex flex-row items-center justify-start gap-[10px] text-primery-color">
          <a
            className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[80px]"
            style={readMoreStyle}
          >
            Read more
          </a>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            loading="lazy"
            alt=""
            src={arrowUpRightMD1}
          />
        </div>
      </div>
    </div>
  );
};

SectionContent.propTypes = {
  className: PropTypes.string,
  group471: PropTypes.string,
  nursingServices: PropTypes.string,
  arrowUpRightMD1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propColor: PropTypes.any,
  propColor1: PropTypes.any,
  propColor2: PropTypes.any,
};

export default SectionContent;
