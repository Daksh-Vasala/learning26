import axios from "axios";
import { useState } from "react";

function ApiDemo5() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    setIsActive(e.target.value === "true");
  };

  const handleSubmit = async () => {
    const user = {
      name,
      email,
      password,
      age,
      isActive,
    };

    const res = await axios.post("https://node5.onrender.com/user/user", user);
    console.log(res);
  };

  return (
    <div
      style={{
        padding: "20px 20px 20px 20px",
        display: "flex",
        flexDirection: "column",
        width: "500px",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <h2>Is Active?</h2>

      <label>
        <input
          type="radio"
          name="isActive"
          value="true"
          checked={isActive === true}
          onChange={handleChange}
        />
        True
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="isActive"
          value="false"
          checked={isActive === false}
          onChange={handleChange}
        />
        False
      </label>

      <input onClick={handleSubmit} type="submit" />
    </div>
  );
}

export default ApiDemo5;
