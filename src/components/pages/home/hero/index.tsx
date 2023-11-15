import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 text-background">
      <div className="col-span-6">
        <h1 className=" text-7xl font-extrabold w-[688px]">
          Supporting Daycare Providers
        </h1>
        <p className="text-3xl font-medium mt-7">
          Because Your Passion Dosent <span className="block">Clock Out</span>
        </p>
        <Input
          placeholder="Enter your email"
          className="mt-9 max-w-md text-foreground"
          type="text"
        />
        <Button className="mt-5" size="lg">
          Get Started
        </Button>
        <p className="text-xs font-bold mt-2.5">
          *Start a 3- day trial no credit card required
        </p>
      </div>
      {/* hero image */}
      <div className="col-span-6 relative z-10">
        <Image
          src="/assets/hero_img.png"
          className="scale-[135%] relative top-40 -left-20"
          width={1400}
          height={1400}
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
