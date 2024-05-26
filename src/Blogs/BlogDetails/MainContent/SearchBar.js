const SearchBar = () => {
    return (
      <div className="self-stretch h-40 relative shadow-[0px_0px_42px_rgba(241,_241,_241,_0.51)] rounded-xl bg-white overflow-hidden shrink-0">
        <div className="absolute top-[27px] left-[20px] box-border w-[1.5px] h-[27.5px] border-r-[1.5px] border-solid border-primary-color" />
        <div className="absolute top-[24px] left-[20px] w-[344px] flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-row items-start justify-start py-0 px-2">
            <h3 className="m-0 relative text-inherit leading-[32px] capitalize font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
              Search Here
            </h3>
          </div>
          <div className="self-stretch rounded-xl bg-background-color flex flex-row items-start justify-start py-[15px] px-4 border-[0.5px] border-solid border-orange">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
              <input
                className="w-[105px] [border:none] [outline:none] font-manrope text-base bg-[transparent] h-6 relative leading-[24px] text-slategray text-left inline-block p-0"
                placeholder="Search here...."
                type="text"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/img/search.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  