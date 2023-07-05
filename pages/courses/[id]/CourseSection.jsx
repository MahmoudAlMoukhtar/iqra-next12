import Image from "next/image";

const CourseSection = ({lng, c}) => (
  <div className="flex flex-col items-center gap-10 w-full" key={c?._id}>
    {c?.image && (
      <Image
        loading="lazy"
        width={500}
        height={700}
        src={c.image}
        className="w-full rounded"
        alt="course"
      />
    )}
    {c?.video && (
      <iframe
        width="100%"
        className="h-[300px] sm:h-[400px] px-2"
        src={`https://www.youtube.com/embed/${c.video}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    )}
    <p
      className={`${
        lng === "en" ? "text-start" : "text-end"
      } text-lg p-4 w-full`}
      style={{whiteSpace: "pre-wrap"}}
    >
      {lng === "ar" && c?.descriptionAr ? c?.descriptionAr : c?.description}
    </p>
  </div>
);

export default CourseSection;
