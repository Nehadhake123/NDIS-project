import Link from "next/link";

const NavBar = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]">
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
          <div className="relative leading-[24px] inline-block min-w-[44px]">
            <Link href="/provider/provider-list">
            <div className="relative font-medium inline-block whitespace-nowrap">Provider list</div>
            </Link>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
            loading="lazy"
            alt=""
            src="/img/MidArrow.png"
          />
          <div className="relative leading-[24px] inline-block min-w-[44px]">
            <div className="relative font-medium inline-block whitespace-nowrap">Provider-details</div>
          </div>
        </div>
      </div>
    </div>
      <div className="w-[312px] flex flex-row items-center justify-center gap-[32px] text-xl text-primery-color mq450:gap-[16px]">
        <Rating />
        <Share />
      </div>
    </div>
  );
};

const MenuItem = ({ href, label, icon, minWidth }) => (
  <Link href={href}>
    <span className={`flex flex-row items-center gap-[7.8px]relative font-medium inline-block [${minWidth}] whitespace-nowrap`}>
      <span>{label}</span>
      {icon && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
          alt={`${label} icon`}
          src={icon}
        />
      )}
    </span>
  </Link>
);

const Rating = () => (
  <div className="flex flex-row items-center justify-start py-0 px-5 gap-[7px]">
    <div className="flex flex-row items-center justify-start gap-[3px]">
      <div className="relative leading-[24px] font-semibold inline-block min-w-[31px] whitespace-nowrap">
        5.0
      </div>
      <div className="flex flex-row items-center justify-center w-5 h-5">
        <img
          className="h-5 w-5 relative rounded-12xs-5"
          alt="Star icon"
          src="/img/start.svg"
        />
      </div>
    </div>
    <div className="relative leading-[20px] font-inter text-taittle-color whitespace-nowrap">
      120+ Reviews
    </div>
  </div>
);

const Share = () => (
  <div className="flex flex-row items-center justify-start py-0 px-5 gap-[8px] text-taittle-color font-inter">
    <img
      className="h-6 w-6 relative overflow-hidden shrink-0 object-contain"
      alt="Share icon"
      src="/img/share.svg"
    />
    <div className="relative leading-[20px] inline-block min-w-[55px] whitespace-nowrap">
      Share
    </div>
  </div>
);

export default NavBar;
