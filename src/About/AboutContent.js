import PropTypes from 'prop-types';

const AboutContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-center text-37xl text-white font-manrope ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center pt-[67px] pb-[68px] pr-5 pl-[21px] box-border relative max-w-full mq450:pt-11 mq450:pb-11 mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt="AboutContent background"
          src="/img/home2.png"
        />
        <div className="w-[903px] flex flex-col items-center justify-start gap-[26px] max-w-full z-[1]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-bold font-inherit mq450:text-15xl mq450:leading-[38px] mq975:text-26xl mq975:leading-[51px]">
              About Us
            </h1>
            <div className="w-[854px] relative text-xl leading-[36px] font-medium inline-block max-w-full mq450:text-base mq450:leading-[29px]">
              Let us take the hassle out of your NDIS provider search. We'll
              connect you with verified local providers, giving you a curated
              selection to choose from with confidence.
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-left text-lg">
            <div className="rounded-23xl bg-primery-color flex flex-row items-center justify-center py-[15px] px-6 gap-[10px] whitespace-nowrap">
              <div className="relative leading-[26px]">
                <span className="font-semibold">Contact </span>
                <span className="font-medium">Provider</span>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt="Arrow icon"
                src="/img/upArrow.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutContent.propTypes = {
  className: PropTypes.string,
};

export default AboutContent;
