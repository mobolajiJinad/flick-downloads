import Image from "next/image";
import Link from "next/link";

import GenreDropdown from "./GenreDropdown";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between gap-4 bg-[#12121280] p-5 backdrop-blur-2xl transition-colors md:gap-0">
      {/* put logo image here */}
      <Link href={"/"}>
        <Image
          src="/next.svg"
          alt="Logo"
          width={120}
          height={100}
          priority={true}
          className="h-auto w-40 cursor-pointer"
        />
      </Link>

      <div className="flex space-x-2 text-white">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
