import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const IncomeComp1 = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-white h-full  shadow-lg rounded-lg bg-white-100 p-10 relative">
        <div className=" py-10 rounded-lg  w-full max-w-lg">
          <div className=" text-3xl  font-bold	pb-[10%]">
            What are your sources of income?
          </div>
          <div className="pb-[8%]">
            <p className=" text-center">
              Choose as many sources as applicable and the amount you earn from
            </p>
            <p className=" text-center">
              them. Don’t forget your passive incomes like rental income you
            </p>
            <p className=" text-center">
              receive, interests on investments, etc.
            </p>
          </div>

          <div className="bg-gray-100 h-14 rounded-md p-3 flex  justify-items-center justify-between items-center ">
            <select className="w-[50%] h-full rounded-md border-2 border-gray-300 ">
              <option value=""> option 1</option>
              <option value=""> option 1</option>
              <option value=""> option 1</option>
              <option value=""> option 1</option>
              <option value=""> option 1</option>
              <option value=""> option 1</option>
            </select>

            <div className="bg-white flex rounded-md border-2 border-gray-300  ">
              <div>₹</div>
              <input className="w-[50%]" id="amount" type="number"></input>
              <div className="text-sm ">per annum</div>
            </div>
          </div>
          <div className=" mt-[10%] rounded-full border-2 border-gray-300 text-sm flex justify-center items-center">
            <FontAwesomeIcon icon={faLock} />
            <div>
              All sensitive data is stored anonymously and not accessible to
              anyone.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeComp1;
