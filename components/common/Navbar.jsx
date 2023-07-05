// "use client";
// import {useTranslation} from "react-i18next";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import toast, {Toaster} from "react-hot-toast";

const Navbar = () => {
  const lng = "en";
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userIqraa")));
  }, []);
  return (
    <nav
      className={
        lng === "en"
          ? "flex flex-col md:flex-row justify-between items-center gap-2 py-2 sm:py-4 px-4  lg:px-10 w-full shadow-xl text-white bg-[#3cc4ad]"
          : "flex flex-col md:flex-row-reverse justify-between items-center gap-2 py-2 sm:py-4 px-4  lg:px-10 w-full shadow-xl text-white bg-[#3cc4ad]"
      }
    >
      <div className="flex justify-center gap-2 sm:gap-4">
        <div target="blank" className="flex items-center gap-2">
          <AiOutlineMail className="text-md sm:text-xl" />
          <div className="flex flex-col text-center text-xs md:text-lg">
            <p className="text-[12px] sm:text-[13px] font-bold">
              iqraarabicquran@gmail.com
            </p>
          </div>
        </div>
        <a
          target="blank"
          href="http://wa.me/+201012750418"
          className="flex items-center gap-2"
        >
          <AiOutlineWhatsApp className="text-md sm:text-xl" />
          <div className="flex flex-col text-center text-xs md:text-lg">
            <p className="text-xs sm:text-md font-bold">+201012750418</p>
          </div>
        </a>
      </div>
      <div
        className={
          lng === "en"
            ? "flex justify-center  gap-2 items-center"
            : "flex flex-row-reverse justify-center  gap-2 items-center"
        }
      >
        <ul className="flex items-center gap-2">
          <a
            target="blank"
            href="https://www.facebook.com/profile.php?id=100090853364224"
            className="rounded-full p-[4px] hover:bg-[#fd5308]"
          >
            <AiFillFacebook size={25} />
          </a>
          <a
            href="http://wa.me/+201012750418"
            target="blank"
            className="rounded-full p-[4px] hover:bg-[#fd5308]"
          >
            <AiOutlineWhatsApp size={25} />
          </a>

          <a
            target="blank"
            href="https://www.youtube.com/channel/UCCJVbBYw65WrGfY6aovCdzA"
            className="rounded-full p-[4px] hover:bg-[#fd5308]"
          >
            <AiFillYoutube size={25} />
          </a>
        </ul>

        {!user ? (
          <Link
            className="font-semibold sm:font-bold text-sm sm:text-md py-[6px] px-4 bg-[#fd5308] transtion duration-200 text-white rounded"
            href="/auth"
          >
            Free Evaluation Sesstion
          </Link>
        ) : (
          <button
            className="font-semibold sm:font-bold text-sm sm:text-md py-[6px] px-4 bg-[#fd5308] transtion duration-200 text-white rounded"
            onClick={() => {
              localStorage.removeItem("userIqraa");
              console.log("logout");
              toast.success("Logout successfully");
              router.push("/");
            }}
          >
            Logout
          </button>
        )}
      </div>
      {/*<Toaster />*/}
    </nav>
  );
};

export default Navbar;
