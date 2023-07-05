import {AiOutlineWhatsApp} from "react-icons/ai";

const ContactButtons = ({lng, openModal}) => (
  <div
    className={`md:w-auto flex flex-row ${
      lng === "en" ? "justify-center" : "justify-end"
    } gap-1 w-full`}
  >
    <a
      href="http://wa.me/+201012750418"
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center gap-2 items-center bg-[#2e9175] py-2 px-2 lg:py-4 lg:px-8 font-bold rounded w-full text-white text-xs sm:text-sm md:text-md"
    >
      <div>
        <AiOutlineWhatsApp size={20} />
      </div>
      {lng === "en" ? "Whatsapp" : "الواتساب"}
    </a>
    <button
      onClick={openModal}
      target="_blank"
      className="flex justify-center gap-2 items-center bg-[#fd5308] py-2 px-2 lg:py-4 lg:px-8 font-bold rounded w-full text-white text-xs sm:text-sm md:text-md md:hidden"
    >
      {lng === "en" ? "Send Message" : "أرسل رسالة"}
    </button>
  </div>
);

export default ContactButtons;
