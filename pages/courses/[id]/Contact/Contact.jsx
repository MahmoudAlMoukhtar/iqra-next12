import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import * as api from "../../../api/index.js";

const Contact = ({lng}) => {
  const [contactMessage, setContactMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmitContactMessage = async e => {
    e.preventDefault();
    await api.sendContactMessage(contactMessage);
    // Handle successful submit
    toast.success(
      lng === "en"
        ? "Submit your message in successfull"
        : "تم إرسال رسالتك بنجاح"
    );
    setContactMessage({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="flex-col gap-8 bg-[#3cc4ad] w-full md:w-[500px] py-10 text-white px-4 hidden md:flex">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          {lng === "en" ? "CONTACT US" : "تواصل معنا"}
        </h2>
        <span className="h-1 sm:h-2 w-40 bg-[#ffc265]" />
      </div>
      <form
        onSubmit={handleSubmitContactMessage}
        className={
          lng === "en"
            ? "flex flex-col justify-center items-center gap-y-8"
            : "flex flex-col justify-center items-end text-end gap-y-8"
        }
      >
        <label
          htmlFor="firstName"
          className="text-white font-semibold flex flex-col w-full"
        >
          {lng === "en" ? "First Name" : "الاسم الأول"}
          <input
            required
            placeholder={lng === "en" ? "First Name" : "الاسم الأول"}
            minLength={3}
            type="text"
            name="firstName"
            id="firstName"
            value={contactMessage.firstName}
            className="border-[1px] border-black px-4 py-2 w-full rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, firstName: e.target.value})
            }
          />
        </label>
        <label
          htmlFor="lastName"
          className="text-white font-semibold flex flex-col w-full"
        >
          {lng === "en" ? "Last Name" : "الاسم الأخير"}
          <input
            required
            placeholder={lng === "en" ? "Last Name" : "الاسم الأخير"}
            minLength={3}
            type="text"
            name="lastName"
            id="lastName"
            value={contactMessage.lastName}
            className="border-[1px] border-black px-4 py-2 w-full rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, lastName: e.target.value})
            }
          />
        </label>
        <label htmlFor="email" className="text-white font-semibold w-full">
          {lng === "en" ? "Email" : "الأيميل"}
          <input
            required
            placeholder={lng === "en" ? "Email" : "الإيميل"}
            type="email"
            name="email"
            id="email"
            value={contactMessage.email}
            className="border-[1px] border-black px-4 py-2 w-full rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, email: e.target.value})
            }
          />
        </label>
        <label htmlFor="message" className="text-white font-semibold w-full">
          {lng === "en" ? "Message" : "الرسالة"}
          <textarea
            required
            placeholder={lng === "en" ? "Message" : "الرسالة"}
            minLength={10}
            name=""
            id=""
            cols={"100"}
            rows="5"
            value={contactMessage.message}
            className="border-[1px] border-black w-full rounded text-black"
            onChange={e =>
              setContactMessage({...contactMessage, message: e.target.value})
            }
          ></textarea>
        </label>
        <button className="bg-[#fd5308] p-4 font-bold text-white transition duration-200 w-full rounded">
          {lng === "en" ? "SUBMIT" : "إرسال"}
        </button>
      </form>
    </section>
  );
};
export default Contact;
