const CourseTitle = ({lng, title, titleAr}) => {
  return (
    <h2
      className={`text-xl lg:text-3xl font-bold w-full ${
        lng === "en" ? "text-start" : "text-end"
      }`}
    >
      {lng === "en" ? title?.toUpperCase() : titleAr?.toUpperCase()}
    </h2>
  );
};
export default CourseTitle;
