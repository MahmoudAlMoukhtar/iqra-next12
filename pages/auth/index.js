import React, {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import * as api from "../api/index";
import {BiShowAlt, BiHide} from "react-icons/bi";
import toast, {Toaster} from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import Head from "next/head";

//import {useRouter, withRouter} from "next/router";
//import {useTranslation} from "next-i18next";
//import {motion} from "framer-motion";
//import {useDispatch} from "react-redux";

const initialState = {
  firstName: "",
  email: "",
  gender: "male",
  password: "",
  confirmPassword: "",
  phone: 0,
};

const Auth = () => {
  const lng = "en";
  // const {t} = useTranslation();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [value, setValue] = useState();
  const router = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();
    if (isSignup) {
      try {
        const {data} = await api.signup({...formData, phone: value});
        //console.log("signup", formData);
        localStorage.setItem("userIqraa", JSON.stringify(data));
        router.push("/");
        toast.success("You are successfully Signup");
      } catch (err) {
        toast.error("This email may already exist, try another email");
      }
    } else {
      const {data} = await api.signin(formData);
      localStorage.setItem("userIqraa", JSON.stringify(data));
      toast.success("Error in password or email");
    }
  };

  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full mb-10  rounded w-full">
      <Head>
        <title>Iqra | Auth</title>
      </Head>
      <div>
        <Image
          width={1200}
          height={600}
          alt="Iqra"
          loading="lazy"
          src="https://res.cloudinary.com/dihhlmkrf/image/upload/v1678308701/islamiq/facebookcover_hscelo.png"
          className="w-full"
        />
      </div>
      <div className="flex flex-col  min-h-full w-full  px-4 sm:px-6 lg:px-8  text-[#000] rounded">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            {isSignup ? "Sign - Up" : "Sign in to your account"}
          </h2>
          {isSignup && (
            <p className="mt-2 text-center text-sm text-gray-400">
              <span className="font-medium text-black">
                start your free trial
              </span>
            </p>
          )}
        </div>
        <form
          dir={lng === "en" ? "en" : "rtl"}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 rounded-md shadow-sm">
            {isSignup && (
              <React.Fragment>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    dir={lng === "en" ? "en" : "rtl"}
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder={lng === "en" ? "First Name" : "الاسم الأخير"}
                    onChange={handleTextFieldChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    dir={lng === "en" ? "en" : "rtl"}
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder={lng === "en" ? "Last Name" : "الاسم الأخير"}
                    onChange={handleTextFieldChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <PhoneInput
                    dir={lng === "en" ? "en" : "rtl"}
                    flags={flags}
                    placeholder={
                      lng === "en" ? "Enter phone number" : "رقم الموبايل"
                    }
                    value={value}
                    inputStyle={{
                      padding: "2px 3px !important",
                    }}
                    defaultCountry={"EG"}
                    onChange={setValue}
                    addInternationalOption={false}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="gender">Gender</label>
                  <select
                    dir={lng === "en" ? "en" : "rtl"}
                    id="gender"
                    required
                    name="gender"
                    className="w-full p-4 rounded cursor-pointer"
                    onChange={handleTextFieldChange}
                  >
                    <option value={lng === "en" ? "Male" : "ذكر"}>Male</option>
                    <option value={lng === "en" ? "Fmale" : "انثى"}>
                      Fmale
                    </option>
                  </select>
                </div>
              </React.Fragment>
            )}
            <div>
              <label htmlFor="email">Email</label>
              <input
                dir={lng === "en" ? "en" : "rtl"}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                onChange={handleTextFieldChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300 w-full">
                <input
                  dir={lng === "en" ? "en" : "rtl"}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={handleTextFieldChange}
                />
                {!showPassword ? (
                  <BiShowAlt
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                    size={20}
                  />
                ) : (
                  <BiHide
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                    size={20}
                  />
                )}
              </div>
              {isSignup && (
                <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300 w-full">
                  <input
                    dir={lng === "en" ? "en" : "rtl"}
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Confirm Password"
                    onChange={handleTextFieldChange}
                  />
                  {!showPassword ? (
                    <BiShowAlt
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                      size={20}
                    />
                  ) : (
                    <BiHide
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer"
                      size={20}
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <button className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2e9175]">
              {isSignup ? "Sign-Up" : "Sign in to your account"}
            </button>
          </div>

          <div className="group relative flex  w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black">
            {isSignup ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                Already have an account?
                <div onClick={switchMode} className="font-bold cursor-pointer">
                  Sign in to your account
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
                {"Don't have an account?"}
                <div onClick={switchMode} className="font-bold cursor-pointer">
                  Sign-Up
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
