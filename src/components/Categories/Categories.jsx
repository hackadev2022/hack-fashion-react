import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Categories.css";
import { Navigation } from "swiper";

export const Categories = () => {
  return (
    <>
      <h2 id="title-categories">Categorias</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={35}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src="/img/roupas_sem_fundo/jeans1.png" />
          <a href="#" className="name-categories">Jeans</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/roupas_sem_fundo/shirt2.png" />
          <a href="#" className="name-categories">Camisas</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/roupas_sem_fundo/sweater2.png"/>
          <a href="#" className="name-categories">Suéter</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/roupas_sem_fundo/sweatpants1.png" />
          <a href="#" className="name-categories">Calças Moletom</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/roupas_sem_fundo/sweatshirt3.png" />
          <a href="#" className="name-categories">Camisas Moletom</a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
