"use client";
import {motion} from "framer-motion";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import "swiper/css";
import Feature from "./Feature";
import Image from "next/image";

//SwiperCore.use([Pagination, Autoplay, Navigation]);

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

const WhyUs = () => {
  const animationContainer = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const animationItem = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      iconSrc: "/icons/experience.png",
      title: "Native and experienced Tutors",
    },
    {
      iconSrc: "/icons/teacher.png",
      title: "Male and female teachers. and One to one",
    },
    {
      iconSrc: "/icons/onlineCourse1.png",
      title: "All Islamic courses are available",
    },
    {
      iconSrc: "/icons/scholarship.png",
      title: "Full interrest to the educational process",
    },
    {
      iconSrc: "/icons/period.png",
      title: "Periodic monitoring of students, levels and monthly reports",
    },
    {
      iconSrc: "/icons/easy-to-use.png",
      title: "Easy handling for all age groups",
    },
    {
      iconSrc: "/icons/handling.png",
      title: "Flexibility in dealing and paying expenses",
    },
    {
      iconSrc: "/icons/webinar.png",
      title: "Freedom to choose the right course and lesson",
    },
    {
      iconSrc: "/icons/choice.png",
      title: "Independence in the hours and courses chosen by the student",
    },
    {
      iconSrc: "/icons/24-hours.png",
      title: "24-hour service, 7 days a week",
    },
    {
      iconSrc: "/icons/flexible.png",
      title: "Flexibility in the work invironment",
    },
    {
      iconSrc: "/icons/salary.png",
      title: "Saving money in terms of course value",
    },
  ];

  return (
    <section
      id="Whyus"
      className="flex flex-col  justify-center items-center gap-10 sm:gap-20 py-10 w-full"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold">Why Us</h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
      </div>
      <motion.div
        variants={animationContainer}
        whileInView="visible"
        initial="hidden"
        className={`gap-4 justify-center items-center flex-wrap hidden sm:flex `}
      >
        {features.map(feature => (
          <motion.div variants={animationItem} key={feature.title}>
            <Feature {...feature} />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex gap-4 justify-center items-center flex-wrap w-full px-4 md:px-20 lg:px-40 xl:px-60 sm:hidden">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{clickable: true}}
          autoplay={{delay: 2000}}
          className="cursor-grab"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="w-[500px] h-[200px]">
              <div className="item flex  items-center gap-2 sm:gap-4 bg-[#3cc4ad] text-white px-6 py-4 sm:py-6 transtion duration-200  text-center h-[150px] sm:h-[200px]">
                <SlidePrevButton />
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                  <Image
                    height={80}
                    width={80}
                    loading="lazy"
                    src={`${feature.iconSrc}`}
                    className="w-14 sm:w-20"
                    alt="experience"
                  />
                  <h3 className="text-xs sm:text-sm sm:font-bold">
                    {feature.title}
                  </h3>
                </div>
                <SlideNextButton />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyUs;
