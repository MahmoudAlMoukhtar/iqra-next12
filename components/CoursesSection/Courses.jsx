// "use client";
import {useEffect, useState} from "react";
import Course from "../../components/Course/Course";
import Image from "next/image";
import * as api from "../../pages/api";
const Courses = ({courses}) => {
  // const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await api.fetchCourses();
  //       setCourses(res.data);
  //     } catch (error) {
  //       console.log(
  //         "erro in fetch courses from Course Component, error message=>",
  //         error.message
  //       );
  //     }
  //   };
  //   makeRequest();
  // }, []);
  return (
    <section
      id="courses"
      className="flex flex-col  justify-center items-center  w-full mt-10"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold ">Courses</h2>
        <span className="h-1 sm:h-2 w-60 bg-[#ffc265]" />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-10 lg:gap-4  w-full py-10 mt-4 sm:mt-20">
        {courses.map(course => (
          <Course key={course._id} course={course} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 sm:gap-10 w-full bg-[#3cc4ad] px-10 md:px-20 lg:px-40 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <Image
            alt="rating"
            width={112}
            height={112}
            loading="lazy"
            src="/icons/rating.png"
            className="w-20 sm:w-28"
          />
          <span
            className="flex flex-col justify-center text-6xl font-bold text-[#fd5308]"
            id="value1"
          >
            +100
          </span>
          <p
            className="text-md font-semibold"
            style={{textTransform: "uppercase"}}
          >
            Students satisfied with the service
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <Image
            alt="graduate"
            width={112}
            height={112}
            loading="lazy"
            src="/icons/graduate.png"
            className="w-20 sm:w-28"
          />
          <span className="flex flex-col justify-center text-6xl font-bold text-[#fd5308]">
            +200
          </span>
          <p
            className="text-md font-semibold"
            style={{textTransform: "uppercase"}}
          >
            Students
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-white w-60 text-center">
          <Image
            alt="teacherr"
            width={112}
            height={112}
            loading="lazy"
            src="/icons/teacherr.png"
            className="w-20 sm:w-28"
          />
          <span className="text-6xl font-bold text-[#fd5308]">+30</span>
          <p
            className="text-md font-semibold"
            style={{textTransform: "uppercase"}}
          >
            Teacher
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
