import Image from "next/image";
import Link from "next/link";
import banar1 from "../public/img/asma_product_1.jpg";
import banar2 from "../public/img/asma_product_2.jpg";
import banar3 from "../public/img/asmaa_product.jpg";
import circles_top from "../public/img/svg/luxe_couture_1.svg";
import circles_srta from "../public/img/svg/luxe_couture_2.svg";
import srta1 from "../public/img/svg/luxe_couture_3.svg";
import mane_circles from "../public/img/svg/luxe_couture_5.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const ManeBanner = () => {
  return (
    <section className="bg-[#fff9f4] py-[128px] maneBanner overflow-hidden flex  justify-between lgx:flex-col relative  w-full max-w-[1360px] mx-auto">
      <div className="maneBanner_circles_top">
        <Image src={circles_top} alt="" className="" />
      </div>
      {/* left */}
      <div className="flex  flex-col relative gap-[40px] ml-[90px]">
        <div className="maneBanner_circles_srta">
          <Image src={circles_srta} alt="" className="" />
        </div>
        <h1 className="font-Seasons_Bold font-[800] relative maneBanner_h1 inline-block  text-[80px] capitalize max-w-[200px]  leading-[80px] z-10 ">
          Women Fashion
        </h1>
        <p className="z-10 text-[30px] font-[300] capitalize max-w-[400px]">
          Buy our best fashion just for you in our official store today
        </p>
        <Link
          className=" bg-[#dfc392] flex items-center   gap-2 text-[#1F1F1F] rounded-[15px]  px-[36px] py-[13px] "
          href="/"
        >
          <i className="ri-shopping-bag-fill text-[20px] "></i>
          <span className="font-TAN_PEARL font-[400] text-[20px]   ">
            shop now
          </span>
        </Link>
        <div className="relative maneBanner_circles"></div>
      </div>
      <div className="container_">
        <div className="maneBanner_star_top">
          <Image src={srta1} alt="" className="" />
        </div>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides="true"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="swiper_container"
        >
          <SwiperSlide>
            <Image src={banar1} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={banar3} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={banar2} alt="" className="" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
        <div className="maneBanner_star_bottom">
          <Image src={srta1} alt="" className="" />
        </div>
      </div>
      <div className="maneBanner_circles_bottom">
        <Image src={circles_top} alt="" className="" />
      </div>
      <div className="maneBanner_mane_circles">
        <Image src={mane_circles} alt="" className="" />
      </div>
    </section>
  );
};

export default ManeBanner;
