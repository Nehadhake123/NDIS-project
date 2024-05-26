import Link from "next/link";
import PropTypes from "prop-types";

const ProfileImages = ({ className = "", profileImage }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-[24px] max-w-full text-left text-base text-paragraph-font-color font-manrope ${className}`}
    >
      <img
        className="self-stretch h-[339px] relative rounded-2xl max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={profileImage}
      />
      <div className="self-stretch flex flex-col items-start justify-center gap-[40px] max-w-full mq450:gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center gap-[24px] max-w-full">
            <div className="w-[412px] flex flex-row items-center justify-start gap-[24px] max-w-full mq450:flex-wrap">
              <div className="flex-1 flex flex-row items-center justify-start gap-[7px] min-w-[84px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/img/contact.svg" // Updated image path
                />
                <div className="relative leading-[24px] inline-block min-w-[99px]">
                  Eleyas Hasan
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[79px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/img/calender.svg" // Updated image path
                />
                <div className="relative leading-[24px] inline-block min-w-[90px]">
                  2 April ,2024
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/img/watch.svg" // Updated image path
                />
                <div className="relative leading-[24px] inline-block min-w-[82px]">
                  5 Min Read
                </div>
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-13xl leading-[40px] capitalize font-semibold font-inherit text-taittle-color mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
              Increased Social And Community Participation
            </h1>
          </div>
          <div className="self-stretch relative leading-[28px]">
            Nancy boy Charles down the pub get stuffed mate easy peasy brown
            bread car boot squiffy loo, blimey arse over tit it’s your round cup
            of char horse play chimney pot old.....
          </div>
        </div>
       <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
            <div className="rounded-23xl bg-primery-color flex flex-row items-center justify-center py-[15px] px-8 gap-[6px] whitespace-nowrap">
            <div className="relative leading-[24px] inline-block min-w-[44px]">
            <Link href="/blogs/blog-details">
            <div className="relative font-semibold font-manrope text-white text-left inline-block whitespace-nowrap">Read More</div>
            </Link>
          </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/img/upArrow.svg" // Updated image path
              />
            </div>
          </button>
       

      </div>
    </div>
  );
};

ProfileImages.propTypes = {
  className: PropTypes.string,
  profileImage: PropTypes.string,
};

export default ProfileImages;
