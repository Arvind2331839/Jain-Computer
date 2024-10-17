import React from "react"
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB '>
          <div className='text-black '>
            <h1 className="text-2xl md:text-3xl font-extrabold mt-3 ">JAIN COMPUTER INSTITUTE</h1>
            <span className="text-center" >Run by:- H.S.Jain Shiksha Prasar Samiti, Indore, Madhya Pradesh</span>

            <div className='my-0 mx-auto text-sm text-red-700 justify-center flex sm:justify-start gap-3 sm:gap-5 '>
              <p className='flex text-sm'>Call:-</p>
          <p className='flex text-sm'><span className="text-black mt-1 mr-1"><IoIosCall /></span>0731-4967104</p>
          <p className='flex text-sm  sm:mx-0'><span className="text-black mt-1 mr-1"><IoIosCall /></span>9575535752</p>
          {/* <p className='flex text-sm'><span className="text-black mt-1 mr-1"><IoIosCall /></span>1234567890</p> */}
          </div>

          </div>

          <div className='my-0 text-sm text-red-700 justify-center flex sm:flex-col invisible sm:visible'>
          <p className='flex text-sm'><span className="text-black mt-1 mr-1"><CgMail /></span>abhiruchijain@mkrac.in</p>
          <p className='flex text-sm mx-3 sm:mx-0 my-1'><span className="text-black mt-1 mr-1"><CgMail /></span>Sharadjain@mkrac.in</p>
          <p className='flex text-sm'><span className="text-black mt-1 mr-1"><CgMail /></span>##DemoEmail.com##</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Head


