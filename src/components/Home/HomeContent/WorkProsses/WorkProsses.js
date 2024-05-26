import ProcessColumns from "./ProcessColoumns";

const Process = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center py-[100px] px-5 box-border gap-[56px] max-w-full text-center text-29xl text-taittle-color font-manrope mq825:gap-[28px]">
      <h1 className="m-0 w-[434px] relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[34px] mq825:text-19xl mq825:leading-[45px]">
        Our Works Prosses
      </h1>
      <div className="w-[1200px] flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full text-left text-xl">
        <ProcessColumns
          group486="/img/grp1.svg"
          weFindOutWhatYouNeed="We find out what you need"
        />
        <ProcessColumns
          group486="/img/grp2.svg"
          weFindOutWhatYouNeed="We connect you with providers"
        />
        <ProcessColumns
          group486="/img/grp3.svg"
          weFindOutWhatYouNeed="Providers contact you directly"
        />
      </div>
    </section>
  );
};

export default Process;
