import { useRef } from 'react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Slider.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

export default function Slider() {

  const swiper = useSwiper();
    return(
        <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.prevSlider',
          prevEl: '.nextSlider',
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className={styles.mySwiper}
      >
        <button className={styles.prevSlider}><img src='/img/nextArrow.svg' alt="Prev button"></img></button>
        <SwiperSlide><img src="/img/banner.png" className={styles.banner} alt="banner 1" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner2.png" className={styles.banner} alt="banner 2" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner3.png" className={styles.banner} alt="banner 3" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner4.png" className={styles.banner} alt="banner 4" /></SwiperSlide>
        <button onClick={() => swiper.slideNext()} className={styles.nextSlider}><img src='/img/nextArrow.svg' alt="Next button"></img></button>

      </Swiper>
    )
}