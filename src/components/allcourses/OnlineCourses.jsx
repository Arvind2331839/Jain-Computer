import React from "react";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <>
      <section className="py-12">
        <div className="container mx-auto max-w-[85%]">
          <Heading subtitle="COURSES" title="Browse Our Courses" />
          <div className="flex flex-wrap mx-auto justify-center">
            {online.map((val) => (
              <div className="box text-center shadow-lg p-4 w-60 h-auto" key={val.id}>
                <div className="w-20 mx-auto"> {/* Center the image container */}
                  <img
                    src={val.cover}
                    alt="Course"
                    className="transition-opacity mx-auto" // Center the image
                  />
                </div>
                <h1 className="text-xl font-semibold mt-4">{val.courseName}</h1>
                <span className="text-gray-600">{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
