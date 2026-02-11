import { useState } from "react";

function FormDemo1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [submitted, setIsSubmitted] = useState(false);
  return (
    <div>
      Name: <input onChange={(e) => setName(e.target.value)} type="text" />
      Age: <input onChange={(e) => setAge(e.target.value)} type="number" />
      <button onClick={() => setIsSubmitted(true)}>Submit</button>
      {submitted && (
        <div>
          <h2>Name: {name}</h2>
          <h2>Age: {age}</h2>
        </div>
      )}
    </div>
  );
}

export default FormDemo1;
