import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NAVBAR_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}
const Navbar: React.FC<IProps> = ({ className }) => {
  return (
    <nav
      className={`flex justify-between p-3 xl:pl-5 xl:pr-2 xl:py-[9.5px] bg-background font-semibold text-[#171717] text-lg rounded-xl relative ${className}`}
    >
      {/* left */}
      <Image
        src="/assets/menu-left-alt.svg"
        className="w-6 h-6 xl:hidden"
        alt="burger button"
        width={24}
        height={24}
      />
      <ul className="space-x-6 xl:flex hidden items-center">
        {NAVBAR_ITEMS.map(({ name, path }, i) => (
          <li key={path + i} className="inline-block">
            <Link
              href={path}
              className="font-bold transition-all duration-75 ease-in-out hover:text-[#FF6600]/80"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      {/* center */}
      <div className="absolute z-10 shadow-logo left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background w-40 h-32 xl:w-64 xl:h-48 rounded-[32px] py-4 px-5">
        <Link href="/">
          <Image
            src="/assets/daycarepilot.png"
            alt="logo"
            width={1500}
            height={1500}
          />
        </Link>
      </div>
      {/* right */}
      <Image
        src="/assets/user.svg"
        className="w-6 h-6 xl:hidden"
        alt="user"
        width={24}
        height={24}
      />

      <Button
        size="lg"
        className={cn(
          "bg-[#25314C] py-7 text-base px-10 font-medium",
          "xl:flex hidden"
        )}
      >
        Login / Sign up
      </Button>
    </nav>
  );
};

export default Navbar;
