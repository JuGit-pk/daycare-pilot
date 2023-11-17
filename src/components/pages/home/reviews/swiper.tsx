"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { CUSTOMERS_REVIEWS } from "@/lib/constants";
import Card from "./card";

import "swiper/css";

const ReviewsSwiper = () => {
  return (
    <div className="max-w-[1335px] mx-auto">
      <Swiper
        spaceBetween={26}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {CUSTOMERS_REVIEWS.map((review, i) => (
          <SwiperSlide key={review.name + i}>
            <Card id={i} {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSwiper;
