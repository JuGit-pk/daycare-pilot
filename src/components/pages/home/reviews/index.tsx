import Container from "@/components/layout/container";
import React from "react";
import Swiper from "./swiper";

const Reviews = () => {
  return (
    <section className="pt-36 pb-20">
      <Container className="text-center text-[#171717]">
        <div className="max-w-[750px] flex flex-col items-center mx-auto">
          <h3 className="text-[55.5px] font-bold">Happy Clients</h3>
          <p className="mt-5 mb-12 text-[#737373]">
            Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis sed
            odio sit amet nibh dictum vulputate cursus a sit amet ultricies
            augue.
          </p>
        </div>
        {/* carousal */}
        <Swiper />
      </Container>
    </section>
  );
};

export default Reviews;
