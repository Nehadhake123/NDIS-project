import Image from 'next/image';

const Header = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-10 px-[120px] pb-0 mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[60px] mq725:pr-[60px] mq725:box-border">
    <div className="self-stretch flex flex-row items-center justify-start">
      <div className="flex flex-row items-center justify-center gap-[8px]">
          <button className="cursor-pointer [border:none] py-3 px-4 bg-primery-color rounded-24xl flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <Image className="h-8 w-8 relative" alt="NDIS Registered" src="/img/head1.svg" width={32} height={32} />
              <div className="relative text-lg leading-[24px] font-semibold font-manrope text-white text-left">
                NDIS Registered
              </div>
            </div>
          </button>
          <div className="rounded-24xl bg-primery-color flex flex-col items-center justify-center py-3 px-4">
            <div className="flex flex-row items-center justify-start gap-[11px]">
              <Image className="h-8 w-8 relative" loading="lazy" alt="Verified" src="/img/head2.svg" width={32} height={32} />
              <div className="relative leading-[24px] font-semibold inline-block min-w-[68px]">
                Verified
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-4 bg-primery-color rounded-24xl flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <Image className="h-8 w-8 relative" alt="Responsive" src="/img/head3.svg" width={32} height={32} />
              <div className="relative text-lg leading-[24px] font-semibold font-manrope text-white text-left inline-block min-w-[102px]">
                Responsive
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-3 px-4 bg-primery-color rounded-24xl flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <Image className="h-8 w-8 relative" alt="Customer Care" src="/img/head4.svg" width={32} height={32} />
              <div className="relative text-lg leading-[24px] font-semibold font-manrope text-white text-left">
                Customer Care
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
