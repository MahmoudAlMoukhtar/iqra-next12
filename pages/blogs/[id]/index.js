// Use named imports for React hooks
import {useQuery} from "react-query";
// Use absolute imports for components and api functions
import HeroDetailSection from ".//HeroDetailSection/HeroDetailSection";
import Details from "./Details/Details";
import * as api from "../../api/index";

// Use getServerSideProps to fetch data on the server side
export async function getServerSideProps(context) {
  // Get the params from the context
  const {params} = context;
  // Try to fetch the blog by id
  try {
    const blog = await api.fetchPostById(params.id);
    // Return the blog as props
    return {
      props: {
        blog: blog.data,
      },
    };
  } catch (error) {
    // If there is an error, log it and return a 404 page
    console.error("Error in fetchPostById:", error.message);
    return {
      notFound: true,
    };
  }
}

const BlogPage = ({blog}) => {
  // Use useQuery to refetch data on the client side if needed
  const {data: blogData} = useQuery(
    ["blog", blog._id],
    () => api.fetchPostById(blog._id),
    {
      initialData: blog,
    }
  );
  return (
    <div className="flex flex-col sm:px-10 md:px-20 w-full">
      <HeroDetailSection post={blog} />
      <section className="bg-white flex flex-wrap items-center md:items-start md:flex-nowrap lg:flex-row justify-center gap-4 p-4 w-full">
        <Details post={blog} />
      </section>
    </div>
  );
};

export default BlogPage;
