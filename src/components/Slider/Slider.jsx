import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation } from "swiper";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/jeans/calça">
            <img src="img/roupas_sem_fundo/jeans1.png" />
            <i className="name">Jeans</i>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/camiseta">
            <img src="img/roupas_sem_fundo/shirt1.png" />
            <i className="name">Camisas</i>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/moletom/camisa">
            <img src="img/roupas_sem_fundo/sweater1.png" />
            <i className="name">Suéter</i>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/moletom/calça">
            <img src="img/roupas_sem_fundo/sweatpants1.png" />
            <i className="name">Calças Moletom</i>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/moletom/jaqueta">
            <img src="img/roupas_sem_fundo/sweatshirt1.png" />
            <i className="name">Camisas Moletom</i>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
