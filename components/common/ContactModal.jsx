import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";
import * as api from "../api/index";

const activeStyle = {
  color: "white",
  backgroundColor: "#3cc4ad",
  padding: "20px 12px",
  fontWeight: "bold",
  borderLeft: "8px solid #FF932D",
};
const styles = {
  linkPages:
    "text-[#000] hover:text-white hover:text-white hover:bg-[#3cc4ad] py-6 px-2 font-semibold w-full hover:border-l-8 hover:border-[#FF932D] hover:font-bold w-full transtion duration-200",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50 px-10 py-10",
};

const ContactModal = ({setContactModalShow, contactModalShow}) => {
  const [t, i18n] = useTranslation();
  const [contactMessage, setContactMessage] = useState();

  return (
    <div
      id="modal-nav"
      className={
        contactModalShow ? styles.navBarModal : styles.navBarModalHidden
      }
    >
      <div
        onClick={() => setContactModalShow(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <section
        id="contact"
        className="flex flex-col  gap-2 bg-[#3cc4ad]   w-full sm:w-[600px] py-4 sm:py-10 text-white  px-4 z-10 "
      >
        <div className="flex flex-col items-center gap-2">
          {i18n.language === "en" ? (
            <h4 className="text-2xl sm:text-2xl tracking-[0.2em] font-bold text-center">
              CONTACT US
            </h4>
          ) : (
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              تواصل معنا
            </h2>
          )}
          <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
        </div>
        <form
          onSubmit={async e => {
            e.preventDefault();
            await api.sendContactMessage(contactMessage);
            toast.success("Submit your message in successfull");
          }}
          className={
            i18n.language === "en"
              ? "flex flex-col justify-center items-center gap-2 sm:gap-y-8"
              : "flex flex-col justify-center items-end text-end gap-2 sm:gap-y-8"
          }
        >
          <label
            htmlFor="name"
            className="text-white font-semibold flex flex-col w-[100%]"
          >
            {i18n.language === "en" ? "First Name" : "الاسم الأول"}
            <input
              required
              placeholder={
                i18n.language === "en" ? "First Name" : "الاسم الأول"
              }
              minLength={3}
              type="text"
              name="name"
              id="name"
              className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
              onChange={e =>
                setContactMessage({
                  ...contactMessage,
                  firstName: e.target.value,
                })
              }
            />
          </label>
          <label
            htmlFor="name"
            className="text-white font-semibold flex flex-col w-[100%] rounded"
          >
            {i18n.language === "en" ? "Last Name" : "الاسم الأخير"}

            <input
              required
              placeholder={
                i18n.language === "en" ? "Last Name" : "الاسم الأخير"
              }
              minLength={3}
              type="text"
              name="name"
              id="name"
              className="border-[1px] border-black px-4 py-2  w-[100%] rounded text-black"
              onChange={e =>
                setContactMessage({
                  ...contactMessage,
                  lastName: e.target.value,
                })
              }
            />
          </label>
          <label htmlFor="email" className="text-white font-semibold w-[100%]">
            {i18n.language === "en" ? "Email" : "الأيميل"}

            <input
              required
              placeholder={i18n.language === "en" ? "Email" : "الإيميل"}
              type="email"
              name="email"
              id="email"
              className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
              onChange={e =>
                setContactMessage({...contactMessage, email: e.target.value})
              }
            />
          </label>
          <label
            htmlFor="message"
            className="text-white font-semibold w-[100%]"
          >
            {i18n.language === "en" ? "Message" : "الرسالة"}

            <textarea
              required
              placeholder={i18n.language === "en" ? "Message" : "الرسالة"}
              minLength={10}
              name=""
              id=""
              cols={"100"}
              rows="5"
              className="border-[1px] border-black w-[100%] rounded text-black"
              onChange={e =>
                setContactMessage({
                  ...contactMessage,
                  message: e.target.value,
                })
              }
            ></textarea>
          </label>
          <button className="bg-[#FF932D] p-2 sm:p-4 font-bold text-white transtion duration-200 w-full rounded">
            {i18n.language === "en" ? "SUBMIT" : "إرسال"}
          </button>
        </form>
        <button
          onClick={() => setContactModalShow(false)}
          className="bg-[#ffc265] p-2 sm:p-4 font-bold text-white transtion duration-200 w-full rounded"
        >
          {i18n.language === "en" ? "Exit" : "إغلاق"}
        </button>
      </section>
    </div>
  );
};

export default ContactModal;
