import Image from "next/image";
import Link from "next/link";

import GenreDropdown from "@/components/GenreDropdown";
import SearchInput from "@/components/SearchInput";
import ThemeToggler from "@/components/ThemeToggler";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between gap-4 bg-[#12121280] p-2 backdrop-blur-2xl transition-colors sm:p-4 md:gap-0">
      {/* put logo image here */}
      <Link href={"/"}>
        <Image
          src="/flickDownloads.png"
          alt="Logo"
          width={100}
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
