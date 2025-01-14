import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide  } from 'swiper/react';
import styles from './Slider.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';
import { useRef } from 'react';

export default function Slider() {

  const swiperRef = useRef();

    return(
        <div className={styles.containerSlider}>
          <div className={styles.containerBtn}>
            <button className={styles.nextSlider} 
              onClick={() => swiperRef.current?.slideNext()}><img src='/img/nextArrow.svg' alt="Next button"></img></button>
            <button className={styles.prevSlider} 
              onClick={() => swiperRef.current?.slidePrev()}><img src='/img/nextArrow.svg' alt="Prev button"></img></button>
          </div>
          <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            nextEl:'.nextSlider', 
            prevEl:'.prevSlider', 
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className={styles.mySwiper}
          >
          <SwiperSlide><img src="/img/banner.png" className={styles.banner} alt="banner 1" /></SwiperSlide>
          <SwiperSlide><img src="/img/banner2.png" className={styles.banner} alt="banner 2" /></SwiperSlide>
          <SwiperSlide><img src="/img/banner3.png" className={styles.banner} alt="banner 3" /></SwiperSlide>
          <SwiperSlide><img src="/img/banner4.png" className={styles.banner} alt="banner 4" /></SwiperSlide>
          {/* <SliderBtn
          directionSlide={'prevSlider'}/> */}
          </Swiper>
        </div>

    )
}