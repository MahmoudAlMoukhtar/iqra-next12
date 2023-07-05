import Image from "next/image";

const Feature = ({iconSrc, title}) => {
  return (
    <div
      className={`item flex flex-col items-center gap-2 sm:gap-4 bg-[#3cc4ad] text-white px-6 py-4 sm:py-6 transtion duration-200 w-40 sm:w-60 text-center h-[150px] sm:h-[200px]`}
    >
      <Image height={80} width={80} loading="lazy" src={iconSrc} alt={title} />
      <h3 className="text-xs sm:text-sm sm:font-bold">{title}.</h3>
    </div>
  );
};

export default Feature;
