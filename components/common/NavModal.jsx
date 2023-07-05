import Link from "next/link";
import React from "react";
//import {useTranslation} from "react-i18next";

const activeStyle = {
  color: "white",
  backgroundColor: "#3cc4ad",
  padding: "20px 12px",
  borderLeft: "8px solid #fd5308",
};

const NavbarModal = ({setNavBarModal, navbarModal}) => {
  //const [t, i18n] = useTranslation();
  const lng = "en";
  const styles = {
    linkPages:
      "text-[#000] hover:text-white hover:text-white hover:bg-[#3cc4ad] py-6 px-2 w-full hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200",
    navBarModalHidden: "hidden",
    navBarModal:
      "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
  };
  return (
    <div
      id="modal-nav"
      className={
        navbarModal
          ? "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50"
          : "hidden"
      }
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        dir={lng === "en" ? "en" : "rtl"}
        className={
          lng === "en"
            ? "bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
            : "bg-white flex flex-col gap-y-4 fixed z-10 top-0 right-0 w-60 min-h-full shadow-2xl animate__animated animate__fadeInRight"
        }
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <ul className="flex flex-col items-start gap-2">
          <Link
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            href="/"
            className={
              "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
            }
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/#Whyus"
            className={
              "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
            }
          >
            {t("nav.whyus")}
          </Link>
          <Link
            href="/#courses"
            className={
              "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
            }
          >
            {t("nav.courses")}
          </Link>
          <Link
            href="/#testimonials"
            className={
              "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
            }
          >
            {t("nav.testimonials")}
          </Link>
          <Link
            href="/#fees"
            className={
              "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
            }
          >
            {t("nav.fees")}
          </Link>

          <Link
            href="/#blogs"
            className={
              "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
            }
          >
            {t("nav.blogs")}
          </Link>
          <Link
            href="/#contact"
            className={
              "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
            }
          >
            {t("nav.contact")}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;
