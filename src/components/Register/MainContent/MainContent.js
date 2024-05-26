import Link from "next/link";
import PropTypes from "prop-types";

const MainContent = ({ className = "" }) => {
    return (
        <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
            <section className="self-stretch flex flex-col items-center justify-start pt-[105px] pb-[104px] pr-5 pl-[21px] box-border relative gap-[24px] max-w-full text-center text-[50px] text-white font-manrope mq450:pt-[68px] mq450:pb-[68px] mq450:box-border">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-21xl text-taittle-color">
                    <div className="w-[1200px] flex flex-col items-center justify-start max-w-full mq750:gap-[24px]">
                        <div className="self-stretch flex flex-col items-end justify-start gap-[48px] max-w-full mq750:gap-[24px]">
                            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                                <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit mq450:text-5xl mq450:leading-[34px] mq1050:text-13xl mq1050:leading-[45px]">
                                    Languages
                                </h1>
                                <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-primery-color inline-block min-w-[121px] mq450:text-lgi mq450:leading-[26px]">
                                    Step 4 of 6
                                </h3>
                            </div>

                            <div className="flex flex-col items-center justify-start gap-[48px] max-w-full mq750:gap-[24px]">
                                <div className="w-[1198px] overflow-x-auto flex flex-col items-center justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
                                    <div className="w-[1198px] flex flex-col items-start justify-center text-center text-xl">
                                        <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                                            <div className="self-stretch rounded-2xl bg-floralwhite overflow-hidden flex flex-col items-start justify-start p-8 box-border max-w-full">
                                                <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                                                    <div className="w-[1134px] overflow-x-auto flex flex-row items-center justify-start py-0 pr-[136px] pl-0 box-border gap-[30px] max-w-full">
                                                        <button className="cursor-pointer [border:none] py-[15px] px-10 bg-primery-color rounded-23xl flex flex-row items-center justify-center hover:bg-chocolate">
                                                            <div className="relative text-xl leading-[26px] font-medium font-manrope text-white text-left inline-block min-w-[69px] mq450:text-base mq450:leading-[21px]">
                                                                English
                                                            </div>
                                                        </button>
                                                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                                                            <div className="w-11 relative leading-[26px] font-medium inline-block min-w-[44px] mq450:text-base mq450:leading-[21px]">
                                                                Arab
                                                            </div>
                                                        </div>
                                                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                                                            <div className="relative leading-[24px] font-medium inline-block min-w-[90px] mq450:text-base mq450:leading-[19px]">
                                                                Chienese
                                                            </div>
                                                        </div>
                                                        <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                                                            <div className="relative leading-[24px] font-medium inline-block min-w-[48px] mq450:text-base mq450:leading-[19px]">
                                                                Hindi
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[1198px] flex flex-col items-start justify-center gap-[48px]">
                                        <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit mq450:text-5xl mq450:leading-[34px] mq1050:text-13xl mq1050:leading-[45px]">
                                            Specializations
                                        </h1>
                                        <div className="self-stretch flex flex-col items-start justify-center text-center text-xl">
                                            <div className="self-stretch flex flex-col items-center justify-start">
                                                <div className="self-stretch rounded-2xl bg-floralwhite overflow-hidden flex flex-col items-start justify-start p-8">
                                                    <div className="self-stretch flex flex-col items-center justify-start">
                                                        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[813px] pl-0 gap-[30px] lg:flex-wrap">
                                                            <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10">
                                                                <div className="relative leading-[26px] font-medium inline-block min-w-[51px] mq450:text-base mq450:leading-[21px]">
                                                                    CALD
                                                                </div>
                                                            </div>
                                                            <button className="cursor-pointer [border:none] py-[15px] px-10 bg-primery-color rounded-23xl flex flex-row items-center justify-center hover:bg-chocolate">
                                                                <div className="relative text-xl leading-[26px] font-medium font-manrope text-white text-left inline-block min-w-[80px] mq450:text-base mq450:leading-[21px]">
                                                                    LGBTIQ+
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-[1198px] flex flex-col items-start justify-center gap-[48px]">
                                        <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit mq450:text-5xl mq450:leading-[34px] mq1050:text-13xl mq1050:leading-[45px]">
                                            Access Methods
                                        </h1>
                                        <div className="self-stretch flex flex-col items-start justify-center max-w-full text-center text-xl">
                                            <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                                                <div className="self-stretch rounded-2xl bg-floralwhite overflow-hidden flex flex-col items-start justify-start p-8 box-border max-w-full">
                                                    <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                                                        <div className="w-[1134px] overflow-x-auto flex flex-row items-center justify-start py-0 pr-[487px] pl-0 box-border gap-[30px] max-w-full">
                                                            <button className="cursor-pointer [border:none] py-[15px] px-10 bg-primery-color rounded-23xl flex flex-row items-center justify-center hover:bg-chocolate">
                                                                <div className="relative text-xl leading-[26px] font-medium font-manrope text-white text-left inline-block min-w-[58px] mq450:text-base mq450:leading-[21px]">
                                                                    Group
                                                                </div>
                                                            </button>
                                                            <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10 whitespace-nowrap">
                                                                <div className="relative leading-[26px] font-medium">
                                                                    We come to you
                                                                </div>
                                                            </div>
                                                            <div className="rounded-23xl bg-white flex flex-row items-center justify-center py-[15px] px-10 whitespace-nowrap">
                                                                <div className="w-[141px] relative leading-[24px] font-medium inline-block">
                                                                    You come to us
                                                                </div>
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
                            <Link href="/register/sign-up/welcome/services">
                                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-primery-color text-left inline-block min-w-[42px]">Back               
                                </div>
                                </Link>
                            </button>
                                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                                        <div className="rounded-[26px] bg-primery-color flex flex-row items-center justify-center py-[13px] px-14 gap-[6px] whitespace-nowrap">
                                            <div className="relative leading-[24px] inline-block min-w-[44px]">
                                                <Link href="/register/sign-up/welcome/services/main-content/plans">
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

MainContent.propTypes = {
    className: PropTypes.string,
};

export default MainContent;
