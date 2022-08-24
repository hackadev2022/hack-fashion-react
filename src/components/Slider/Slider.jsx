import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation } from "swiper";

export const Slider = () => {
  return (
    <>
      <h2 id="title">Categorias</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/roupas_sem_fundo/jeans1.png" />
          <a href="#" className="name">
            Jeans
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/roupas_sem_fundo/shirt1.png" />
          <a href="#" className="name">
            Camisas
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/roupas_sem_fundo/sweater1.png" />
          <a href="#" className="name">
            Suéter
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/roupas_sem_fundo/sweatpants1.png" />
          <a href="#" className="name">
            Calças Moletom
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/roupas_sem_fundo/sweatshirt1.png" />
          <a href="#" className="name">
            Camisas Moletom
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
