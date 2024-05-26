import Link from "next/link";
import SectionContent from "./SectionContent";
import PropTypes from "prop-types";


const ServiceSelection = ({ className = "" }) => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-start pt-[105px] pb-[104px] pr-5 pl-[21px] box-border relative gap-[24px] max-w-full text-center text-[56px] text-white font-manrope mq450:pt-[68px] mq450:pb-[68px] mq450:box-border">
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-taittle-color font-manrope ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-center justify-start max-w-full mq750:gap-[24px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[48px] max-w-full mq750:gap-[24px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq750:flex-wrap">
          <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[34px] mq1050:text-13xl mq1050:leading-[45px]">
              Services You Provide
            </h1>
            <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-primery-color inline-block min-w-[121px] mq450:text-lgi mq450:leading-[26px]">
              Step 3 of 6
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[48px] max-w-full mq750:gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
              <div className="self-stretch flex flex-col items-center justify-start text-base mq750:gap-[24px]">
                <div className="self-stretch rounded-2xl bg-floralwhite overflow-hidden flex flex-row flex-wrap items-start justify-start p-8 box-border gap-[32px_52.7px] min-h-[468px] mq750:gap-[26px]">
                  <SectionContent
                    group471="/img/se1.svg"
                    nursingServices="Nursing Services"
                    arrowUpRightMD1="/img/LeftArrow1.svg"
                  />
                  <SectionContent
                    group471="/img/se2.svg"
                    nursingServices="Housing"
                    arrowUpRightMD1="/img/LeftArrow.svg"
                    propBackgroundColor="#ffa32b"
                    propBorder="unset"
                    propWidth="162px"
                    propAlignSelf="unset"
                    propColor="#fff"
                    propColor1="#fff"
                    propColor2="#fff"
                  />
                  <SectionContent
                    group471="/img/se3.svg"
                    nursingServices="Respite Accommodation"
                    arrowUpRightMD1="/img/LeftArrow1.svg"
                    propBackgroundColor="#fff"
                    propBorder="1px solid rgba(255, 163, 43, 0.2)"
                    propWidth="unset"
                    propAlignSelf="stretch"
                    propColor="#142653"
                    propColor1="#4f5b78"
                    propColor2="#ffa32b"
                  />
                  <SectionContent
                    group471="/img/se4.svg"
                    nursingServices="Respite Accommodation"
                    arrowUpRightMD1="/img/LeftArrow1.svg"
                    propBackgroundColor="#fff"
                    propBorder="1px solid rgba(255, 163, 43, 0.2)"
                    propWidth="unset"
                    propAlignSelf="stretch"
                    propColor="#142653"
                    propColor1="#4f5b78"
                    propColor2="#ffa32b"
                  />
                  <SectionContent
                    group471="/img/se5.svg"
                    nursingServices="Housing"
                    arrowUpRightMD1="/img/LeftArrow1.svg"
                    propBackgroundColor="#fff"
                    propBorder="1px solid rgba(255, 163, 43, 0.2)"
                    propWidth="162px"
                    propAlignSelf="unset"
                    propColor="#142653"
                    propColor1="#4f5b78"
                    propColor2="#ffa32b"
                  />
                  <SectionContent
                    group471="/img/se6.svg"
                    nursingServices="Nursing Services"
                    arrowUpRightMD1="/img/LeftArrow1.svg"
                    propBackgroundColor="#fff"
                    propBorder="1px solid rgba(255, 163, 43, 0.2)"
                    propWidth="162px"
                    propAlignSelf="unset"
                    propColor="#142653"
                    propColor1="#4f5b78"
                    propColor2="#ffa32b"
                  />
                  <SectionContent
                    group471="/img/se6.svg"
                    nursingServices="Respite Accommodation"
                    arrowUpRightMD1="/img/LeftArrow1.svg"
                    propBackgroundColor="#fff"
                    propBorder="1px solid rgba(255, 163, 43, 0.2)"
                    propWidth="unset"
                    propAlignSelf="stretch"
                    propColor="#142653"
                    propColor1="#4f5b78"
                    propColor2="#ffa32b"
                  />
                  <SectionContent
                    group471="/img/se7.svg"
                    nursingServices="Respite Accommodation"
                    arrowUpRightMD1="/img/LeftArrow1.svg"
                    propBackgroundColor="#fff"
                    propBorder="1px solid rgba(255, 163, 43, 0.2)"
                    propWidth="unset"
                    propAlignSelf="stretch"
                    propColor="#142653"
                    propColor1="#4f5b78"
                    propColor2="#ffa32b"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[48px] max-w-full mq750:gap-[24px]">
                <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit mq450:text-5xl mq450:leading-[34px] mq1050:text-13xl mq1050:leading-[45px]">
                  Age Groups
                </h1>
                <div className="self-stretch flex flex-col items-center justify-start max-w-full text-base mq750:gap-[24px]">
                  <div className="self-stretch rounded-2xl bg-floralwhite overflow-hidden flex flex-col items-start justify-start p-8 box-border gap-[32px] max-w-full mq750:gap-[16px]">
                    <div className="w-[1134px] overflow-x-auto flex flex-row items-center justify-between gap-[20px] max-w-full">
                      <div className="w-[243px] rounded-md bg-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-center py-3.5 px-4 border-[1px] border-solid border-orange">
                        <div className="flex flex-row items-center justify-start gap-[7px]">
                          <img
                            className="h-8 w-8 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/img/age.svg"
                          />
                          <div className="flex flex-col items-start justify-start gap-[7px]">
                            <div className="relative leading-[24px] font-medium inline-block min-w-[118px]">
                              Early Childhood
                            </div>
                            <div className="relative text-xs leading-[16px] font-medium text-paragraph-font-color inline-block min-w-[52px]">
                              0-7 Years
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[243px] rounded-md bg-primery-color box-border overflow-hidden shrink-0 flex flex-col items-start justify-center py-3.5 px-4 text-white border-[1px] border-solid border-orange">
                        <div className="flex flex-row items-center justify-start gap-[7px]">
                          <img
                            className="h-8 w-8 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/img/age1.svg"
                          />
                          <div className="flex flex-col items-start justify-start gap-[7px]">
                            <div className="relative leading-[24px] font-medium inline-block min-w-[64px]">{`Children `}</div>
                            <div className="relative text-xs leading-[16px] font-medium inline-block min-w-[58px]">
                              8-16 Years
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[243px] rounded-md bg-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-center py-3.5 px-4 border-[1px] border-solid border-orange">
                        <div className="flex flex-row items-center justify-start gap-[7px]">
                          <img
                            className="h-8 w-8 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/img/age2.svg"
                          />
                          <div className="flex flex-col items-start justify-start gap-[7px]">
                            <div className="relative leading-[24px] font-medium inline-block min-w-[102px]">
                              Young people
                            </div>
                            <div className="relative text-xs leading-[16px] font-medium text-paragraph-font-color inline-block min-w-[62px]">
                              17-21 Years
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[243px] rounded-md bg-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-center py-3.5 px-4 border-[1px] border-solid border-orange">
                        <div className="flex flex-row items-center justify-start gap-[7px]">
                          <img
                            className="h-8 w-8 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/img/age3.svg"
                          />
                          <div className="flex flex-col items-start justify-start gap-[7px]">
                            <div className="relative leading-[24px] font-medium inline-block min-w-[49px]">
                              Adults
                            </div>
                            <div className="relative text-xs leading-[16px] font-medium text-paragraph-font-color inline-block min-w-[66px] whitespace-nowrap">
                              22-59 Years
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="w-[243px] flex flex-row items-center justify-start">
                        <div className="flex-1 rounded-md bg-white overflow-hidden flex flex-col items-start justify-center py-3.5 px-4 border-[1px] border-solid border-orange">
                          <div className="flex flex-row items-center justify-start gap-[7px]">
                            <img
                              className="h-8 w-8 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/img/age4.svg"
                            />
                            <div className="flex flex-col items-start justify-start gap-[7px]">
                              <div className="relative leading-[24px] font-medium inline-block min-w-[87px]">{`Mature Age `}</div>
                              <div className="relative text-xs leading-[16px] font-medium text-paragraph-font-color inline-block min-w-[55px]">
                                60+ Years
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[48px] max-w-full mq750:gap-[24px]">
                <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[34px] mq1050:text-13xl mq1050:leading-[45px]">
                  Disabilities type.
                </h1>
                <div className="self-stretch flex flex-col items-center justify-start text-center text-xl mq750:gap-[24px]">
                  <div className="self-stretch rounded-2xl bg-floralwhite overflow-hidden flex flex-col items-start justify-start p-8 mq750:gap-[16px]">
                    <div className="self-stretch flex flex-col items-center justify-start gap-[32px] mq750:gap-[16px]">
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] lg:flex-wrap lg:justify-center">
                        <button className="cursor-pointer [border:none] py-[15px] px-10 bg-primery-color rounded-23xl flex flex-row items-center justify-center hover:bg-chocolate">
                          <b className="relative text-xl leading-[26px] font-semibold font-manrope text-white text-left inline-block min-w-[68px] mq450:text-base mq450:leading-[21px]">
                            Autism
                          </b>
                        </button>
                        <button className="cursor-pointer [border:none] py-[15px] px-10 bg-white rounded-23xl flex flex-row items-center justify-center hover:bg-gainsboro">
                          <div className="w-[111px] relative text-xl leading-[26px] font-medium font-manrope text-taittle-color text-center inline-block min-w-[111px] mq450:text-base mq450:leading-[21px]">
                            Behavioural
                          </div>
                        </button>
                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[42px] mq450:text-base mq450:leading-[19px]">
                            ODD
                          </div>
                        </div>
                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10 whitespace-nowrap">
                          <div className="w-[166px] relative leading-[24px] font-medium inline-block">
                            Early Intervention
                          </div>
                        </div>
                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                          <div className="w-[55px] relative leading-[24px] font-medium inline-block min-w-[55px] mq450:text-base mq450:leading-[19px]">
                            ADHD
                          </div>
                        </div>
                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[62px] mq450:text-base mq450:leading-[19px]">
                            Stroke
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[410px] pl-0 gap-[30px] lg:flex-wrap lg:pr-[205px] lg:box-border mq450:pr-5 mq450:box-border mq750:gap-[15px] mq750:pr-[102px] mq750:box-border">
                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10 whitespace-nowrap">
                          <div className="w-[121px] relative leading-[26px] font-medium inline-block min-w-[121px]">
                            Hearing Loss
                          </div>
                        </div>
                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                          <div className="w-[107px] relative leading-[24px] font-medium inline-block min-w-[107px] mq450:text-base mq450:leading-[19px]">
                            Intellectual
                          </div>
                        </div>
                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                          <div className="w-[31px] relative leading-[24px] font-medium inline-block min-w-[31px] mq450:text-base mq450:leading-[19px]">
                            ABI
                          </div>
                        </div>
                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                          <div className="w-[55px] relative leading-[24px] font-medium inline-block min-w-[55px] mq450:text-base mq450:leading-[19px]">
                            ADHD
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-[40px] max-w-full mq450:flex-wrap mq450:gap-[20px]">
            <button className="cursor-pointer py-[13px] px-14 bg-white rounded-23xl flex flex-row items-center justify-center border-[1px] border-solid border-primery-color hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
                            <Link href="/register/sign-up/welcome">
                                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-primery-color text-left inline-block min-w-[42px]">Back               
                                </div>
                                </Link>
                            </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                <div className="rounded-[26px] bg-primery-color flex flex-row items-center justify-center py-[13px] px-14 gap-[6px] whitespace-nowrap">
                  <div className="relative leading-[24px] inline-block min-w-[44px]">
                    <Link href="/register/sign-up/welcome/services/main-content">
                      <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block whitespace-nowrap">Next</div>
                    </Link>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>

  );
};

ServiceSelection.propTypes = {
  className: PropTypes.string,
};

export default ServiceSelection;
