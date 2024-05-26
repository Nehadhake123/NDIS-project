import React from 'react';
import SearchForm from './SearchForm';

const HomeContent = () => {
  return (
    <div className="relative flex flex-col items-center justify-start pt-[113px] px-5 pb-[155px] box-border gap-[32px] max-w-full text-center text-45xl text-white font-manrope mq825:gap-[18px]">
      <img
        className="w-full h-full absolute top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full object-cover"
        alt="Background"
        src="/img/home.png"
      />
      <div className="relative w-[986px] flex flex-col items-start justify-start gap-[24px] max-w-full z-[1]">
        <header>
          <h1 className="m-0 self-stretch relative text-inherit leading-[76px] font-bold font-inherit mq450:text-19xl mq450:leading-[46px] mq825:text-32xl mq825:leading-[61px]">
            Spend your time on what you love
          </h1>
        </header>
      </div>
      <div className="relative w-full flex justify-center z-[1] mt-auto">
        <SearchForm />
      </div>
    </div>
  );
};

export default HomeContent;
