import React from "react";
import { IoIosCall } from "react-icons/io";

const Head = () => {
  return (
    <>
      <section className="bg-white shadow py-4">
        <div className="container mx-auto flex justify-between">
          <div className="logo">
            <span className="text-red-500 text-2xl sm:text-3xl font-bold">JAIN COMPUTER INSTITUTE</span><br></br>
            <span className="text-sm text-gray-600">Affiliated by Makhanlal Chaturvedi University Bhopal</span>
          </div>

          <div className="social hidden sm:block">
            <ul className="">
            <li className="flex items-center"><span className="mr-2 text-lg text-green-600"><IoIosCall /></span>1111111111111</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-green-600"><IoIosCall /></span>1111111111111</li>
           </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
