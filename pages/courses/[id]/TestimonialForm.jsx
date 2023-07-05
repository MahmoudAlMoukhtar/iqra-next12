import {useState} from "react";
import jwt_decode from "jwt-decode";
import toast, {Toaster} from "react-hot-toast";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import * as api from "../../api";

const TestimonialForm = ({lng, user}) => {
  const [testimonialValue, setTestimonialValue] = useState("");

  const handleSubmitTestimonial = async e => {
    e.preventDefault();
    const userDecoded = jwt_decode(user.token);
    await api.sendTestemional({
      idUser: userDecoded.id,
      message: testimonialValue,
    });
    toast.success("Send Testimonal Succsessfully!");
  };

  if (!user) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmitTestimonial}
      className={`text-xl sm:text-3xl md:text-2xl xl:text-5xl my-10 flex flex-col gap-4 w-full sm:px-4 ${
        lng !== "en" && "items-end"
      }`}
    >
      <label className="flex items-center gap-4">
        <div>
          <FaQuoteLeft />
        </div>
        <p className={`font-bold ${lng !== "en" && "text-end"}`}>
          {lng === "en" ? "Write Your Testimonial" : "أكتب توصية"}
        </p>
        <div>
          <FaQuoteRight />
        </div>
      </label>
      <textarea
        type="text"
        required
        maxLength={220}
        placeholder={lng === "en" ? "Write Your Testimonial" : "أكتب توصية"}
        className="w-full p-4 h-60"
        value={testimonialValue}
        onChange={e => setTestimonialValue(e.target.value)}
      />
      <button className="p-4 w-full text-xl font-bold bg-[#3cc4ad] hover:bg-[#FF932D] text-white">
        {lng === "en" ? "SUBMIT" : "أرسل"}
      </button>
    </form>
  );
};

export default TestimonialForm;
