import Image from "next/image";

import Container from "@/components/layout/container";
import Hero from "@/components/layout/hero";
import { cn } from "@/lib/utils";
import ContactUsForm from "@/components/pages/contact-us/form";

const ContactUsPage = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Contact Us"
        description="An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula"
        page="Contact"
      />
      <Container className={cn("flex gap-x-36 px-[152px] pb-32")}>
        <div className="max-w-[416px] shadow-accordion rounded-md w-full">
          <p>&nbsp;</p>
          <h3 className="text-[30px] font-bold text-white w-full bg-[#FF6600] flex items-center px-8 py-6 rounded-tl-md rounded-tr-md">
            Contact Details
          </h3>
          <div className="py-12 px-10 space-y-14">
            <div className="text-[#000B33]">
              <h4 className="text-xl font-bold  mb-5 opacity-80">
                Office Address
              </h4>
              <div className="gap-x-4 flex items-start text-base">
                <Image
                  src="/assets/location.svg"
                  className="inline-block"
                  width={17}
                  height={15}
                  alt="pin"
                />
                <span className="text-base">
                  2118 Thornridge Cir. Syracuse,{" "}
                  <span className="block">California 208434</span>
                </span>
              </div>
            </div>
            <div className="text-[#000B33]">
              <h4 className="text-xl font-bold  mb-5 opacity-80">
                Contact Info
              </h4>
              <div className="gap-x-4 flex items-start text-base">
                <Image
                  src="/assets/phone.svg"
                  className="inline-block"
                  width={20}
                  height={20}
                  alt="phone"
                />
                <span>+088 (246) 642-27-10</span>
              </div>
              <div className="gap-x-4 flex items-start text-base mt-5">
                <Image
                  src="/assets/mail.svg"
                  className="inline-block"
                  width={22}
                  height={15}
                  alt="mail"
                />
                <span>info@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-accordion w-full p-10 rounded-md">
          <ContactUsForm />
        </div>
      </Container>
      <div className="w-full">
        <Image
          src="/assets/our-location.png"
          className="w-full object-cover"
          width={1600}
          height={550}
          alt="our location"
        />
      </div>
    </main>
  );
};

export default ContactUsPage;
