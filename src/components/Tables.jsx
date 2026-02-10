import React from 'react'
import Table from './Table'

function Tables() {
  const tables = [
    [
      {id:1, name: "Daksh", age: "20"},
      {id:1, name: "Kushal", age: "12"},
      {id:1, name: "Milan", age: "21"},
    ],
    [
      {id:101, name: "Raj", age: "student"},
      {id:101, name: "Samir", age: "Teacher"},
      {id:101, name: "Jagdish", age: "student"},
    ]
  ]
  return (
    <div style={{textAlign: "center"}}>
      <h1>Tables are shown here: </h1>
      {tables.map((table) => {
        return <Table table={table} />
      })}
    </div>
  )
}

export default Tables