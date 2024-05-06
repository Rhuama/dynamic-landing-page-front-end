"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style/carouselBanner.css";
import Image from "next/image";

export default function CarouselBanner() {
  return (
    <section id="sectionOne">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/images/02.jpg" width={6720} height={4480} alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/02.jpg" width={6720} height={4480}  alt={""} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/02.jpg" width={6720} height={4480} alt={""} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
