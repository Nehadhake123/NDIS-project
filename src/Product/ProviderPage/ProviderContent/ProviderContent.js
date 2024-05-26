import PropTypes from 'prop-types';

const ProviderContent = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-[108px] pb-[109px] pr-5 pl-[21px] box-border relative max-w-full text-center text-37xl text-white font-manrope mq450:pt-[70px] mq450:pb-[71px] mq450:box-border ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt="Background"
        src="/img/home2.png"
      />
      <div className="w-[903px] flex flex-col items-center justify-start max-w-full z-[1] mq450:gap-[16px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[32px] mq450:gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-bold font-inherit whitespace-nowrap">
            My Choice Support Care
          </h1>
          <div className="flex flex-row items-center justify-center text-left text-lg">
            <div className="rounded-23xl bg-primery-color flex flex-row items-center justify-center py-[15px] px-6 gap-[10px] whitespace-nowrap">
              <div className="relative leading-[26px]">
                <span className="font-semibold">Contact </span>
                <span className="font-medium">Provider</span>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt="Arrow"
                src="/img/upArrow.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

ProviderContent.propTypes = {
  className: PropTypes.string,
};

export default ProviderContent;
