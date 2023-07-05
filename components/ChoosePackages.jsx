"use client";

import {BsCheck} from "react-icons/bs";
import {ImRadioUnchecked} from "react-icons/im";

const ChoosePackages = ({setSelectedPackage, selectedPackage, lng}) => {

  return (
    <div className="w-full flex flex-col gap-4">
      <a
        href="#details_package"
        className="rounded-lg bg-[#EFEDD6] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
        onClick={() => setSelectedPackage("childern")}
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#fff] rounded-full">
            {selectedPackage === "childern" ? (
              <BsCheck color="black" size={30} />
            ) : (
              <ImRadioUnchecked color="gray" size={30} />
            )}
          </div>
          <div className="flex flex-col items-start">
            <h5 className="text-xl sm:text-2xl font-semibold">
              {lng === "en" ? "CHILDERN" : "أطفال"}
            </h5>
            <h5 className="text-xl sm:text-2xl font-bold">
              6 {lng === "en" ? "HRS" : "ساعة"}
            </h5>
            <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
              {lng === "en" ? "Save" : "وفّر"} $5
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">
            <span className="text-2xl sm:text-4xl font-bold">$25</span>
            /Month
          </p>

          <span className="line-through	 text-lg sm:text-lg font-bold">$30</span>
        </div>
      </a>
      <a
        href="#details_package"
        className={
          "rounded-lg bg-[#f5cd9c] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
        }
        onClick={() => setSelectedPackage("start")}
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#fff] rounded-full">
            {selectedPackage === "start" ? (
              <BsCheck color="black" size={30} />
            ) : (
              <ImRadioUnchecked color="gray" size={30} />
            )}
          </div>
          <div className="flex flex-col items-start">
            <h5 className="text-xl sm:text-2xl font-semibold">
              {lng === "en" ? "START" : "البداية"}
            </h5>
            <h5 className="text-xl sm:text-2xl font-bold">
              6 {lng === "en" ? "HRS" : "ساعة"}
            </h5>
            <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
              {lng === "en" ? "Save" : "وفّر"} $10
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">
            <span className="text-2xl sm:text-4xl font-bold">$50</span>
            /Month
          </p>

          <span className="line-through	 text-lg sm:text-lg font-bold">$60</span>
        </div>
      </a>
      <a
        href="#details_package"
        className="rounded-lg bg-[#ffc265] flex justify-between py-6 sm:py-4 px-4 cursor-pointer"
        onClick={() => setSelectedPackage("family")}
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#fff] rounded-full">
            {selectedPackage === "family" ? (
              <BsCheck color="black" size={30} />
            ) : (
              <ImRadioUnchecked color="gray" size={30} />
            )}
          </div>
          <div className="flex flex-col">
            <h5 className="text-xl sm:text-2xl font-semibold">
              {lng === "en" ? "FAMILY" : "العائلة"}
            </h5>
            <h5 className="text-xl sm:text-2xl font-bold">
              12 {lng === "en" ? "HRS" : "ساعة"}
            </h5>
            <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
              {lng === "en" ? "Save" : "وفّر"} $30
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">
            <span className=" text-2xl sm:text-4xl font-bold">$90</span>
            /Month
          </p>

          <span className="line-through	 text-lg sm:text-lg font-bold">
            $120
          </span>
        </div>
      </a>
      <a
        href="#details_package"
        className="rounded-lg bg-[#fd5308] flex justify-between py-6 sm:py-4 px-2 sm:px-4 cursor-pointer"
        onClick={() => setSelectedPackage("economic")}
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#fff] rounded-full">
            {selectedPackage === "economic" ? (
              <BsCheck color="black" size={30} />
            ) : (
              <ImRadioUnchecked color="gray" size={30} />
            )}
          </div>
          <div className="flex flex-col items-start">
            <h5 className="text-xl sm:text-2xl font-semibold">
              {lng === "en" ? "ECONOMIC" : "الاقتصادي"}
            </h5>
            <h5 className="text-xl sm:text-2xl font-bold">
              20 {lng === "en" ? "HRS" : "ساعة"}
            </h5>
            <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
              {lng === "en" ? "Save" : "وفّر"} $60
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm">
            <span className="text-2xl sm:text-4xl font-bold">$140</span>
            /Month
          </p>

          <span className="line-through	 text-lg sm:text-lg font-bold">
            $200
          </span>
        </div>
      </a>
    </div>
  );
};

export default ChoosePackages;
