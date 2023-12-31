import Link from "next/link";
import Image from "next/image";

import { FOOTER_ITEMS, FOOTER_SOCIAL_ITEMS } from "@/lib/constants";
import Container from "../container";

const Footer = () => {
  return (
    <footer className="bg-[#FBB821] pt-8 pb-11">
      <Container className="flex flex-col items-center justify-center xl:flex-row xl:justify-between xl:items-start">
        <div>
          <Image
            src="/assets/daycarepilot2.png"
            alt="footer logo"
            width={178}
            height={133}
          />
        </div>
        <div className="py-12 xl:py-6 flex flex-col justify-between 2xl:ml-28">
          <ul className="gap-x-14 xl:gap-x-16 font-extrabold text-lg 2xl:text-[22px] flex flex-wrap gap-y-4 items-center justify-center text-[#25314C]">
            {FOOTER_ITEMS.map(({ name, path }, i) => (
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
          <p className="hidden xl:block mx-auto mt-14 text-[#25314C] text-base 2xl:text-lg font-sans">
            Copyright to SIPPY CUP SOFTWARE INC.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="space-x-6 xl:ml-auto">
            {/* icons */}
            {FOOTER_SOCIAL_ITEMS.map(({ name, img, link }, i) => (
              <Link href={link} key={name + i} className="inline-block">
                <Image src={img} alt={name} width={27} height={27} />
              </Link>
            ))}
          </div>
          <div className="mt-14 space-x-10 text-base 2xl:text-lg text-[#25314C] font-sans">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
          <p className="xl:hidden mx-auto mt-7 text-[#25314C] text-base 2xl:text-lg font-sans">
            Copyright to SIPPY CUP SOFTWARE INC.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
