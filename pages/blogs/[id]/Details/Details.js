import React from "react";
import moment from "moment";
import Comments from "../Comments/Comments";
import Image from "next/image";
//import {useTranslation} from "react-i18next";

const Details = ({post}) => {
  //const [t, i18n] = useTranslation();
  const lng = "en";
  return (
    <div
      className={
        lng === "en"
          ? "flex flex-col gap-4 w-full"
          : "flex flex-col items-end gap-4 w-full"
      }
    >
      <div
        className={
          lng === "en"
            ? "flex justify-start items-center gap-4 text-[#848d92]"
            : "flex flex-row-reverse justify-start items-center gap-4 text-[#848d92]"
        }
      >
        <Image
          src="/download.jpg"
          width={100}
          height={100}
          className="rounded-full w-10 h-10"
          alt="creator post"
        />
        <div
          className={
            lng === "en"
              ? "flex items-center gap-2"
              : "flex flex-row-reverse items-center gap-2"
          }
        >
          <h1 className="text-sm">
            {lng === "en" ? "By Admin" : "بواسطة الآدمن"}
          </h1>
          -
          <p className="text-xs">
            {post?.createdAt &&
              moment(post?.createdAt).utc().format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
      <p
        className={lng === "en" ? "text-[#848d92]" : "text-[#848d92] text-end"}
      >
        {lng === "en" ? post?.message : post?.messageAr}
      </p>
      <Comments post={post} />
    </div>
  );
};

export default Details;
