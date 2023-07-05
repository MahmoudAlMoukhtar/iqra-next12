// Use named imports for React hooks
import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
// Use absolute imports for components and api functions
import ContactSection from "../../../components/Contact/Contact";
import CourseSection from "./CourseSection";
import ContactButtons from "../../../components/Contact/ContactButtons";
import TestimonialForm from "./TestimonialForm";
import CourseTitle from ".//CourseTitle";
import ReactModal from "react-modal";

import * as api from "../../api/index";
import Contact from "./Contact/Contact";

// Use getServerSideProps to fetch data on the server side
export async function getServerSideProps(context) {
  // Get the params from the context
  const {params} = context;
  // Try to fetch the course by id
  try {
    const course = await api.fetchCourseById(params.id);
    // Return the course as props
    return {
      props: {
        course: course.data,
      },
    };
  } catch (error) {
    // If there is an error, log it and return a 404 page
    console.error("Error in fetchCourseById:", error.message);
    return {
      notFound: true,
    };
  }
}

const DetailCourse = ({setContactModalShow, course}) => {
  // Use useQuery to refetch data on the client side if needed
  const {data: courseData} = useQuery(
    ["course", course._id],
    () => fetchCourseById(course._id),
    {
      initialData: course,
    }
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Use useState to store the user data
  const [user, setUser] = useState();
  // Use useEffect to get the user data from local storage
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userIqraa")));
  }, []);

  // Use a constant for the language
  const lng = "en";

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      height: "80%",
      backgroundColor: "#fff",
      zIndex: 999999,
      position: "fixed",
      padding: "0px",
    },
    overlay: {
      zIndex: 88888,
      position: "fixed",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  if (course) {
    return (
      <div
        className={
          lng === "en"
            ? "flex justify-between flex-col md:flex-row gap-4 w-full lg:px-20 py-4 sm:py-10"
            : "flex justify-between flex-col md:flex-row-reverse gap-4 w-full lg:px-20 py-4 sm:py-10"
        }
      >
        <div className="flex flex-col items-start gap-10 text-black w-full rounded">
          {courseData.sections.map((c, i) => (
            <div
              className="flex flex-col items-center gap-10 w-full"
              key={c._id}
            >
              {i === 0 && (
                <div
                  className={
                    lng === "en"
                      ? "flex flex-col sm:flex-row sm:justify-between items-center gap-2 w-full px-2 md:px-4"
                      : "flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-2 w-full px-2 md:px-4"
                  }
                >
                  <CourseTitle lng={lng} title={c.title} titleAr={c.titleAr} />

                  <ContactButtons lng={lng} openModal={openModal} />
                </div>
              )}
              {courseData.sections.length > 0 && (
                <CourseSection c={c} lng={lng} />
              )}
            </div>
          ))}
          <TestimonialForm lng={lng} user={user} />
        </div>
        <Contact lng={lng} />
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <ContactSection lng={lng} />
        </ReactModal>
      </div>
    );
  }
};
export default DetailCourse;
