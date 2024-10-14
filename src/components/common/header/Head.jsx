import React from "react"
import { IoIosCall } from "react-icons/io";


const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB '>
          <div className='text-white '>
            <h1 className="text-2xl font-bold mt-3 ">JAIN COMPUTER INSTITUTE</h1>
            <span className="text-center" >Run by:- H.S.Jain Shiksha Prasar Samiti, Indore, Madhya Pradesh</span>
          </div>

          <div className='my-0 text-sm text-red-700 justify-center flex sm:flex-col '>
          <p className='flex text-sm'><span className=" mt-1 mr-1"><IoIosCall /></span>1234567890</p>
          <p className='flex text-sm mx-3 sm:mx-0'><span className=" mt-1 mr-1"><IoIosCall /></span>1234567890</p>
          <p className='flex text-sm'><span className=" mt-1 mr-1"><IoIosCall /></span>1234567890</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Head


