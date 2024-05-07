'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "./style/carouselNews.css";

export default function CarouselNews() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-9"
        id="news"
      >
        <SwiperSlide>
          <a href="#">
            {/* <Image src="/images/Kidsdress.jpg" width={150} height={50} alt={""} /> */}
          </a>
        </SwiperSlide>
        <SwiperSlide><a href="#"></a></SwiperSlide>
        <SwiperSlide><a href="#"></a></SwiperSlide>
        <SwiperSlide><a href="#"></a></SwiperSlide>
        <SwiperSlide><a href="#"></a></SwiperSlide>
      </Swiper>
    </>
  );
}
