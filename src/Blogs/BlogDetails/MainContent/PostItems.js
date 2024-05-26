import PropTypes from "prop-types";

const PostItems = ({ className = "", postThumbnails }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[16px] text-left text-base text-slategray font-manrope mq450:flex-wrap ${className}`}
    >
      <img
        className="self-stretch w-[95px] relative rounded max-h-full object-cover min-h-[84px]"
        loading="lazy"
        alt=""
        src={postThumbnails}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[151px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/img/calender.svg"
          />
          <div className="relative leading-[24px] inline-block min-w-[90px]">
            2 April ,2024
          </div>
        </div>
        <div className="self-stretch relative leading-[24px] capitalize font-semibold text-title-color">
          Budget Issues Force The Our To Become
        </div>
      </div>
    </div>
  );
};

PostItems.propTypes = {
  className: PropTypes.string,
  postThumbnails: PropTypes.string.isRequired,
};

export default PostItems;
