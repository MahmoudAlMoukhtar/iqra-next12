"use client";
// import {useTranslation} from "react-i18next";
import BlogItem from "../../components/Blog";
import Link from "next/link";
import "swiper/css";

const BlogsSection = ({blogs: blogsData}) => {
  if (blogsData.length !== 0) {
    return (
      <section
        id="blogs"
        className="flex flex-col  justify-center items-center gap-10 py-10 bg-[#f2ede7] w-full my-10"
      >
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Our Blogs
          </h2>
          <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
        </div>

        <div className="flex gap-20 sm:gap-4 justify-center items-center flex-wrap w-full px-2 sm:px-4 sm:px-20">
          {blogsData.map(b => <BlogItem b={b} key={b._id} />).slice(0, 3)}
        </div>
        <Link
          href="/blogs"
          className="flex gap-2 items-center bg-[#fd5308] rounded-full py-4 px-8 font-bold"
        >
          All Blogs
        </Link>
      </section>
    );
  } else {
    return <div className="h-20"></div>;
  }
};

export default BlogsSection;

/* 

  //const [t, i18n] = useTranslation();
  // const [blogsData, setBlogsData] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     const res = await api.fetchPosts();
  //     setBlogsData(res.data);
  //     setLoading(false);
  //   };
  //   makeRequest();
  // }, []);

  // if (loading) return <div></div>;
  //console.log(blogsData);
*/
