import ResourceCard from "./ResourceCard";

const Resources = () => {
  return (
    <section className="self-stretch bg-white flex flex-col items-center justify-center py-[100px] px-5 box-border gap-[56px] max-w-full shrink-0 z-[1] text-center text-29xl text-taittle-color font-manrope mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq750:gap-[28px] mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border">
      <h1 className="m-0 w-[876px] relative text-inherit leading-[56px] font-bold font-inherit flex items-center justify-center max-w-full mq450:text-10xl mq450:leading-[34px] mq1050:text-19xl mq1050:leading-[45px]">
        Information And Resources
      </h1>
      <div className="w-[1200px] grid flex-row items-center justify-center gap-[24px] max-w-full grid-cols-[repeat(3,_minmax(288px,_1fr))] text-left text-xl mq750:grid-cols-[minmax(288px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(288px,_499px))]">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
        <div className="rounded-23xl bg-primery-color flex flex-row items-center justify-center py-[15px] px-8 gap-[7px] whitespace-nowrap">
          <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[91px]">
            View More
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/img/LeftArrow.svg"
          />
        </div>
      </button>
    </section>
  );
};

export default Resources;
