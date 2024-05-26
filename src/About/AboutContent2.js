import PropTypes from 'prop-types';

const AboutContent2 = ({ className = '' }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[100px] box-border max-w-full text-left text-21xl text-taittle-color font-manrope mq450:pb-[42px] mq450:box-border mq975:pb-[65px] mq975:box-border ${className}`}
    >
      <div className="flex-1 bg-background-color flex flex-col items-center justify-end py-[100px] px-5 box-border max-w-full mq975:pt-[65px] mq975:pb-[65px] mq975:box-border">
        <div className="w-[1200px] flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
          <div className="flex-1 flex flex-col items-center justify-start gap-[32px] min-w-[382px] max-w-full mq450:min-w-full mq725:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h1 className="m-0 w-[568px] relative text-inherit leading-[48px] capitalize font-bold font-inherit flex items-center max-w-full mq450:text-5xl mq450:leading-[29px] mq975:text-13xl mq975:leading-[38px]">
                Our story
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-paragraph-font-color">
                <div className="self-stretch relative leading-[28px]">
                  In 2024, two individuals, an IT enthusiast and an SEO
                  marketer, joined forces to create Providers for NDIS.
                  Combining technical expertise with marketing prowess, they
                  launched a user-friendly directory platform, revolutionizing
                  access to NDIS providers in Australia. Today, their shared
                  vision continues to empower individuals with disabilities,
                  offering a comprehensive solution driven by choice, quality,
                  and empowerment.
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-[278px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/img/help1.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[32px] min-w-[382px] max-w-full mq450:min-w-full mq725:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h1 className="m-0 w-[568px] relative text-inherit leading-[48px] capitalize font-bold font-inherit flex items-center max-w-full mq450:text-5xl mq450:leading-[29px] mq975:text-13xl mq975:leading-[38px]">
                Our mission
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-paragraph-font-color">
                <div className="self-stretch h-[168px] relative leading-[28px] inline-block">
                  <p className="m-0">
                    Our mission is simple: to facilitate seamless connections
                    between providers and participants, all without the burden
                    of additional costs such as pay-per-leads and success fees.
                    At Providers for NDIS, we're dedicated to fostering a
                    platform where accessibility and connection thrive,
                    empowering both providers and participants alike without any
                    financial barriers.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-[278px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/img/help2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutContent2.propTypes = {
  className: PropTypes.string,
};

export default AboutContent2;
