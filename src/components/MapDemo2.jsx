import React from 'react'

function MapDemo2() {
  const users = [
    {id: 1, name: "Daksh", age: 20, gender: "male"},
    {id: 2, name: "Kushal", age: 18, gender: "male"},
    {id: 3, name: "Megha", age: 21, gender: "female"},
  ]
  return (
    <div style={{textAlign: "center"}}>
      <h1>MAP DEMO 2</h1>
      {
        users.map((user) => {
          return <li>{user.id} - {user.name} - {user.age} - {user.gender}</li>
        })
      }
    </div>
  )
}

export default MapDemo2