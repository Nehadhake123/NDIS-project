import Link from 'next/link';

const Header = () => {
  return (
    <header className="self-stretch bg-white flex flex-col items-center justify-center py-6 px-5 box-border top-[0] z-[99] sticky max-w-full">
      <div className="w-[1200px] flex flex-row items-center justify-between gap-[20px] max-w-full lg:w-[459px]">
        <img
          className="self-stretch w-[123px] max-h-full overflow-hidden shrink-0 min-h-[56px]"
          loading="lazy"
          alt="Logo"
          src="/img/logo.svg"
        />
        <nav className="m-0 w-[741px] shadow-[0px_0px_42px_2px_rgba(241,_241,_241,_0.56)] rounded-15xl bg-white box-border flex flex-col items-center justify-center py-[15px] px-[31px] max-w-full border-[1px] border-solid border-midnightblue-100 lg:hidden">
          <nav className="m-0 self-stretch flex flex-row items-center justify-between gap-[20px] text-left text-base text-paragraph-font-color font-manrope">
          <Link href="/">
            <div className="relative font-semibold text-taittle-color inline-block min-w-[45px]">Home</div>
          </Link>
          <Link href="/find-providers">
            <div className="relative font-medium inline-block min-w-[106px] whitespace-nowrap">Find Providers</div>
          </Link>
          <Link href="/find-services">
            <div className="relative font-medium inline-block min-w-[100px] whitespace-nowrap">Find Services</div>
          </Link>
          <Link href="/services">
            <div className="relative font-medium inline-block min-w-[65px]">Services</div>
          </Link>
          <Link href="/blogs">
            <div className="relative font-medium inline-block min-w-[42px]">Blogs</div>
          </Link>
          <Link href="/about-us">
            <div className="relative font-medium inline-block min-w-[69px] whitespace-nowrap">About Us</div>
          </Link>
          <Link href="/contact-us">
            <div className="relative font-medium inline-block min-w-[85px] whitespace-nowrap">Contact Us</div>
          </Link>
        </nav>
        </nav>
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <Link href="/login" className="no-underline">
            <div className="cursor-pointer p-0 bg-transparent w-[99px] flex flex-row items-center justify-center">
              <div className="flex-1 rounded-23xl flex flex-row items-center justify-center py-[13px] px-[22px] border-[1.5px] border-solid border-midnightblue-200">
                <div className="relative text-lg leading-[26px] font-semibold font-manrope text-taittle-color text-left inline-block min-w-[52px] whitespace-nowrap">
                  Log In
                </div>
              </div>
            </div>
          </Link>
          <Link href="/register" className="no-underline">
            <div className="cursor-pointer flex flex-row items-center justify-center">
              <div className="rounded-23xl bg-taittle-color flex flex-row items-center justify-center py-[15px] px-[23px]">
                <div className="relative text-lg leading-[26px] font-semibold text-white text-left inline-block min-w-[75px] whitespace-nowrap">
                  Register
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;