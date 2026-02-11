import { useState } from "react";

function Input() {
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
    <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter first name"
          onChange={(e) => {
            setFirstName(e.target.value);  
          }}
          type="text"
        />
        <p>{firstName}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter middle name"
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
          type="text"
        />
        <p>{middleName}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter last name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
        />
        <p>{lastName}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="number"
        />
        <p>{age}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter email"
          t
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
        />
        <p>{email}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
        />
        <p>{city}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter phone number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
        />
        <p>{phone}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="text"
        />
        <p>{gender}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter weight"
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          type="number"
        />
        <p>{weight}</p>
      </div>
      <div style={{ display: "flex" }}>
        <input
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
        <p>{password}</p>
      </div>
    </div>
  );
}

export default Input;