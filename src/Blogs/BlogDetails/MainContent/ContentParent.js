import PropTypes from "prop-types";
import Article from "./Article";
import SearchBar from "./SearchBar";
import LatestPosts from "./LatestPosts";

const ContentParent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-8 box-border max-w-full text-left text-base text-slategray font-manrope ${className}`}
    >
      <div className="w-[1200px] flex flex-row items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
        <Article />
        <div className="w-96 flex flex-col items-start justify-start gap-[40px] min-w-[384px] max-w-full text-5xl text-title-color mq450:gap-[20px] mq450:min-w-full mq1050:flex-1">
          <SearchBar />
          <LatestPosts />
        </div>
      </div>
    </section>
  );
};

ContentParent.propTypes = {
  className: PropTypes.string,
};

export default ContentParent;
