import { Button } from "@/components/ui/button";
import { navbarItemsList } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  className?: string;
}
const Navbar: React.FC<IProps> = ({ className }) => {
  return (
    <nav
      className={`flex justify-between pl-5 pr-2 py-2 bg-background text-foreground text-lg rounded-xl relative ${className}`}
    >
      <ul className="space-x-6 flex items-center">
        {navbarItemsList.map((item, index) => (
          <li key={index} className="inline-block">
            <Link
              href={item.path}
              className="font-bold transition-all duration-150 ease-in-out hover:text-[#FF6600]/70"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* logo */}
      <div className="absolute z-10 shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background w-64 h-48 rounded-[32px] py-4 px-5">
        <Image
          src="/assets/daycarepilot.png"
          alt="logo"
          width={1500}
          height={1500}
        />
      </div>
      <Button size="lg">Login / Sign up</Button>
    </nav>
  );
};

export default Navbar;
