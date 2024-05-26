import ProfilePictures from "./ProfilePictures";
import PostCardElements from "./PostCardElements";
import PropTypes from "prop-types";

const AuthorDetails = ({ className = "" }) => {
  return (
    <div
      className={`w-[1200px] flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-base text-paragraph-font-color font-manrope mq750:gap-[24px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-center gap-[56px] min-w-[515px] max-w-full mq450:gap-[28px] mq750:min-w-full">
          <ProfilePictures profileImage="/img/twoGirls1.png" />
          <ProfilePictures profileImage="/img/couple.png" />
          <ProfilePictures profileImage="/img/frds.png" />
        </div>
        <div className="w-96 flex flex-col items-start justify-start gap-[40px] min-w-[384px] max-w-full text-5xl text-taittle-color mq450:gap-[20px] mq450:min-w-full mq1050:flex-1">
          <div className="self-stretch h-40 relative shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden shrink-0">
            <div className="absolute top-[27px] left-[20px] box-border w-[1.5px] h-[27.5px] border-r-[1.5px] border-solid border-primery-color" />
            <div className="absolute top-[24px] left-[20px] w-[344px] flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-row items-start justify-start py-0 px-2">
                <h3 className="m-0 relative text-inherit leading-[32px] capitalize font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Search Here
                </h3>
              </div>
              <div className="self-stretch rounded-xl bg-background-color flex flex-row items-start justify-start py-[15px] px-4 border-[0.5px] border-solid border-orange">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <input
                    className="w-[105px] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0"
                    placeholder="Search here...."
                    type="text"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/img/search1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[500px] relative shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden shrink-0 mq450:h-auto mq450:min-h-[500]">
            <div className="absolute top-[27px] left-[20px] box-border w-[1.5px] h-[27.5px] border-r-[1.5px] border-solid border-primery-color" />
            <div className="absolute top-[24px] left-[20px] w-[344px] flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-row items-start justify-start py-0 px-[7px]">
                <h3 className="m-0 relative text-inherit leading-[32px] capitalize font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Our latest Post
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-paragraph-font-color">
                <PostCardElements postCardBackground="/img/box1.png" />
                <PostCardElements postCardBackground="/img/box2.png" />
                <PostCardElements postCardBackground="/img/box3.png" />
                <PostCardElements postCardBackground="/img/box4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[791.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-5xl text-taittle-color">
        <div className="w-[571px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
          <img
            className="h-14 w-14 relative object-contain min-h-[56px]"
            loading="lazy"
            alt=""
            src="/img/sliderLeft.png"
          />
          <div className="h-14 w-14 relative">
            <div className="absolute top-[57px] left-[56px] rounded-[50%] bg-white box-border w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0] border-[0px] border-solid border-whitesmoke" />
            <div className="absolute top-[16px] left-[23px] leading-[24px] font-semibold inline-block min-w-[11px] z-[1] mq450:text-lgi mq450:leading-[19px]">
              1
            </div>
          </div>
          <div className="h-14 w-14 relative text-white">
            <div className="absolute top-[56px] left-[56px] rounded-[50%] bg-primery-color w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0]" />
            <div className="absolute top-[16px] left-[21px] leading-[24px] font-semibold inline-block min-w-[15px] z-[1] mq450:text-lgi mq450:leading-[19px]">
              2
            </div>
          </div>
          <div className="h-14 w-14 relative">
            <div className="absolute top-[57px] left-[56px] rounded-[50%] bg-white box-border w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0] border-[0px] border-solid border-whitesmoke" />
            <div className="absolute top-[16px] left-[21px] leading-[24px] font-semibold inline-block min-w-[14px] z-[1] mq450:text-lgi mq450:leading-[19px]">
              3
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[26px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[3px]">
              <div className="h-1 w-1 relative rounded-[50%] bg-paragraph-font-color" />
              <div className="h-1 w-1 relative rounded-[50%] bg-paragraph-font-color" />
              <div className="h-1 w-1 relative rounded-[50%] bg-paragraph-font-color" />
            </div>
          </div>
          <div className="h-14 w-14 relative">
            <div className="absolute top-[57px] left-[56px] rounded-[50%] bg-white box-border w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0] border-[0px] border-solid border-whitesmoke" />
            <div className="absolute top-[16px] left-[21px] leading-[24px] font-semibold inline-block min-w-[16px] z-[1] mq450:text-lgi mq450:leading-[19px]">
              9
            </div>
          </div>
          <div className="h-14 w-14 relative">
            <div className="absolute top-[57px] left-[56px] rounded-[50%] bg-white box-border w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0] border-[0px] border-solid border-whitesmoke" />
            <div className="absolute top-[16px] left-[15px] leading-[24px] font-semibold inline-block min-w-[26px] z-[1] mq450:text-lgi mq450:leading-[19px]">
              10
            </div>
          </div>
          <img
            className="h-14 w-14 relative min-h-[56px]"
            alt=""
            src="/img/sliderRight.svg"
          />
        </div>
      </div>
    </div>
  );
};

AuthorDetails.propTypes = {
  className: PropTypes.string,
};

export default AuthorDetails;
