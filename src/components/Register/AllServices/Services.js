import PropTypes from "prop-types";
const Services = ({ className = "" }) => {
    return (
        <div
            className={`flex-1 flex flex-col items-start justify-center min-w-[159px] max-w-[162px] text-left text-base text-taittle-color font-manrope ${className}`}
        >
            <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-center">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <img
                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src="/img/loc2.svg"
                            />
                            <div className="flex-1 relative leading-[20px]">Albury</div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <img
                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/img/loc2.svg"
                            />
                            <div className="flex-1 relative leading-[20px]">Bathurst</div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <img
                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/img/loc2.svg"
                            />
                            <div className="flex-1 relative leading-[20px] capitalize">
                                Central Coast
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <img
                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/img/loc2.svg"
                            />
                            <div className="flex-1 relative leading-[20px] capitalize">
                                Coffs Harbour
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <img
                                className="h-6 w-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/img/loc2.svg"
                            />
                            <div className="flex-1 relative leading-[20px] capitalize">
                                Dubbo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Services.propTypes = {
    className: PropTypes.string,
};

export default Services;
