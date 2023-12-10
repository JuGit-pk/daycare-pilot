"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { CUSTOMERS_REVIEWS } from "@/lib/constants";
import Card from "./card";

import "swiper/css";

const ReviewsSwiper = () => {
  return (
    <div className="max-w-[1335px] mx-auto relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={26}
        slidesPerView={3}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {CUSTOMERS_REVIEWS.map((review, i) => (
          <SwiperSlide key={review.name + i}>
            <Card id={i} {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev group select-none">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6.77832L21.1933 8.97165L12.5133 17.6672H31.4445V20.7783H12.5133L21.1933 29.4739L19 31.6672L6.55557 19.2228L19 6.77832Z"
            fill="white"
            className="group-hover:fill-[#a3a3a3]"
          />
        </svg>
      </div>
      <div className="swiper-button-next group select-none">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0006 6.77832L16.8073 8.97165L25.4873 17.6672H6.55615V20.7783H25.4873L16.8073 29.4739L19.0006 31.6672L31.445 19.2228L19.0006 6.77832Z"
            fill="white"
            className="group-hover:fill-[#a3a3a3]"
          />
        </svg>
      </div>
    </div>
  );
};

export default ReviewsSwiper;
