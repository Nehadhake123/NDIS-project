import PropTypes from "prop-types";

const ProviderCard = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-lg rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center py-4 px-4 box-border min-w-[250px] max-w-full text-left text-5xl text-title-color font-manrope ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-center relative gap-6">
        <img
          className="self-stretch h-[198px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
          alt="Service"
          src="/img/twoGirls.png"
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-4">
          <h3 className="m-0 self-stretch relative text-inherit leading-8 font-semibold mq450:text-lgi mq450:leading-6">
            My Choice Support Care
          </h3>
          <div className="self-stretch flex flex-col items-start justify-center gap-6 text-base text-paragraph-font-color">
            <div className="self-stretch relative leading-7">
              My Choice Support Care has highly trained and compassionate
              professionals dedicated to providing the highest quality of care and support to our clients.
            </div>
            <button className="cursor-pointer border-none py-4 px-12 bg-orange rounded-lg flex flex-row items-center justify-center gap-2.5 whitespace-nowrap hover:bg-chocolate mq450:pl-5 mq450:pr-5">
              <div className="relative text-lg leading-6 font-medium text-white">
                Convert With this provider
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt="Arrow"
                src="/img/leftA.svg"
              />
            </button>
          </div>
        </div>
        <div className="absolute top-38 left-46 rounded-11xl bg-white flex flex-col items-center justify-center py-2 px-4 z-10 text-base text-orange">
          <div className="flex flex-row items-center justify-center gap-1.5">
            <div className="flex flex-row items-center justify-start gap-1">
              <div className="relative leading-5 font-medium inline-block min-w-[24px]">
                5.0
              </div>
              <div className="flex flex-row items-center justify-center w-4 h-4">
                <img
                  className="h-4 w-4 relative rounded-12xs-5"
                  alt="Star"
                  src="/img/start.svg"
                />
              </div>
            </div>
            <div className="relative text-sm leading-4 font-inter text-title-color inline-block min-w-[75px]">
              10 Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProviderCard.propTypes = {
  className: PropTypes.string,
};

export default ProviderCard;
