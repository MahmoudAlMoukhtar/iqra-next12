import {useTranslation} from "react-i18next";
import {BsCheck} from "react-icons/bs";
import {ImRadioUnchecked} from "react-icons/im";

const Package = ({selectedPackage, setSelectedPackage}) => {
  const [t, i18n] = useTranslation();
  return (
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
            {i18n.language === "en" ? "CHILDERN" : "أطفال"}
          </h5>
          <h5 className="text-xl sm:text-2xl font-bold">
            6 {i18n.language === "en" ? "HRS" : "ساعة"}
          </h5>
          <p className="bg-[#fff] rounded-full py-1 px-2 text-xs font-semibold">
            {i18n.language === "en" ? "Save" : "وفّر"} $5
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
  );
};

export default Package;
