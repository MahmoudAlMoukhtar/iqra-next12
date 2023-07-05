import React from "react";
//import {useTranslation} from "react-i18next";
import {AiOutlineWhatsApp} from "react-icons/ai";
import moment from "moment";
import Image from "next/image";

const HeroDetailSection = ({post}) => {
  //const [t, i18n] = useTranslation();
  console.log(post);
  const lng = "en";
  return (
    <section className="relative w-full">
      <div>
        {post?.image && (
          <Image
            src={post.image}
            loading="lazy"
            width={1200}
            height={1200}
            alt="post"
            className="w-full relative brightness-[0.30]"
          />
        )}
      </div>
      <div className="flex flex-col items-center gap-6 absolute  text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full sm:w-auto">
        <h3 className=" text-center text-white text-3xl sm:text-5xl font-md">
          {lng === "en" ? post?.title : post?.titleAr}
        </h3>
        <div className="flex justify-between sm:justify-center items-center gap-2 text-sm">
          <Image
            src="/download.jpg"
            alt="creator post"
            width={100}
            height={100}
            className="rounded-full w-8"
          />
          <div className="flex justify-center gap-2">
            <h6>{lng === "en" ? "By Admin" : "بواسطة الآدمن"}</h6>
            {" - "}
            <h6>
              {post?.createdAt &&
                moment(post?.createdAt).utc().format("YYYY-MM-DD")}
            </h6>
          </div>
        </div>
        <a
          href="http://wa.me/+201012750418"
          target="blank"
          className="flex justify-center gap-2 items-center bg-[#2e9175] py-4 px-8 font-bold rounded w-40 text-white"
        >
          <div>
            <AiOutlineWhatsApp size={25} />
          </div>
          Whatsapp
        </a>
      </div>
    </section>
  );
};
export default HeroDetailSection;
