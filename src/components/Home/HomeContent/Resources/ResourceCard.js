const ResourceCard = () => {
    return (
      <div className="shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center pt-6 px-6 pb-8 box-border max-w-full text-left text-xl text-taittle-color font-manrope mq750:pt-5 mq750:pb-[21px] mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
          <img
            className="self-stretch h-[198px] relative rounded-md max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/img/girls.png"
          />
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <div className="self-stretch relative leading-[32px] font-semibold mq450:text-base mq450:leading-[26px]">
              Spinal Cord Injury and Short Term Accommodation (STA)
            </div>
            <div className="self-stretch relative text-base leading-[28px] text-paragraph-font-color">
              XERO software creates invoices in the correct format for Plan Managers and the NDIS to pay quickly.
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px] text-lg">
              <div className="relative leading-[24px] font-medium inline-block min-w-[99px] whitespace-nowrap">
                Learn More
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/img/LeftArrow1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResourceCard;
  