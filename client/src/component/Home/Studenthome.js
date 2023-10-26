import React from "react";

const Studenthome = () => {
  return (
    <div className="w-477 h-54 flex-shrink-0 bg-green-400">
      <p className="text-green-700 text-center font-TiroTamil text-5xl font-normal leading-normal mt-10">
        Welcome Student
      </p>
      <div className="w-431 h-187 flex-shrink-0 bg-white">
        <p className="text-3xl text-blue-900 text-center font-TiroTamil text-18 font-normal  leading-normal bg-slate-300">
          Student
        </p>
        <div className="text-green-700 font-TiroTamil text-2xl font-normal leading-normal bg-slate-300 pl-10">
          <ul className=" grid grid-cols-2 grid-rows-4 gap-4 pl-20 pb-10">
            <li>Dept</li>
            <li>IIT</li>
            <li>Session</li>
            <li>2019-2020</li>
            <li>Class Roll</li>
            <li>1234</li>
            <li>Reg No</li>
            <li>20203652123</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Studenthome;
