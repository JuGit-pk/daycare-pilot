import Link from "next/link";
import Image from "next/image";

import { FOOTER_ITEMS, FOOTER_SOCIAL_ITEMS } from "@/lib/constants";
import Container from "../container";

const Footer = () => {
  return (
    <footer className="bg-[#FBB821] pt-8 pb-11">
      <Container className="flex justify-between items-start">
        <div>
          <Image
            src="/assets/logo2.png"
            alt="footer logo"
            width={178}
            height={133}
          />
        </div>
        <div className="pt-6 flex flex-col justify-between">
          <ul className="space-x-16 font-extrabold text-[22px] flex items-center justify-center text-[#25314C]">
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
          <p className="mx-auto mt-14 text-[#25314C] text-base font-sans">
            Copyright to SIPPY CUP SOFTWARE INC.
          </p>
        </div>
        <div className="pt-6 flex flex-col">
          <div className="space-x-5 ml-auto">
            {/* icons */}
            {FOOTER_SOCIAL_ITEMS.map(({ name, img, link }, i) => (
              <Link href={link} key={name + i} className="inline-block">
                <Image src={img} alt={name} width={24} height={24} />
              </Link>
            ))}
          </div>
          <div className="mt-14 space-x-10 text-base text-[#25314C] font-sans">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;