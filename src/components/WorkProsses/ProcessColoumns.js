const ProcessColumns = ({ group486, weFindOutWhatYouNeed }) => {
    return (
      <div className="flex-1 shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center py-8 px-6 box-border min-w-[288px] max-w-full text-left text-xl text-taittle-color font-manrope">
        <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
          <div className="w-20 h-20 relative flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[9px] top-[5px] [transform:scale(1.925)]"
              loading="lazy"
              alt=""
              src={group486}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <b className="relative leading-[28px] capitalize mq450:text-base mq450:leading-[22px]">
              {weFindOutWhatYouNeed}
            </b>
            <div className="self-stretch relative text-base leading-[28px] text-paragraph-font-color">
              We need details about the person who needs support: their
              disability, location and preferences.
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProcessColumns;
  