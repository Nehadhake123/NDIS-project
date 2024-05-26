const AboutContent1 = () => {
    return (
      <section className="self-stretch bg-white flex flex-col items-center justify-center max-w-full text-left text-base text-taittle-color font-manrope">
        <div className="self-stretch flex flex-col items-center justify-start pt-14 px-5 pb-[100px] box-border min-h-[764px] max-w-full text-29xl mq450:pt-[23px] mq450:pb-[42px] mq450:box-border mq975:pt-9 mq975:pb-[65px] mq975:box-border">
          <div className="w-[1199px] flex flex-row items-center justify-start gap-[55px] max-w-full mq725:gap-[27px] mq1050:flex-wrap">
            <img
              className="w-[562px] relative max-h-full max-w-full mq1050:flex-1"
              loading="lazy"
              alt=""
              src="/img/mainGrp.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-center min-w-[378px] max-w-full mq450:min-w-full mq725:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <h1 className="m-0 w-[568px] relative text-inherit leading-[56px] capitalize font-bold font-inherit flex items-center max-w-full mq450:text-10xl mq450:leading-[34px] mq975:text-19xl mq975:leading-[45px]">
                  Who we Are?
                </h1>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-paragraph-font-color">
                  <div className="self-stretch relative leading-[28px]">{`Providers for NDIS is a premier directory platform committed to facilitating access to National Disability Insurance Scheme (NDIS) providers across Australia. We pride ourselves on being the go-to resource for individuals with disabilities and their families, offering a comprehensive database of trusted service providers. `}</div>
                  <div className="self-stretch relative leading-[28px]">
                    Our platform is designed with user-friendliness in mind,
                    providing detailed profiles and reviews to assist users in
                    making informed decisions about their care. Whether you're
                    seeking assistance with daily living, therapy, assistive
                    technology, or any other NDIS-approved services, we're here to
                    help you find the support you need.
                  </div>
                  <div className="self-stretch relative leading-[28px]">
                    At Providers for NDIS, we believe in the power of choice,
                    quality, and empowerment. We're dedicated to fostering a
                    community where individuals can access the services they
                    require to enhance their quality of life. By joining us, you
                    become part of a network committed to creating brighter
                    futures for all Australians living with disabilities under the
                    NDIS scheme.
                  </div>
                  <div className="self-stretch relative leading-[28px]">
                    Discover the possibilities with Providers for NDIS – where
                    choice, quality, and empowerment converge to transform lives.
                    Join our community today and unlock the support you deserve.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutContent1;
  