"use client";
import {useState} from "react";
import * as api from "../../pages/api";
import toast, {Toaster} from "react-hot-toast";

const Contact = () => {
  const lng = "en";
  //const [t, i18n] = useTranslation();
  const [contactMessage, setContactMessage] = useState();

  return (
    <section
      id="contact"
      className="flex flex-col justify-between gap-8 bg-[#3cc4ad] w-full  py-10  text-white  px-4 sm:px-10 lg:px-20  "
    >
      <div className="flex flex-col items-center gap-2">
        {lng === "en" ? (
          <h4 className="text-3xl sm:text-4xl tracking-[0.2em] font-bold text-center">
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
          lng === "en"
            ? "flex flex-col justify-center items-center gap-y-8"
            : "flex flex-col justify-center items-end text-end gap-y-8"
        }
      >
        <label
          htmlFor="name"
          className="text-white font-semibold flex flex-col w-[100%]"
        >
          {lng === "en" ? "First Name" : "الاسم الأول"}
          <input
            dir={lng === "en" ? "en" : "rtl"}
            required
            placeholder={lng === "en" ? "First Name" : "الاسم الأول"}
            minLength={3}
            type="text"
            name="name"
            id="name"
            className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, firstName: e.target.value})
            }
          />
        </label>
        <label
          htmlFor="name"
          className="text-white font-semibold flex flex-col w-[100%] rounded"
        >
          {lng === "en" ? "Last Name" : "الاسم الأخير"}

          <input
            dir={lng === "en" ? "en" : "rtl"}
            required
            placeholder={lng === "en" ? "Last Name" : "الاسم الأخير"}
            minLength={3}
            type="text"
            name="name"
            id="name"
            className="border-[1px] border-black px-4 py-2  w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, lastName: e.target.value})
            }
          />
        </label>
        <label htmlFor="email" className="text-white font-semibold w-[100%]">
          {lng === "en" ? "Email" : "الأيميل"}

          <input
            dir={lng === "en" ? "en" : "rtl"}
            required
            placeholder={lng === "en" ? "Email" : "الإيميل"}
            type="email"
            name="email"
            id="email"
            className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, email: e.target.value})
            }
          />
        </label>
        <label htmlFor="message" className="text-white font-semibold w-[100%]">
          {lng === "en" ? "Message" : "الرسالة"}

          <textarea
            dir={lng === "en" ? "en" : "rtl"}
            required
            placeholder={lng === "en" ? "Message" : "الرسالة"}
            minLength={10}
            name="message"
            id="message"
            cols={"100"}
            rows="5"
            className="border-[1px] border-black px-4 py-2 w-[100%] rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, message: e.target.value})
            }
          ></textarea>
        </label>
        <button className="bg-[#fd5308] p-4 font-bold text-white transtion duration-200 w-full rounded">
          {lng === "en" ? "SUBMIT" : "إرسال"}
        </button>
      </form>
      {/* <Toaster /> */}
    </section>
  );
};
export default Contact;
