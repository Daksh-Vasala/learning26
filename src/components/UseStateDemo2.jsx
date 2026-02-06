import React, { useState } from 'react'

const UseStateDemo2 = () => {

    const [loading,setLoading]=useState(true) //boolean
    const stopLoader = ()=>{
        setLoading(false)
    }

    const startLoader = ()=>{
        setLoading(true);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        {
            loading == true && <h1>Loading.....</h1>
        }
        <button onClick={stopLoader}>STOP</button>
        <button onClick={startLoader}>START</button>
    </div>
  )
}

export default UseStateDemo2;