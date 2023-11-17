import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Available = () => {
  return (
    <section className="pb-60 pt-52 bg-[#F5FBFB] relative">
      {/* pattern */}
      {/* top */}
      {/* <Image
        src="/assets/wave-top.svg"
        width={5000}
        height={5000}
        alt="bg"
        className="absolute top-0 left-0"
      /> */}
      {/* ornaments vectors */}
      <Image
        src="/assets/raining.svg"
        width={137}
        height={200}
        alt="bg"
        className="absolute top-12 right-3"
      />
      <Image
        src="/assets/sun.svg"
        width={148}
        height={141}
        alt="bg"
        className="absolute top-20 left-28"
      />
      <Image
        src="/assets/jupiter.svg"
        width={337}
        height={258}
        alt="bg"
        className="absolute bottom-24 left-0"
      />
      <Image
        src="/assets/cat.svg"
        width={197}
        height={147}
        alt="bg"
        className="absolute bottom-0 right-48"
      />
      <Image
        src="/assets/start.svg"
        width={142}
        height={100}
        alt="bg"
        className="absolute top-40 right-96"
      />
      <Container className="text-center">
        <h3 className="text-[#171717] font-extrabold text-[54px] relative z-10">
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
  );
};

export default Available;
