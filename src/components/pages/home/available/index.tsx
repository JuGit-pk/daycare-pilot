import Image from "next/image";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Available = () => {
  return (
    <>
      {/* pattern */}
      {/* top */}
      <div className="relative top-0 inset-x-0 ">
        <Image src="/assets/wave-top.svg" width={5000} height={5000} alt="bg" />
      </div>
      <section className="py-20 lg:pb-60 lg:pt-52 bg-[#F5FBFB] relative">
        {/* ornaments vectors */}
        <Image
          src="/assets/raining.svg"
          width={137}
          height={200}
          alt="bg"
          className="absolute right-0 top-5 md:top-12 lg:top-12 lg:right-3 w-14 md:w-20 lg:w-24 lg:h-32"
        />
        <Image
          src="/assets/sun.svg"
          width={148}
          height={141}
          alt="bg"
          className="absolute top-0 left-0 md:top-20 lg:top-20 lg:left-28 w-16 md:w-20 lg:w-24 lg:h-24"
        />
        <Image
          src="/assets/jupiter.svg"
          width={337}
          height={258}
          alt="bg"
          className="absolute bottom-4 -left-3 md:bottom-0 lg:bottom-0 lg:left-28 w-24 md:w-32 lg:w-40 lg:h-40"
        />
        <Image
          src="/assets/cat.svg"
          width={197}
          height={147}
          alt="bg"
          className="absolute bottom-0 right-14 md:bottom-0 lg:bottom-0 lg:right-28 w-20 md:w-24 lg:w-32 lg:h-32"
        />
        <Image
          src="/assets/start.svg"
          width={142}
          height={100}
          alt="bg"
          className="absolute top-10 left-2/3 2xl:top-40 2xl:right-96 md:left-1/2 md:top-1/4 lg:w-24 lg:h-16 lg:left-2/3 lg:top-10 hidden md:block w-24 lg:w-32 lg:h-24"
        />
        <Container className="text-center">
          <h3 className="text-[#171717] font-extrabold text-4xl lg:text-[54px] relative z-10">
            We&apos;re always available to help you!
          </h3>
          <Button
            size="lg"
            className={cn(
              "mt-11 border border-transparent text-white py-7 text-base",
              "border-transparent bg-[#FF8500] hover:bg-[#FBB821]"
            )}
            variant="default"
          >
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Available;
