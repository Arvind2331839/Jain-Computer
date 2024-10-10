import React from "react";
import Heading from "../../common/heading/Heading";

const Hero = () => {
  return (
    <>
      <section className="hero relative  bg-cover bg-center text-black" style={{ backgroundImage: `url("../../../../public/images/bg.webp")` }}>
        <div className="container mx-auto px-6 py-20">
          <div className="row w-1/2">
            <Heading subtitle="WELCOME TO JAIN COMPUTER INSTITUTE" title="Best Online Education Expertise" />
            <p className="mt-4 text-lg">“The beautiful thing about learning is that no one can take it away from you.”</p>
            <div className="mt-8 space-x-4">
              <button className="primary-btn bg-teal-500 text-white py-3 px-6 rounded shadow hover:bg-teal-600">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="bg-white text-teal-500 py-3 px-6 rounded shadow hover:bg-teal-500 hover:text-white">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="margin h-[40vh] md:h-0"></div> */}
    </>
  );
};

export default Hero;
