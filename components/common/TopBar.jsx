"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ImMenu} from "react-icons/im";

const TopBar = () => {
  const [navBarModal, setNavBarModal] = useState(false);
  const lng = "en";

  const handleMenu = () => {
    setNavBarModal(!navBarModal);
  };

  const styles = {
    linkPages: `text-lg sm:text-[13px] md:text-[14px] lg:text-lg sm:py-1 px-2 lg:px-4 
      hover:bg-[#fd5308] hover:text-white transtion duration-200 text-black rounded`,
    modalNav: `fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50`,
    contentModalCollaps: `bg-white flex flex-col gap-y-4 fixed z-10 top-0 w-60 min-h-full shadow-2xl 
      animate__animated animate__fadeInLeft`,
    activeStyle: {
      color: "white",
      backgroundColor: "#fd5308",
      padding: "2px 12px",
      borderRadius: "3px",
    },
  };

  return (
    <React.Fragment>
      <header
        className={`flex gap-4 justify-between items-center bg-[#f2ede7] px-4 sm:px-10 w-full py-2 text-[#000] 
          ${lng !== "en" && "flex-row-reverse lg:px-20"}`}
      >
        <Link href="/">
          <Image
            loading="lazy"
            width={128}
            height={128}
            src="/test.png"
            className="w-20 md:w-32"
            alt="iqraa"
          />
        </Link>

        <ul
          className={`hidden absolute md:flex md:static sm:items-center md:gap-2 uppercase 
            ${lng !== "en" && "flex-row-reverse"}`}
        >
          <Link href="/" className={styles.linkPages}>
            Home
          </Link>
          <Link href="/#Whyus" className={styles.linkPages}>
            Why US
          </Link>
          <Link href="/#courses" className={styles.linkPages}>
            Courses
          </Link>
          <Link href="/#testimonials" className={styles.linkPages}>
            Testimonials
          </Link>
          <Link href="/#fees" className={styles.linkPages}>
            Fees
          </Link>

          <Link href="/#blogs" className={styles.linkPages}>
            Blogs
          </Link>
          <Link href="/#contact" className={styles.linkPages}>
            Contact
          </Link>
        </ul>

        <ImMenu
          size={35}
          color="#000"
          onClick={handleMenu}
          className="cursor-pointer text-white"
        />
      </header>

      {navBarModal && (
        <div
          id="modal-nav"
          className={
            navBarModal
              ? "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50"
              : "hidden"
          }
        >
          <div
            onClick={handleMenu}
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
            <div id="header-cart" className="my-2 w-full">
              <button onClick={handleMenu} className="font-bold ml-4">
                X
              </button>
            </div>
            <ul className="flex flex-col items-start gap-2">
              <Link
                href="/"
                className={
                  "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
                }
              >
                Home
              </Link>
              <Link
                href="/#Whyus"
                className={
                  "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
                }
              >
                Why Us
              </Link>
              <Link
                href="/#courses"
                className={
                  "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
                }
              >
                Courses
              </Link>
              <Link
                href="/#testimonials"
                className={
                  "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
                }
              >
                Testimonials
              </Link>
              <Link
                href="/#fees"
                className={
                  "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
                }
              >
                Fees
              </Link>

              <Link
                href="/#blogs"
                className={
                  "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
                }
              >
                Blogs
              </Link>
              <Link
                href="/#contact"
                className={
                  "text-[#000] hover:text-white hover:bg-[#3cc4ad] py-6 px-2  hover:border-l-8 hover:border-[#fd5308] hover:font-bold w-full transtion duration-200"
                }
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TopBar;
