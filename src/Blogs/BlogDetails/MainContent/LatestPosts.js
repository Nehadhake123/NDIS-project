import PostItems from "./PostItems";

const LatestPosts = () => {
  return (
    <div className="self-stretch h-[500px] relative shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden shrink-0 mq450:h-auto mq450:min-h-[500]">
      <div className="absolute top-[27px] left-[20px] box-border w-[1.5px] h-[27.5px] border-r-[1.5px] border-solid border-primary-color" />
      <div className="absolute top-[24px] left-[20px] w-[344px] flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-start justify-start py-0 px-[7px]">
          <h3 className="m-0 relative text-inherit leading-[32px] capitalize font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Our latest Post
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-slategray">
          <PostItems postThumbnails="/img/box1.png" />
          <PostItems postThumbnails="/img/box2.png" />
          <PostItems postThumbnails="/img/box3.png" />
          <PostItems postThumbnails="/img/box4.png" />
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
