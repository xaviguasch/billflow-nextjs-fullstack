import IconLogoSVG from "./IconLogoSVG";
import ThemeSwitch from "./ThemeSwitch";

import Image from "next/image";

const Header = () => {
  return (
    <div className="lg:border-t- flex h-[72px] items-center justify-between bg-bright-grey dark:bg-dark md:h-[80px] lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:flex-col lg:rounded-r-3xl">
      <div className="item flex h-full flex-col items-center justify-center rounded-r-3xl bg-medium-slate-blue px-6 lg:h-[103px] lg:w-[103px]">
        <IconLogoSVG />
      </div>

      <div className="flex h-full items-center justify-start lg:h-[180px] lg:flex-col lg:justify-between">
        <div className="flex h-full flex-col items-center justify-center px-6 md:px-8 lg:mb-12 lg:flex-col lg:justify-end">
          <ThemeSwitch />
        </div>

        <div className="flex h-full flex-col items-center justify-center border-l border-mountain-mist border-opacity-50 px-6 md:px-8 lg:mb-6 lg:border-none">
          <Image
            src="/images/image-avatar.jpg"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
