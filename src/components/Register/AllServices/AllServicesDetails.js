import Services from "./Services";
import PropTypes from "prop-types";

const AllServicesDetails = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border gap-[56px] max-w-full text-left text-base text-paragraph-font-color font-manrope mq450:pb-[34px] mq450:box-border mq725:gap-[28px] mq975:pb-[52px] mq975:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-21xl text-taittle-color">
        <div className="w-[1200px] flex flex-col items-center justify-start gap-[48px] max-w-full mq725:gap-[24px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[48px] max-w-full mq725:gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq725:flex-wrap">
                <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[34px] mq975:text-13xl mq975:leading-[45px]">
                  Areas we Service
                </h1>
                <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-primery-color inline-block min-w-[122px] mq450:text-lgi mq450:leading-[26px]">
                  Step 6 of 6
                </h3>
              </div>
              <p className="m-0 self-stretch relative text-lg leading-[32px] font-medium text-paragraph-font-color">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution.
              </p>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center py-0 px-px gap-[32px] text-base text-paragraph-font-color mq725:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-24xl bg-background-color overflow-hidden flex flex-row items-center justify-start py-[18px] px-6 border-[1.5px] border-solid border-orange">
                  <div className="relative leading-[24px] font-medium">
                    Search suburbs to add...
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center text-taittle-color mq725:gap-[24px]">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[45px] mq725:gap-[22px]">
                  <Services />
                  <Services />
                  <Services />
                  <Services />
                  <Services />
                  <Services />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-full mq450:gap-[24px]">
            <div className="flex flex-row items-center justify-center gap-[40px] mq450:flex-wrap mq450:gap-[20px]">
              <button className="cursor-pointer py-[13px] px-14 bg-white rounded-23xl flex flex-row items-center justify-center border-[1px] border-solid border-primery-color hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
                <b className="relative text-lg leading-[26px] font-semibold font-manrope text-primery-color text-left inline-block min-w-[42px]">
                  Back
                </b>
              </button>
              <button className="cursor-pointer [border:none] py-[15px] px-14 bg-primery-color rounded-23xl flex flex-row items-center justify-center hover:bg-chocolate">
                <b className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[43px]">
                  Next
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AllServicesDetails.propTypes = {
  className: PropTypes.string,
};

export default AllServicesDetails;
