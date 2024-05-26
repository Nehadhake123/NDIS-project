import PropTypes from 'prop-types';

const AboutContent3 = ({ className = '' }) => {
  return (
    <section className={`self-stretch bg-white flex flex-col items-center justify-center pt-[100px] px-5 pb-20 box-border gap-[56px] max-w-full text-center text-29xl text-taittle-color font-manrope mq725:gap-[28px] mq725:pt-[65px] mq725:pb-[52px] mq725:box-border ${className}`}>
      <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[34px] mq975:text-19xl mq975:leading-[45px]">How Can We Help?</h1>
      <div className="w-[1200px] flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full text-left text-xl">
        <div className="flex-1 shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center py-8 px-6 box-border min-w-[288px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
            <div className="w-20 h-20 relative flex items-center justify-center">
              <img className="w-full h-full object-contain absolute left-[9px] top-[5px] [transform:scale(1.925)]" loading="lazy" alt="" src="/img/help3.svg" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
              <b className="relative leading-[28px] capitalize mq450:text-base mq450:leading-[22px]">Comprehensive Directory</b>
              <div className="self-stretch h-28 relative text-base leading-[28px] text-paragraph-font-color inline-block">
                <p className="m-0">Access our extensive database of NDIS-approved service providers, making it easy to find the care and support you need.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center py-8 px-6 box-border min-w-[288px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center gap-[24px] max-w-full">
            <div className="w-20 h-20 relative flex items-center justify-center">
              <img className="w-full h-full object-contain absolute left-[9px] top-[5px] [transform:scale(1.925)]" loading="lazy" alt="" src="/img/help4.svg" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[16px] max-w-full">
              <b className="relative leading-[28px] capitalize mq450:text-base mq450:leading-[22px]">Effortless Connectivity</b>
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-0 box-border max-w-full text-base text-paragraph-font-color">
                <div className="flex-1 relative tracking-[-0.08px] leading-[28px] inline-block max-w-full">
                  Easily connect with NDIS-approved service providers without any additional costs or fees, ensuring a hassle-free experience from start to finish. Instead of Seamless connections
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center py-8 px-6 box-border min-w-[288px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
            <div className="w-20 h-20 relative flex items-center justify-center">
              <img className="w-full h-full object-contain absolute left-[9px] top-[5px] [transform:scale(1.925)]" loading="lazy" alt="" src="/img/help5.svg" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
              <b className="relative leading-[28px] capitalize mq450:text-base mq450:leading-[22px]">Empowerment and Support</b>
              <div className="self-stretch relative text-base leading-[28px] text-paragraph-font-color">
                We're here to empower you every step of the way, offering resources, guidance, and a supportive community to help you navigate your care journey with confidence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutContent3.propTypes = {
  className: PropTypes.string,
};

export default AboutContent3;
