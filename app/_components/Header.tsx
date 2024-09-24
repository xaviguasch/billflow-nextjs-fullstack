import IconLogoSVG from "./IconLogoSVG";
import IconMoonSVG from "./IconMoonSVG";

import Image from "next/image";

const Header = () => {
  return (
    <div className="flex h-[72px] items-center justify-between bg-bright-grey">
      <div className="item flex h-full flex-col items-center justify-center rounded-r-3xl bg-medium-slate-blue px-6">
        <IconLogoSVG />
      </div>

      <div className="flex h-full items-center justify-start">
        <div className="flex h-full flex-col items-center justify-center px-6">
          <IconMoonSVG />
        </div>

        <div className="flex h-full flex-col items-center justify-center border-l border-wild-blue-yonder px-6">
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
