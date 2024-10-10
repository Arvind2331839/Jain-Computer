import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading' className="text-3xl">
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading
