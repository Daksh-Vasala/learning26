import React, { useState } from 'react'

const UseStateDemo1 = () => {
    const[count,setCount]=useState(0)

    const increaseCount = ()=>{
      setCount(count+1)
      console.log('count after increse ',count)
    }

    const decreaseCount = ()=>{
      setCount(count-1)
      console.log('count after increse ',count)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 1</h1>
        <button onClick={increaseCount}>+</button>
        <h1>Count = {count}</h1>
        <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default UseStateDemo1