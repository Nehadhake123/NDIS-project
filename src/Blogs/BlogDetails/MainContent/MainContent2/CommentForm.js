import ActionButtons from "./ActionButtons";

const CommentForm = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[40px] max-w-full mq975:gap-[20px]">
      <div className="self-stretch flex flex-col items-start justify-center gap-[32px] max-w-full mq975:gap-[16px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[40px] capitalize font-semibold font-inherit mq450:text-lgi mq450:leading-[24px] mq975:text-7xl mq975:leading-[32px]">
          Comment Here
        </h1>
        <div className="self-stretch flex flex-col items-center justify-center gap-[24px] max-w-full text-base">
         
          <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[69px]">
              Message
            </div>
            <textarea
              className="bg-background-color h-[134px] w-auto [outline:none] self-stretch rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-4 font-manrope text-sm text-slategray border-[1px] border-solid border-orange"
              placeholder="Type message..."
              rows={7}
              cols={37}
            />
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3.5 px-8 bg-primery-color rounded-[43px] flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/img/tele.svg"
                  />
                  <div className="relative text-lg leading-[28px] font-semibold font-manrope text-white text-right">
                    Post Comment
                  </div>
                </div>
              </button>
    
    </div>
  );
};

export default CommentForm;
