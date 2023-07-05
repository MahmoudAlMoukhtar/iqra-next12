import {use} from "react";
import * as api from "../api/index";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({b}) => {
  const lng = "en";

  return (
    <Link
      href={`/blogs/${b._id}`}
      className={
        lng === "en"
          ? "flex flex-col items-start justify-between gap-10 mb-4 w-80  rounded shadow-xl text-start   hover:scale-[1.02] transtion duration-200"
          : "flex flex-col items-end justify-between gap-10 mb-4 w-80 sm:w-96 rounded shadow-xl text-end  hover:scale-[1.02] transtion duration-200"
      }
    >
      <Image
        alt="blogImage"
        width={340}
        height={250}
        loading="lazy"
        src={b.image}
        className="w-80 sm:w-96 h-[250px] rounded-t-md"
      />
      <div
        className={
          lng === "en"
            ? "flex flex-col justify-end items-start gap-10 text-start h-full w-full"
            : "flex flex-col justify-end items-end gap-10 text-end h-full w-full"
        }
      >
        <p className="text-xl font-semibold  px-4">
          {lng === "en" ? b.title : b.titleAr}
        </p>
        <p className="w-full text-sm px-4">
          {lng === "en" ? b.message.substr(0, 200) : b.messageAr.substr(0, 200)}
          <span className="mx-1 opacity-[0.6] text-3xl">.....</span>
        </p>
        <button className="rounded bg-[#3cc4ad] py-2 px-4 w-full font-bold text-sm sm:text-md">
          {lng === "en" ? "See more" : "رؤية المزيد"}
        </button>
      </div>
    </Link>
  );
};

export async function getStaticProps() {
  try {
    const blogs = await api.fetchPosts();
    // Return the blogs as props
    return {
      props: {
        blogs: blogs.data,
      },
    };
  } catch (error) {
    // If there is an error, log it and return a 404 page
    console.error("Error in fetchblogs:", error.message);
    return {
      notFound: true,
    };
  }
}

const Blogs = ({blogs: blogsData}) => {
  return (
    <section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.7}}
      id="blogs"
      className="flex flex-col  justify-center items-center gap-10 py-10 bg-[#f2ede7] w-full my-10"
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold text-center">All Our Blogs</h2>
        <span className="h-2 w-40 bg-[#ffc265]" />
      </div>
      <div className="flex gap-20 sm:gap-4 justify-center items-center flex-wrap w-full px-2 sm:px-4 sm:px-20 ">
        {blogsData.map(b => (
          <BlogItem b={b} key={b._id} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
