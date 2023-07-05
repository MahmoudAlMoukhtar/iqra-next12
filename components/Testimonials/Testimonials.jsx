"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import Image from "next/image";
import "swiper/css";
// import {useTranslation} from "react-i18next";

const Testimonials = ({testimoials: data}) => {
  //const [t, i18n] = useTranslation();
  const lng = "en";
  // const [data, setDataTestimonials] = useState();
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await api.getTestimoials();
  //       setDataTestimonials(res.data);
  //     } catch (err) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   makeRequest();
  // }, []);

  //if (loading) return <h1 className="h-20"></h1>;
  return (
    <section
      id="testimonials"
      className="flex flex-col  justify-center items-center gap-10 sm:gap-20 py-10 bg-[#f2ede7] w-full my-10"
    >
      <div className="flex flex-col items-center gap-2 md:w-[600px]">
        <h2 className="flex flex-col items-center text-center px-2 sm:px-0 text-2xl md:text-3xl lg:text-4xl font-bold">
          Testimonials
          <p className="text-sm sm:text-lg font-semibold   text-black text-center pt-2 sm:pt-4 px-4 sm:px-8 w-full py-4 rounded">
            {lng === "en"
              ? "Take a look at some of our amazing review from students"
              : "ألق نظرة على بعض مراجعاتنا المذهلة من الطلاب"}
          </p>
        </h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div className="gap-4 justify-center items-center flex-wrap w-full px-4 md:px-20 lg:px-40 xl:px-60 hidden sm:block">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoplay={{delay: 2000}}
          className="cursor-grap"
        >
          {data.map(t => (
            <SwiperSlide className="w-[500px] h-[200px]" key={t._id}>
              <div className="flex justify-between items-start gap-4 bg-[#3cc4ad] text-white p-6 py-6 transtion duration-200 text-center w-full">
                <div className="flex flex-col items-center w-40">
                  <Image
                    width={160}
                    height={160}
                    loading="lazy"
                    src="/student.jpg"
                    className="w-40 rounded-md"
                    alt="testimonial"
                  />
                  <h4 className="text-sm font-bold">{t.firstName}</h4>
                  <p>Student</p>
                </div>
                <p className="text-start text-sm font-bold w-96">
                  {t.message.slice(0, 220)}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="w-[500px] h-[200px]">
            <div className="flex justify-between items-start gap-4 bg-[#3cc4ad] text-white p-6 py-6 transtion duration-200 text-center w-full">
              <div className="flex flex-col items-center w-40">
                <Image
                  width={160}
                  height={160}
                  loading="lazy"
                  src="/student.jpg"
                  className="w-40 rounded-md"
                  alt="testimonial"
                />
                <h4 className="text-sm font-bold">Atia Salimullah</h4>
                <p>Student</p>
              </div>
              <p className="text-start text-sm font-bold w-96">
                Jzk Brother. The boys led Prayer today at home. Allah gives you
                goodness in this world and the next Ameen. Jzk for being a
                brilliant teacher we are blessed. I am recommending Nour Elquran
                Academy to my friends and family.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[500px] h-[200px]">
            <div className="flex justify-between items-start gap-4 bg-[#3cc4ad] text-white p-6 py-6 transtion duration-200 text-center w-full">
              <div className="flex flex-col items-center w-40">
                <Image
                  width={160}
                  height={160}
                  loading="lazy"
                  src="/student.jpg"
                  className="w-40 rounded-md"
                  alt="testimonial"
                />
                <h4 className="text-sm font-bold">Atia Salimullah</h4>
                <p>Student</p>
              </div>
              <p className="text-start text-sm font-bold w-96">
                Jzk Brother. The boys led Prayer today at home. Allah gives you
                goodness in this world and the next Ameen. Jzk for being a
                brilliant teacher we are blessed. I am recommending Nour Elquran
                Academy to my friends and family.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex gap-4 justify-center items-center flex-wrap w-full px-4 md:px-20 lg:px-40 xl:px-60 sm:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{clickable: true}}
          autoplay={{delay: 2000}}
          className="cursor-grab"
        >
          {data.map(t => (
            <SwiperSlide className="w-[500px] max-h-[200px]" key={t._id}>
              <div className="flex justify-between items-start gap-4 bg-[#3cc4ad] text-white p-6 py-6 transtion duration-200 text-center w-full h-full">
                <div className="flex flex-col items-center w-40">
                  <Image
                    width={160}
                    height={160}
                    loading="lazy"
                    src="/student.jpg"
                    className="w-40 rounded-md"
                    alt="testimonial"
                  />
                  <h4 className="text-sm font-bold">{t.firstName}</h4>
                  <p>Student</p>
                </div>
                <p className="text-start text-sm font-bold w-96">
                  {t.message.slice(0, 220)}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="w-[500px] h-[200px]">
            <div className="flex justify-between items-start gap-4 bg-[#3cc4ad] text-white p-6 py-6 transtion duration-200 text-center w-full">
              <div className="flex flex-col items-center w-40">
                <Image
                  width={160}
                  height={160}
                  loading="lazy"
                  src="/student.jpg"
                  className="w-40 rounded-md"
                  alt="testimonial"
                />
                <h4 className="text-sm font-bold">Atia Salimullah</h4>
                <p>Student</p>
              </div>
              <p className="text-start text-sm font-bold w-96">
                Jzk Brother. The boys led Prayer today at home. Allah gives you
                goodness in this world and the next Ameen. Jzk for being a
                brilliant teacher we are blessed. I am recommending Nour Elquran
                Academy to my friends and family.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[500px] h-[200px]">
            <div className="flex justify-between items-start gap-4 bg-[#3cc4ad] text-white p-6 py-6 transtion duration-200 text-center w-full">
              <div className="flex flex-col items-center w-40">
                <Image
                  width={160}
                  height={160}
                  loading="lazy"
                  src="/student.jpg"
                  className="w-40 rounded-md"
                  alt="testimonial"
                />
                <h4 className="text-sm font-bold">Atia Salimullah</h4>
                <p>Student</p>
              </div>
              <p className="text-start text-sm font-bold w-96">
                Jzk Brother. The boys led Prayer today at home. Allah gives you
                goodness in this world and the next Ameen. Jzk for being a
                brilliant teacher we are blessed. I am recommending Nour Elquran
                Academy to my friends and family.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
