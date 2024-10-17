import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto ">
          <Heading subtitle="our courses" title="explore our popular online courses" />

          <div className=" flex flex-wrap justify-center  gap-8">
            {coursesCard.slice(0, 3).map((val) => (
              <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-1/2">
                <div className="flex items-start">
                  <div className="w-1/3 text-green-600">
                    <img  src={val.cover} alt="" className=" h-20 w-auto rounded-full  bg-[#1eb2a6]" />
                  </div>
                  <div className="w-2/3 ml-4">
                    <h1 className="text-xl font-semibold mb-2">{val.coursesName}</h1>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star text-yellow-500"></i>
                      ))}
                      <label className="ml-2">(5.0)</label>
                    </div>
                    <div className="text-sm text-gray-600">
                      {val.courTeacher.map((details) => (
                        <div className="flex items-center mb-1" key={details.name}>
                          <img src={details.dcover} alt="" className="w-8 h-8 rounded-full mr-2" />
                          <div>
                            <h4 className="font-medium">{details.name}</h4>
                            <span className="text-xs">{details.totalTime}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold">
                    {val.priceAll} / {val.pricePer}
                  </h3>
                </div>
                <button className="outline-none mt-4 w-full py-3 border-2 border-teal-500 text-teal-500 font-semibold rounded-lg transition duration-300 hover:bg-teal-500 hover:text-white">
                  ENROLL NOW !
                </button>
              </div>
            ))}
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  );
};

export default HAbout;
