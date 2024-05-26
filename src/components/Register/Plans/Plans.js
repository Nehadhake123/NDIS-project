import Link from "next/link";
import PlansDetails from "./PlansDetails";
import PropTypes from "prop-types";

const Plans = ({ className = "" }) => {
    return (
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full lg:pb-[52px] lg:box-border mq750:pb-[34px] mq750:box-border">
            <div
                className={`w-[1200px] flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-21xl text-taittle-color font-manrope mq750:gap-[24px] ${className}`}
            >
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                    <h1 className="m-0 relative text-inherit leading-[56px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[34px] mq1050:text-13xl mq1050:leading-[45px]">
                        This is Monthly Plan
                    </h1>
                    <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 text-5xl text-primery-color">
                        <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit inline-block min-w-[121px] mq450:text-lgi mq450:leading-[26px]">
                            Step 5 of 6
                        </h3>
                    </div>
                   
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-center text-xl text-primery-color mq750:gap-[16px]">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                        <div className="shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-28xl bg-white overflow-hidden flex flex-col items-center justify-center py-3 px-[31px] border-[1px] border-solid border-primery-color">
                            <div className="flex flex-row items-center justify-center gap-[4px]">
                                <button className="cursor-pointer [border:none] py-1 px-5 bg-primery-color rounded-11xl flex flex-row items-center justify-center hover:bg-chocolate">
                                    <b className="relative text-xl leading-[28px] font-bold font-manrope text-white text-center inline-block min-w-[81px] mq450:text-base mq450:leading-[22px]">
                                        monthly
                                    </b>
                                </button>
                                <div className="rounded-11xl flex flex-row items-center justify-center py-1 px-5">
                                    <b className="relative leading-[28px] font-bold inline-block min-w-[59px] mq450:text-base mq450:leading-[22px]">
                                        Yearly
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1200px] overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-base text-taittle-color">
                        <div className="h-[884px] w-96 relative shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-2xl bg-white overflow-hidden shrink-0">
                            <div className="absolute top-[40px] left-[24px] w-[336px] flex flex-col items-center justify-start gap-[17.5px] text-center text-13xl">
                                <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
                                    <h1 className="m-0 self-stretch relative text-inherit leading-[40px] font-semibold font-inherit mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
                                        Standard Plan
                                    </h1>
                                    <div className="self-stretch relative text-base leading-[28px] font-medium text-paragraph-font-color">
                                        great for reaching local participants.
                                    </div>
                                </div>
                                <b className="self-stretch relative leading-[77px] font-bold text-primery-color text-37xl mq450:text-lgi mq450:leading-[51px]">
                                    <span>$99</span>
                                    <span className="text-5xl">/month</span>
                                </b>
                                <button className="cursor-pointer [border:none] py-3.5 px-5 bg-background-color self-stretch rounded-24xl flex flex-col items-center justify-center">
                                    <div className="flex flex-row items-center justify-center">
                                        <b className="relative text-lg tracking-[-0.21px] leading-[28px] font-semibold font-manrope text-primery-color text-center inline-block min-w-[102px] whitespace-nowrap">
                                            Get Started
                                        </b>
                                    </div>
                                </button>
                            </div>
                            <img
                                className="absolute top-[316px] left-[24px] w-6 h-6"
                                loading="lazy"
                                alt=""
                                src="/img/tic.svg"
                            />
                            <div className="absolute top-[316px] left-[60px] leading-[24px] font-medium hidden w-[264px]">
                                Coverage 30 suburbs
                            </div>
                            <img
                                className="absolute top-[356px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <img
                                className="absolute top-[372px] left-[24px] w-6 h-6"
                                alt=""
                                src="/img/tic.svg"
                            />
                            <div className="absolute top-[372px] left-[60px] leading-[24px] font-medium hidden w-[264px]">
                                Profile Listing
                            </div>
                            <img
                                className="absolute top-[412px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <div className="absolute top-[428px] left-[24px] w-[336px] flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    alt=""
                                    src="/img/tic.svg"
                                />
                                <div className="flex-1 relative leading-[24px] font-medium">
                                    Direct Messaging
                                </div>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    loading="lazy"
                                    alt=""
                                    src="/img/round.svg"
                                />
                            </div>
                            <img
                                className="absolute top-[468px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <div className="absolute top-[484px] left-[24px] w-[336px] flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    alt=""
                                    src="/img/tic.svg"
                                />
                                <div className="flex-1 relative leading-[24px] font-medium">
                                    Profile Customization
                                </div>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    alt=""
                                    src="/img/round.svg"
                                />
                            </div>
                            <img
                                className="absolute top-[524px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <div className="absolute top-[540px] left-[24px] w-[336px] flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    alt=""
                                    src="/img/tic.svg"
                                />
                                <div className="flex-1 relative leading-[24px] font-medium">
                                    Customer Support
                                </div>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    alt=""
                                    src="/img/round.svg"
                                />
                            </div>
                            <img
                                className="absolute top-[580px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <div className="absolute top-[596px] left-[24px] w-[336px] flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    alt=""
                                    src="/img/tic.svg"
                                />
                                <div className="flex-1 relative leading-[24px] font-medium">
                                    Picture Gallery
                                </div>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    alt=""
                                    src="/img/round.svg"
                                />
                            </div>
                            <img
                                className="absolute top-[636px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <div className="absolute top-[652px] left-[24px] w-[336px] flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    alt=""
                                    src="/img/tic.svg"
                                />
                                <div className="flex-1 relative leading-[24px] font-medium">
                                    SEO-Friendly Web Links
                                </div>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    alt=""
                                    src="/img/round.svg"
                                />
                            </div>
                            <img
                                className="absolute top-[692px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <div className="absolute top-[708px] left-[24px] w-[336px] flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    alt=""
                                    src="/img/tic.svg"
                                />
                                <div className="flex-1 relative leading-[24px] font-medium">
                                    Unlimited Service Listings
                                </div>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    alt=""
                                    src="/img/round.svg"
                                />
                            </div>
                            <img
                                className="absolute top-[748px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <div className="absolute top-[764px] left-[24px] w-[336px] flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    alt=""
                                    src="/img/tic.svg"
                                />
                                <div className="flex-1 relative leading-[24px] font-medium">
                                    Unlimited Leads
                                </div>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    alt=""
                                    src="/img/round.svg"
                                />
                            </div>
                            <img
                                className="absolute top-[804px] left-[24px] w-[336px] h-0"
                                alt=""
                                src="/line-13.svg"
                            />
                            <div className="absolute top-[820px] left-[24px] w-[336px] flex flex-row items-start justify-start gap-[12px]">
                                <img
                                    className="h-6 w-6 relative min-h-[24px]"
                                    alt=""
                                    src="/img/tic.svg"
                                />
                                <div className="flex-1 relative leading-[24px] font-medium">
                                    Receive Call Back Requests
                                </div>
                                <img
                                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                                    alt=""
                                    src="/img/round.svg"
                                />
                            </div>
                            <div className="absolute top-[316px] left-[18px] w-[342px] flex flex-row items-start justify-start gap-[3.5px] text-white">
                                <div className="h-[88px] flex-1 relative">
                                    <div className="absolute top-[0px] left-[0px] w-full h-full z-[1] flex items-center justify-center">
                                        <img
                                            className="w-full h-full z-[1] object-contain absolute left-[0px] top-[0px] [transform:scale(1.955)]"
                                            alt=""
                                            src="/img/union.svg"
                                        />
                                    </div>
                                    <p className="m-0 absolute top-[16px] left-[16px] leading-[28px] font-medium inline-block w-[259px] z-[2]">
                                        Reach participants across 30 suburbs of your choice.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start justify-start gap-[32px]">
                                    <img
                                        className="w-6 h-6 relative overflow-hidden shrink-0"
                                        alt=""
                                        src="/img/round.svg"
                                    />
                                    <img
                                        className="w-6 h-6 relative overflow-hidden shrink-0"
                                        alt=""
                                        src="/img/round.svg"
                                    />
                                </div>
                            </div>
                            <img
                                className="absolute top-[7364.8px] left-[15461.6px] w-0 h-0 object-cover"
                                alt=""
                                src="/group-484@2x.png"
                            />
                        </div>
                        <PlansDetails
                            mobilePlan="Mobile Plan "
                            everythingYouNeed="Everything you need to boost performance"
                            prop="$129"
                            month="/month"
                            everythingYouNeed1="Coverage one regions."
                        />
                        <PlansDetails
                            mobilePlan="Enterprise Plans"
                            everythingYouNeed="(Minimum 5 Locations Required)"
                            prop="$79"
                            month="/location/month"
                            everythingYouNeed1="30 suburbs per location"
                            propBorder="unset"
                            propBackgroundColor="#fffcf3"
                            propColor="#ffa32b"
                            propLetterSpacing="-0.21px"
                            propMinWidth="140px"
                        />
                    </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                    <div className="flex flex-col items-center justify-start max-w-full mq450:gap-[24px]">
                        <div className="flex flex-row items-center justify-center gap-[40px] mq450:flex-wrap mq450:gap-[20px]">
                            <button className="cursor-pointer py-[13px] px-14 bg-white rounded-23xl flex flex-row items-center justify-center border-[1px] border-solid border-primery-color hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate">
                            <Link href="/register/sign-up/welcome/services/main-content">
                                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-primery-color text-left inline-block min-w-[42px]">Back               
                                </div>
                                </Link>
                            </button>
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                                <div className="rounded-[26px] bg-primery-color flex flex-row items-center justify-center py-[13px] px-14 gap-[6px] whitespace-nowrap">
                                    <div className="relative leading-[24px] inline-block min-w-[44px]">
                                        <Link href="/register/sign-up/welcome/services/main-content/plans/all-services">
                                            <div className="relative text-lg leading-[26px] font-semibold font-manrope text-white text-left inline-block whitespace-nowrap">Next</div>
                                        </Link>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Plans.propTypes = {
    className: PropTypes.string,
};

export default Plans;
