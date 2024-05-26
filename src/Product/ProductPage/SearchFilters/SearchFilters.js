import PropTypes from "prop-types";
import FilterOption from "./FilterOption";
import ProviderCard from "./ProviderCard ";

const SearchFilters = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-xl text-title-color font-manrope mq1050:flex-wrap ${className}`}
    >
      <div className="w-96 rounded-2xl bg-gray-100 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[22px] px-[23px] min-w-[384px] max-w-full border-[1px] border-solid border-whitesmoke-200 mq450:min-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq1050:flex-1">
        <div className="flex-1 flex flex-col items-center justify-center gap-[24px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
            <div className="relative leading-[28px] font-semibold mq450:text-base mq450:leading-[22px]">
              Refine results
            </div>
            <div className="self-stretch rounded-xl bg-white overflow-hidden flex flex-col items-center justify-center py-3.5 px-[15px] border-[1px] border-solid border-whitesmoke-100">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <input
                  className="w-[101px] border-none outline-none font-manrope text-base bg-transparent h-6 relative leading-[24px] text-paragraph-font-color text-left inline-block p-0"
                  placeholder="Search here..."
                  type="text"
                />
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  alt="Search"
                  src="/img/search.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <FilterOption
              location2="/img/loc2.svg"
              servicesType="Services Type"
            />
            <FilterOption
              location2="/img/loc2.svg"
              servicesType="Services"
              propGap="6px"
              propMinWidth="75px"
              propDisplay="inline-block"
            />
            <FilterOption
              location2="/img/loc2.svg"
              servicesType="Disabilities type"
              propGap="4px"
              propMinWidth="unset"
              propDisplay="unset"
            />
            <FilterOption
              location2="/img/loc2.svg"
              servicesType="NDIS Registration"
              propGap="8px"
              propMinWidth="unset"
              propDisplay="unset"
            />
            <FilterOption
              location2="/3-user-1.svg"
              servicesType="Age Group"
              propGap="5px"
              propMinWidth="92px"
              propDisplay="inline-block"
            />
            <FilterOption
              location2="/translate-language-1.svg"
              servicesType="Language"
              propGap="5px"
              propMinWidth="87px"
              propDisplay="inline-block"
            />
            <FilterOption
              location2="/img/loc2.svg"
              servicesType="Specialisation"
              propGap="5px"
              propMinWidth="123px"
              propDisplay="inline-block"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[24px] min-w-[515px] max-w-full text-13xl mq750:min-w-full">
        <div className="flex flex-col items-start justify-center mq450:gap-[18px]">
          <div className="flex flex-col items-start justify-center gap-[16px] mq1050:self-stretch mq1050:w-auto">
            <h1 className="m-0 relative text-inherit leading-[44px] font-semibold font-inherit mq450:text-lg mq450:leading-[26px] mq1050:text-7xl mq1050:leading-[35px]">
              Find all services.
            </h1>
            <div className="relative text-xl leading-[28px] text-paragraph-font-color mq450:text-base mq450:leading-[22px]">
              Found 3542 results.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full text-5xl">
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] max-w-full mq750:flex-wrap">
            <ProviderCard />
            <ProviderCard />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] max-w-full mq750:flex-wrap">
            <ProviderCard />
            <ProviderCard />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] max-w-full mq750:flex-wrap">
            <ProviderCard />
            <ProviderCard />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] max-w-full mq750:flex-wrap">
            <ProviderCard />
            <ProviderCard />
          </div>
        </div>
      </div>
    </div>
  );
};

SearchFilters.propTypes = {
  className: PropTypes.string,
};

export default SearchFilters;
