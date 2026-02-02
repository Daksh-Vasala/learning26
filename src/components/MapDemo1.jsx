import React from 'react'

function MapDemo1() {
  const cars = ["audi", "bmw", "bentley", "Ferrari", "Rolls Royce"];
  return (
    <div style={{textAlign: "center"}}>
      <h1>MAP DEMO 1</h1>
      {
        cars.map((car) => {
          return <h1>{car}</h1>
        })
      }
    </div>
  )
}

export default MapDemo1