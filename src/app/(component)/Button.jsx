'use client'

import React from 'react'

function Button() {

    const handleClick = () => {
        alert("Hello");
    }

  return (
    <button onClick={handleClick}>Click Here</button>
  )
}

export default Button