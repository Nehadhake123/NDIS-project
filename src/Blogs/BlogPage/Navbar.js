import Link from 'next/link';

const NavBar = () => {
  return (
    <section
    className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border gap-[56px] max-w-full text-left text-base text-paragraph-font-color font-manrope mq750:gap-[28px] mq750:pb-[34px] mq750:box-border mq1100:pb-[52px] mq1100:box-border `}>
    <div className="self-stretch flex flex-col items-start justify-start pt-14 px-[120px] pb-0 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[60px] mq750:pr-[60px] mq750:box-border">
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="w-[129px] flex flex-row items-center justify-center gap-[8px]">
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
           
            <div className="relative font-medium inline-block whitespace-nowrap">Blogs</div>
           
          </div>
        </div>
      </div>
   </section>
  );
};

export default NavBar;
