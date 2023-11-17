import Image from "next/image";

import Container from "@/components/layout/container";
import WavyWrapper from "@/components/layout/wavy-wrapper";

const Downlaod = () => {
  return (
    <WavyWrapper>
      <Container className="grid grid-cols-2 gap-x-36 text-white">
        <div className="relative">
          <Image
            className="absolute -translate-y-56 right-0 z-20"
            src="/assets/mobile.png"
            width={395}
            height={1200}
            alt="phone"
          />
        </div>
        <div className="max-w-[460px]">
          <h3 className="text-5xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </h3>
          <p className="max-w-[416px] text-base mt-4 opacity-80">
            Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict
            altera legimu. Me vita de lege ndos expet end is ad.mita aliu mi
            ando, haeo tibi que com titure viset cut.Proin tempus elit a laoreet
            volut pat.
          </p>
          <div className="flex space-x-4 mt-14">
            <Image
              className="cursor-pointer"
              src="/assets/app-store.png"
              width={196}
              height={62}
              alt="app-store"
            />
            <Image
              className="cursor-pointer"
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
