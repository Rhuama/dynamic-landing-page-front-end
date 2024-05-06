"use client";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style/carouselBanner.css";


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
        modules={[Pagination]}
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
