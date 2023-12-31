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
        description="Here to Help, Because Your Daycare Deserves the Best"
        page="Contact"
      />
      <Container
        className={cn(
          "flex flex-col lg:flex-row lg:gap-x-10 xl:gap-x-36 lg:px-[152px] pb-14 lg:pb-32"
        )}
      >
        <div className="lg:max-w-[416px] shadow-accordion rounded-md w-full">
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
                  2164 Montreal Road,{" "}
                  <span className="block">Unit 5, Suite #8348</span>
                  <span className="block">Ottawa, ON, Canada, K1J 1G4</span>
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
                <span>1833-927-0176</span>
              </div>
              <div className="gap-x-4 flex items-start text-base mt-5">
                <Image
                  src="/assets/mail.svg"
                  className="inline-block"
                  width={22}
                  height={15}
                  alt="mail"
                />
                <span>contact@daycarepilot.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-accordion w-full p-10 rounded-md">
          <ContactUsForm />
        </div>
      </Container>
      <div className="w-full h-[550px] lg:h-auto">
        <Image
          src="/assets/our-location.png"
          className="w-full object-cover lg:object-cover h-full"
          width={1600}
          height={550}
          alt="our location"
        />
      </div>
    </main>
  );
};

export default ContactUsPage;
