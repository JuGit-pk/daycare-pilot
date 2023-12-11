import Image from "next/image";

import Container from "@/components/layout/container";
import WavyWrapper from "@/components/layout/wavy-wrapper";

const Downlaod = () => {
  return (
    <WavyWrapper className="text-left pt-[512px] pb-20 lg:pt-32 lg:pb-36">
      <Container className="grid lg:grid-cols-2 gap-x-36 text-white">
        <div className="relative">
          <Image
            // always make the image absolute center vertically to its parent
            // className="absolute -translate-y-56 right-0 z-20"
            className="absolute z-10 -top-[745px] lg:top-1/2 right-1/2 lg:right-0 transform translate-x-1/2 lg:translate-x-0 lg:scale-110 lg:-translate-y-1/2 w-[350px] lg:w-[395px]"
            src="/assets/mobile.png"
            width={395}
            height={1200}
            alt="phone"
          />
        </div>
        <div className="max-w-[460px] text-center lg:text-left mx-auto lg:mx-0">
          <h3 className="text-4xl xl:text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </h3>
          <p className="max-w-[416px] text-base mt-4 opacity-80">
            Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict
            altera legimu. Me vita de lege ndos expet end is ad.mita aliu mi
            ando, haeo tibi que com titure viset cut.Proin tempus elit a laoreet
            volut pat.
          </p>
          <div className="flex space-x-4 mt-14 shrink-0">
            <Image
              className="cursor-pointer object-contain flex-1 w-40 lg:w-48"
              src="/assets/app-store.png"
              width={196}
              height={62}
              alt="app-store"
            />
            <Image
              className="cursor-pointer object-contain flex-1 w-40 lg:w-48"
              src="/assets/play-store.png"
              width={196}
              height={62}
              alt="google-play"
            />
          </div>
        </div>
      </Container>
    </WavyWrapper>
  );
};

export default Downlaod;
