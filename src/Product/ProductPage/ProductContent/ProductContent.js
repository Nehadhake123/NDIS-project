import PropTypes from 'prop-types';

const ProductContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-14 box-border max-w-full text-center text-37xl text-white font-manrope mq450:pb-9 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center pt-[76px] pb-[77px] pr-5 pl-[21px] box-border relative max-w-full mq450:pt-[49px] mq450:pb-[50px] mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/img/home2.png"
        />
        <div className="w-[903px] flex flex-col items-center justify-start gap-[32px] max-w-full z-[1] mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-center justify-center">
            <h1 className="m-0 self-stretch relative text-inherit leading-[64px] font-bold font-inherit mq450:text-15xl mq450:leading-[38px] mq1050:text-26xl mq1050:leading-[51px]">
              Save time. Let us help you connect with the right providers.
            </h1>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
            <div className="rounded-23xl bg-orange flex flex-row items-center justify-center py-[15px] px-6 gap-[6px] whitespace-nowrap">
              <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[105px]">
                Get Started
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/img/upArrow.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductContent.propTypes = {
  className: PropTypes.string,
};

export default ProductContent;
