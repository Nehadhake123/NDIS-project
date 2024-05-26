
const RegisterContent = () => {
    return (
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-center text-[56px] text-white font-manrope">
    <div className="self-stretch flex flex-col items-center justify-start pt-[105px] pb-[104px] pr-5 pl-[21px] box-border relative gap-[24px] max-w-full mq450:pt-[68px] mq450:pb-[68px] mq450:box-border">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/img/home2.png"
      />
      <div className="w-[903px] hidden max-w-full z-[1]" />
      <h1 className="m-0 w-[903px] relative text-inherit leading-[64px] font-bold font-inherit inline-block max-w-full z-[2] mq450:text-[34px] mq450:leading-[38px] mq1050:text-[45px] mq1050:leading-[51px]">
      <p className="m-0"> Register Account</p>
      </h1>
      <div className="w-[903px] flex flex-row items-start justify-center max-w-full text-[20px]">
      <div className="w-[637px] relative leading-[36px] font-medium inline-block shrink-0 max-w-full z-[2] mq450:text-base mq450:leading-[29px]">
            At Providers for NDIS, we offer flexible plans tailored to meet the
            diverse needs of our users.
          </div>
      </div>
    </div>
  </div>
    );
  };
  
  export default RegisterContent;
  