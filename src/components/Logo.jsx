import React from 'react'

function Logo(props) {
  return (
    <div>
      <h2 style={{color: "red", paddingRight:"20px"}}>{props.logo || "Logo"}</h2>
    </div>
  )
}

export default Logo