import { useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const BasicComp2 = ({ topText, bottomText, image }) => {
  const [selectedTab, setselectedTab] = useState(null);

  const handleOptionClick = (option) => {
    setselectedTab(option);
  };

  return (
    <div className="flex justify-center items-center bg-white h-full  shadow-lg rounded-lg bg-white-100 p-10 relative">
      <form className=" py-10 rounded-lg  w-full max-w-lg">
        <div className="text-2xl font-bold mb-6 text-gray-800 text-center p-2">
          <div>
            <div className=" text-3xl ">{topText}</div>

            <div className=" absolute  w-[20%]  right-[-10%] top-[10%] ">
              <img className=" " src={image}></img>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid md:grid-cols-2 grid-cols-1 md:py-10 py-8 md:gap-10 gap-5 lg:w-4/6 5/6 ">
                <div
                  className={`relative  rounded-md flex  justify-center  items-center aspect-square ${
                    selectedTab === "Yes"
                      ? "border-2 border-green-500 rounded-md bg-gray-100"
                      : "bg-gray-100 border-gray-100 border-2"
                  }`}
                  onClick={() => handleOptionClick("Yes")}
                >
                  Yes
                  {selectedTab === "Yes" && (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className=" bg-white rounded-full text-green-500 -mb-8 absolute top-[-10%] !z-100"
                    />
                  )}
                </div>

                <div
                  className={`  aspect-square relative rounded-md flex items-center justify-center ${
                    selectedTab === "No"
                      ? "border-2 border-green-500 rounded-md bg-gray-100  "
                      : "bg-gray-100 border-gray-100 border-2"
                  }`}
                  onClick={() => handleOptionClick("No")}
                >
                  No
                  {selectedTab === "No" && (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className=" bg-white rounded-full text-green-500 -mb-8 absolute top-[-10%] !z-100"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="px-10 text-sm py-5">{bottomText}</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicComp2;
