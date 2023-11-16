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
      className={`flex justify-between pl-5 pr-2 py-[9.5px] bg-background font-semibold text-[#171717] text-lg rounded-xl relative ${className}`}
    >
      <ul className="space-x-6 flex items-center">
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
      {/* logo */}
      <div className="absolute z-10 shadow-logo left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background w-64 h-48 rounded-[32px] py-4 px-5">
        <Image
          src="/assets/daycarepilot.png"
          alt="logo"
          width={1500}
          height={1500}
        />
      </div>
      <Button
        size="lg"
        className={cn("bg-[#25314C] py-7 text-base px-10 font-medium")}
      >
        Login / Sign up
      </Button>
    </nav>
  );
};

export default Navbar;
