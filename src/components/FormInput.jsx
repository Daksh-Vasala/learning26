import React, { useState } from 'react'

function FormInput() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  return (
    <div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setFirstName(e.target.value)}} type="text" />
        <p>{firstName}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setMiddleName(e.target.value)}} type="text" />
        <p>{middleName}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setLastName(e.target.value)}} type="text" />
        <p>{lastName}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setAge(e.target.value)}} type="text" />
        <p>{age}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setEmail(e.target.value)}} type="text" />
        <p>{email}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setCity(e.target.value)}} type="text" />
        <p>{city}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setPhone(e.target.value)}} type="text" />
        <p>{phone}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setGender(e.target.value)}} type="text" />
        <p>{gender}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setWeight(e.target.value)}} type="text" />
        <p>{weight}</p>
      </div>
      <div style={{display: "flex"}}>
        <input onChange={(e) => {setPassword(e.target.value)}} type="text" />
        <p>{password}</p>
      </div>
    </div>
  )
}

export default FormInput;