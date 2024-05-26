import Link from 'next/link';

const NavigationBar = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-10 px-[120px] pb-0 mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[60px] mq725:pr-[60px] mq725:box-border">
    <div className="self-stretch flex flex-row items-center justify-start">
      <div className="flex flex-row items-center justify-center gap-[8px]">
        <div className="relative leading-[24px] inline-block min-w-[44px]">
            <Link href="/">
            <div className="relative font-medium inline-block whitespace-nowrap">Home</div>
            </Link>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
            loading="lazy"
            alt=""
            src="/img/MidArrow.png"
          />
          <div className="relative leading-6 font-medium inline-block min-w-[69px]">
            About Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
