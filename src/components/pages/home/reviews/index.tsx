import Container from "@/components/layout/container";
import React from "react";
import Swiper from "./swiper";

const Reviews = () => {
  return (
    <section className="py-20 lg:pt-36 lg:pb-20 xl:pt-72 xl:pb-28">
      <Container className="text-center text-[#171717]">
        <div className="max-w-[750px] flex flex-col items-center mx-auto">
          <h3 className="text-4xl lg:text-[55.5px] font-extrabold leading-snug">
            Trusted by Daycare Providers Like You
          </h3>
          <p className="mt-5 mb-12 text-[#737373] lg:text-lg">
            Discover why daycare providers trust DaycarePilot for their needs
            Hear what they have to say.
          </p>
        </div>
        {/* carousal */}
        <Swiper />
      </Container>
    </section>
  );
};

export default Reviews;
