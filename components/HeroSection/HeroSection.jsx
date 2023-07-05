"use client";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {Autoplay, Navigation} from "swiper";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <AiOutlineArrowRight className="cursor-pointer font-bold" size={20} />
    </button>
  );
};
const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <AiOutlineArrowLeft className="cursor-pointer font-bold" size={20} />
    </button>
  );
};

const HeroSection = () => {
  return (
    <div className=" flex justify-center text-black  w-full sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] overflow-y-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={0}
        loop={true}
        navigation
        autoplay={{delay: 4000}}
        className="cursor-grap"
      >
        <SwiperSlide className="" key="top-view-islamic ke">
          <Image
            width={1200}
            height={600}
            loading="lazy"
            src="/top-view-islamic-new-year-concept-with-copy-space.jpg"
            className="w-full relative object-cover	h-[300px] sm:h-full brightness-[0.70]"
            alt="slide1"
          />
          <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-50%] sm:translate-y-[-80%]">
            <SlidePrevButton />
            <div className="flex flex-col items-center bg-[#3cc4ad] p-2 rounded-b text-white gap-2">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-[#3cc4ad]  rounded text-black">
                Highest Quality & Low Fees
              </h1>

              <p className="text-sm sm:text-lg font-semibold w-80 sm:w-auto bg-[#3cc4ad] rounded-b text-black">
                IQRA Arabic Quran welcomes students to join its engaging
                community anytime.
              </p>
            </div>
            <a
              href="#fees"
              className="py-2 px-8 rounded bg-[#fd5308] text-white font-bold"
            >
              Show Fees
            </a>
            <SlideNextButton />
          </div>
        </SwiperSlide>

        <SwiperSlide className="" key="quran2.jpg">
          <Image
            width={1200}
            height={600}
            loading="lazy"
            src="/quran2.jpg"
            className="w-full  relative object-cover	h-[300px] sm:h-full brightness-[0.70]"
            alt="slide2"
          />
          <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-50%] sm:translate-y-[-80%] ">
            <SlidePrevButton />

            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold bg-[#3cc4ad] p-2 rounded text-black">
              We challenge you to master reading Arabic in one single month
            </h1>

            <Link
              href="/auth"
              className="py-2 px-8 rounded bg-[#fd5308] text-white font-bold"
            >
              Login
            </Link>
            <SlideNextButton />
          </div>
        </SwiperSlide>
        <SwiperSlide className="" key="photo1678924784">
          <Image
            width={1200}
            height={600}
            loading="lazy"
            src="/vecteezy_verses-of-the-holy-quran_6034228_263.jpg"
            className="w-full relative object-cover h-[300px] sm:h-full brightness-[0.70]"
            alt="slide2"
          />
          <div className="flex flex-col items-center justify-center text-center gap-6 w-full absolute top-[50%] left-[50%] sm:px-20 translate-x-[-50%] translate-y-[-50%] sm:translate-y-[-80%] ">
            <SlidePrevButton />

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black bg-[#3cc4ad] p-2 rounded">
              IQRA and start your journey towards Al_Jannah
            </h1>

            <a
              href="#courses"
              className="py-2 px-8 rounded bg-[#fd5308] text-white font-bold"
            >
              Our courses
            </a>
            <SlideNextButton />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
