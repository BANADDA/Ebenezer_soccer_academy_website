import React from 'react'
import PropTypes from "prop-types";

function Patners({img}) {
  return (
      <figure className=" w-auto px-0 pt-5 pb-2 rounded-lg drop-shadow-xl">
          <img className="w-full object-cover rounded-tl-lg rounded-tr-lg h-72"
              src={img}/>
      </figure>
  )
}

Patners.propTypes = {
    img: PropTypes.string.isRequired
}

export default Patners

