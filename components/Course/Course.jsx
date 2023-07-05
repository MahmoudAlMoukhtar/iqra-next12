"use client";
import Image from "next/image";
import Link from "next/link";
//import {useRouter} from "next/router";

const Course = ({course}) => {
  const language = "en";
  //const router = useRouter();
  const itemVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {y: 0, opacity: 1},
  };

  return (
    <Link
      href={`/courses/${course._id}`}
      key={course._id}
      variants={itemVariants}
      className="item flex flex-col items-center justify-between hover:text-black transition duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px] bg-[#fd5308] rounded-t-full pt-4 cursor-pointer hover:translate-y-[-10px] mb-10"
    >
      <div className="">
        <Image
          src={course.thum}
          alt="Course thumbnail"
          width={240}
          height={200}
          loading="lazy"
          className="w-40 sm:w-60 rounded-t-full h-[150px] sm:h-[200px] px-4 bg-[#fd5308]"
        />
      </div>
      <h3 className=" text-sm bg-[#3cc4ad] text-white w-full h-10 sm:text-md">
        {language === "en" ? course.title : course.titleAr}
      </h3>
    </Link>
  );
};

export default Course;
