import React from "react"
import { IoIosCall } from "react-icons/io";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>JAIN COMPUTER INSTITUTE</h1>
            <span>Affiliated by Makhanlal Chaturvedi University Bhopal</span>
          </div>

          <div className='my-0 text-sm text-red-700'>
          <p className='flex text-sm'><span className=" mt-1 mr-1"><IoIosCall /></span>1234567890</p>
          <p className='flex text-sm'><span className=" mt-1 mr-1"><IoIosCall /></span>1234567890</p>
          <p className='flex text-sm'><span className=" mt-1 mr-1"><IoIosCall /></span>1234567890</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
