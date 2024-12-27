import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const BasicComp1 = () => {
  const [selectedGender, setSelectedGender] = useState("Male");

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    pinCode: "",
    gender: selectedGender,
    educaton: "No",
  });

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
    setUserData({ ...userData, gender: gender });
  };

  const RedditTextField = styled((props) => (
    <TextField
      slotProps={{
        input: { disableUnderline: true },
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#f1f1f1",
      border: "2px solid #f1f1f1",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&.Mui-focused": {
        backgroundColor: "#f1f1f1",
        border: "2px solid #35b555",
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#f1f1f1",
        borderColor: "#2D3843",
      }),
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#b2b2b2",
    },
  }));

  console.log(userData);

  return (
    <div>
      <div className="flex justify-center items-center bg-white h-100  shadow-lg rounded-lg bg-white-100 p-10">
        <form className="relative bg-white p-8  w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center p-2">
            <div>
              Good to meet you :/ <br />
              Tell us about yourself
            </div>
          </h2>

          <div className="grid grid-cols-2 gap-x-8">
            <div className="mb-4">
              <RedditTextField
                label="First Name"
                id="first-name-input"
                variant="filled"
                style={{ marginTop: 11 }}
              />

              {/* <div className=" bg-[#f1f1f1] px-4 py-2 rounded-md">
                <div className=" font-bold text-xs text-[#8e8e8e]">
                  First Name
                </div>
                <input
                  className=" bg-[#f1f1f1] outline-none"
                  type="text"
                  id="name"
                  // placeholder="Enter first name"
                  required
                  onChange={(e) =>
                    setUserData({ ...userData, firstName: e.target.value })
                  }
                />
              </div> */}
              {/* <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                First Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
                type="text"
                id="name"
                placeholder="Enter first name"
                required
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              /> */}
            </div>

            <div className="mb-4">
              {/* <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Last Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
                type="text"
                id="name"
                placeholder="Enter last name"
                required
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              /> */}

              <RedditTextField
                label="Last Name"
                id="last-name-input"
                variant="filled"
                style={{ marginTop: 11 }}
              />
            </div>

            <div className="mb-4">
              {/* <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Date of Birth
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
                type="date"
                id="dob"
                placeholder="Select your dob"
                required
                onChange={(e) =>
                  setUserData({ ...userData, dob: e.target.value })
                }
              /> */}

              <div className=" mt-3 text-xs">Date of birth</div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="dob" />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="mb-4">
              {/* <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Pincode
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
                type="number"
                id="pincode"
                placeholder="Enter your pincode"
                required
                onChange={(e) =>
                  setUserData({ ...userData, pinCode: e.target.value })
                }
              /> */}
              <div className="mt-3 text-xs invisible">Date of birth</div>
              <RedditTextField
                label="Enter your pincode"
                id="pincode-input"
                variant="filled"
              />
            </div>
          </div>

          <div className=" mt-8">
            <div className=" text-sm">Gender</div>
            <div className="flex justify-center items-center">
              <div className="flex space-x-4">
                {/* Male Button */}
                <div
                  onClick={() => handleGenderSelection("Male")}
                  className={`cursor-pointer px-6 py-2 rounded-full transition ${
                    selectedGender === "Male"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Male
                </div>

                {/* Female Button */}
                <div
                  onClick={() => handleGenderSelection("Female")}
                  className={`cursor-pointer px-6 py-2 rounded-full transition ${
                    selectedGender === "Female"
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Female
                </div>
              </div>
            </div>
          </div>

          <div className="flex-row text-center text-sm my-8">
            <div className="text-start mb-2">
              <label htmlFor="education">Your Highest Education</label>
            </div>

            <div>
              <select
                className="flex items-start bg-[#f1f1f1] p-4 w-4/5 rounded-md "
                name="education"
                id="education"
                onChange={(e) =>
                  setUserData({ ...userData, educaton: e.target.value })
                }
              >
                <option value="Graduate">Graduate and above</option>
                <option value="12th">12th pass</option>
                <option value="10th">10th pass</option>
                <option value="None">No Education</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BasicComp1;
