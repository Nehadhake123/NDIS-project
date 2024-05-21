const Testimonial = () => {
    return (
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[69px] pb-[100px] box-border max-w-full text-center text-29xl text-primery-color font-manrope mq825:pl-[34px] mq825:pr-[34px] mq825:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full mq825:gap-[28px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[846px] relative text-inherit leading-[56px] font-bold font-inherit flex items-center shrink-0 max-w-full mq450:text-10xl mq450:leading-[34px] mq825:text-19xl mq825:leading-[45px]">
                <span className="w-full">
                  <span className="text-taittle-color">See What People</span>
                  <span>{` `}</span>
                  <span>
                    <span className="uppercase">say</span>
                  </span>
                  <span className="text-taittle-color"> About</span>
                </span>
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-lg text-paragraph-font-color lg:flex-wrap lg:justify-center">
              <div className="h-[72px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(2.328)]"
                    loading="lazy"
                    alt=""
                    src="/img/LeftSlider.svg"
                  />
                </div>
              </div>
              <div className="w-[932px] relative leading-[32px] inline-block shrink-0 max-w-full">
                “I’m very grateful for Clickability. Every time I’ve spoken to
                their team, they’ve been extremely helpful, patient and have
                brought a lot of clarity to any situation.”
              </div>
              <div className="h-[72px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                <div className="w-16 h-16 relative flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(2.328)]"
                    alt=""
                    src="/img/RightSlider.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-xl text-taittle-color">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-semibold mq450:text-base">
                  Eleyas Hasan Shirsho
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[34px] pl-[30px] text-sm text-paragraph-font-color">
                  <div className="relative leading-[19.2px]">
                    Support Coordinator
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-16">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <div className="h-[9.7px] w-[9.7px] relative rounded-[50%] bg-whitesmoke" />
                  <div className="h-2.5 w-6 relative rounded-9xl bg-primery-color" />
                  <div className="h-[9.7px] w-[9.7px] relative rounded-[50%] bg-whitesmoke" />
                  <div className="h-[9.7px] w-[9.7px] relative rounded-[50%] bg-whitesmoke" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonial;
  