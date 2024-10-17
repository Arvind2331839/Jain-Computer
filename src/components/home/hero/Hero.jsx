// import React from "react"
// import Heading from "../../common/heading/Heading"
// import "./Hero.css"

// const Hero = () => {
//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='row'>
//             <Heading subtitle='WELCOME TO JAIN COMPUTER INSTITUTE' title='Best Computer Education Expertise' />
//             <p>"If you want to walk fast, walk alone. But if you want to walk far, walk together" :- is a quote by Sir Ratan Tata</p>
//             <div className='button'>
//               <button className='primary-btn'>
//                 GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//               <button>
//                 VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className='margin'></div>
//     </>
//   )
// }

// export default Hero

import React from "react";

const Hero = () => {
  return (
    <div
      class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <div class="pr-2 md:mb-14 py-14 md:py-0">
        <p class="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
          Institute Info:-
        </p>
        <p className="text-red-500 text-sm">Welcome to Jain Computer Institute (JCI)!</p>
        <p class="py-2 text-lg text-gray-500 2xl:py-8 md:py-3 2xl:pr-5">
          At JCI, we are dedicated to empowering you with the latest computer
          skills and knowledge. With over a decade of experience in the field of
          computer education.
        </p>
        <p class="py-2 text-lg text-gray-500 2xl:py-8 md:py-3 2xl:pr-5">
          The heart and soul of JCI, Mrs. Abhiruchi Jain Ma’am, brings a wealth
          of experience and passion for teaching. With her friendly and
          approachable nature, she ensures every student feels valued and
          supported. Her commitment to providing quality education in a
          nurturing environment makes learning at JCI a truly enriching
          experience.{" "}
        </p>
        <p class="py-2 text-lg text-gray-500 2xl:py-8 md:py-3 2xl:pr-5">
          Join us at Jain Computer Institute. Let’s build a brighter future
          together!
        </p>
        <div class="mt-4">
          <a
            href="#contact"
            class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"
          >
            <span>Explore More</span>{" "}
          </a>
        </div>
      </div>

      <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img
          id="heroImg1"
          class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
          src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
          alt="Awesome hero page image"
          width="500"
          height="488"
        />
      </div>
    </div>
  );
};

export default Hero;
