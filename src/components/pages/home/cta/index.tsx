import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CTA = () => {
  return (
    <section className="grid grid-cols-12 text-background">
      <div className="col-span-6">
        <h1 className=" text-7xl font-extrabold w-[688px]">
          Supporting Daycare Providers
        </h1>
        <p className="text-3xl font-medium mt-7">
          Because Your Passion Dose&apos;nt
          <span className="block">Clock Out</span>
        </p>
        <div className="relative mt-9">
          <Image
            src="/assets/envelope.svg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
            width={100}
            height={100}
            alt="envelop"
          />
          <Input
            type="text"
            placeholder="Email ... "
            className="pl-12 text-[#000B33] text-base font-medium py-6 w-full max-w-[442px] placeholder:text-[#25314C5C]"
          />
        </div>
        <Button
          size="lg"
          className={cn("bg-[#25314C] mt-5 py-7 text-base px-10 font-medium")}
        >
          Get Started
        </Button>
        <p className="text-xs font-bold mt-2.5 mb-5 2xl:mb-0">
          *Start a 3- day trial no credit card required
        </p>
      </div>
      {/* hero image */}
      <div className="col-span-6 relative z-10">
        <Image
          src="/assets/hero.png"
          className="2xl:scale-[135%] relative top-40 -left-24"
          width={1400}
          height={1400}
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default CTA;
