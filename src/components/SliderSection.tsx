import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import car from "../../public/Inkedcar.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "@/styles/SliderSection.module.scss";
import { Autoplay, Pagination, Navigation } from "swiper";

interface ISliderSection {
    handleCallbackClick: Function;
}
function SliderSection({handleCallbackClick}: ISliderSection): JSX.Element {
    return (
        <section className={styles.slider_section}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={styles.carsSlider}
            >
                <SwiperSlide className={styles.carsSlider__slide}>
                    <div className={styles.slide__content}>
                        <h2>Авто в лизинг для физических лиц</h2>
                        <p>Получите машину за 5 дней</p>
                        <button className={styles.carsSlider__button} onClick={() => handleCallbackClick(true)}>Оставить заявку</button>
                    </div>
                    <Image src={car} alt={'car'} className={styles.carsSlider__img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.carsSlider__slide}>
                    <Image src={car} alt={'car'} className={styles.carsSlider__img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.carsSlider__slide}>
                    <Image src={car} alt={'car'} className={styles.carsSlider__img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.carsSlider__slide}>
                    <Image src={car} alt={'car'} className={styles.carsSlider__img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.carsSlider__slide}>
                    <Image src={car} alt={'car'} className={styles.carsSlider__img}/>
                </SwiperSlide>
                <SwiperSlide className={styles.carsSlider__slide}>
                    <Image src={car} alt={'car'} className={styles.carsSlider__img}/>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default SliderSection;