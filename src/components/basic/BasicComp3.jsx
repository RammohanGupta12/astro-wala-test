import { useState } from "react";

const BasicComp3 = () => {
  const [selectedTab, setselectedTab] = useState(null);

  const handleOptionClick = (option) => {
    setselectedTab(option);
  };

  return (
    <div className="flex justify-center items-center bg-white h-full  shadow-lg rounded-lg bg-white-100 p-10">
      <form className="relative py-10 rounded-lg  w-full max-w-lg">
        <div className="text-2xl font-bold mb-6 text-gray-800 text-center p-2">
          <div>
            <div className=" text-3xl "> Do you consume alcohol ? </div>
            <div className="grid grid-cols-2 py-8 gap-5">
              <div
                className={`py-12  rounded-md flex  justify-center ${
                  selectedTab === "Yes"
                    ? "border-2 border-green-500 rounded-md bg-gray-100"
                    : "bg-gray-100 border-gray-100 border-2"
                }`}
                onClick={() => handleOptionClick("Yes")}
              >
                Yes
              </div>

              <div
                className={`py-12 rounded-md flex  justify-center ${
                  selectedTab === "No"
                    ? "border-2 border-green-500 rounded-md bg-gray-100"
                    : "bg-gray-100 border-gray-100 border-2"
                }`}
                onClick={() => handleOptionClick("No")}
              >
                No
              </div>
            </div>
            <div className="px-10 text-sm py-5">
              Say ‘Yes’ if you’ve consumed alcohol in the last year.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicComp3;
