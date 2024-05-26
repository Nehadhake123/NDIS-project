const ArticleInfo = () => {
    return (
      <div className="w-[412px] flex flex-row items-center justify-start gap-[24px] max-w-full mq450:flex-wrap">
        <div className="flex-1 flex flex-row items-center justify-start gap-[7px] min-w-[84px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/img/contact.svg"
          />
          <div className="relative leading-[24px] inline-block min-w-[99px]">
            Eleyas Hasan
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[79px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/img/calender.svg"
          />
          <div className="relative leading-[24px] inline-block min-w-[90px]">
            2 April ,2024
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/img/watch.svg"
          />
          <div className="relative leading-[24px] inline-block min-w-[82px]">
            5 Min Read
          </div>
        </div>
      </div>
    );
  };
  
  export default ArticleInfo;
  