// Use named imports for React hooks
import {useQuery} from "react-query";
// Use absolute imports for components
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import WhyUS from "../components/WhyUS/WhyUS";
import Courses from "../components/CoursesSection/Courses.jsx";
import Fees from "../components/Fees/Fees";
import Testimonials from "../components/Testimonials/Testimonials";
import BlogsSection from "../components/BlogsSction/BlogsSction";
import CustomizedAccordions from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
// Use absolute imports for api functions
import * as api from "./api/index.js";
import Head from "next/head.js";

// Use getStaticProps to fetch data at build time
export async function getStaticProps() {
  // Use Promise.all to fetch data in parallel
  const [courses, blogs, testimoials] = await Promise.all([
    api.fetchCourses(),
    api.fetchPosts(),
    api.getTestimoials(),
  ]);
  // Return the data as props
  return {
    props: {
      courses: courses.data,
      blogs: blogs.data,
      testimoials: testimoials.data,
    },
  };
}

const Home = ({courses, blogs, testimoials}) => {
  // Use useQuery to refetch data on the client side if needed
  const {data: coursesData} = useQuery("courses", api.fetchCourses, {
    initialData: courses,
  });
  const {data: blogsData} = useQuery("blogs", api.fetchPosts, {
    initialData: blogs,
  });
  const {data: testimoialsData} = useQuery("testimoials", api.getTestimoials, {
    initialData: testimoials,
  });
  return (
    <div className="flex flex-col items-center w-full relative min-h-screen">
      <Head>
        <title>Iqra | Home Page</title>
      </Head>
      <main>
        <HeroSection />
        <WhyUS />
        <Courses courses={courses} />
        <BlogsSection blogs={blogs} />
        <Fees />
        <Testimonials testimoials={testimoials} />
        <Contact />
        <CustomizedAccordions />
      </main>
    </div>
  );
};

export default Home;
