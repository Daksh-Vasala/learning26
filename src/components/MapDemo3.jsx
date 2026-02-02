import React from 'react'

function MapDemo3() {
  let students = [
    {id: 1, name: "Daksh", age: 20, marks: 78,city: "ahmedabad", gender: "male"},
    {id: 2, name: "Kushal", age: 18, marks: 78,city: "ahmedabad", gender: "male"},
    {id: 3, name: "Megha", age: 21, marks: 78,city: "ahmedabad", gender: "female"},
  ]
  return (
    <div style={{textAlign: "center"}}>
      <h1>MAP DEMO 3</h1>
      <table border={"1"} align='center'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Marks</td>
            <td>City</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return(
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.marks}</td>
                <td>{student.city}</td>
                <td>{student.gender}</td>
              </tr>  
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default MapDemo3