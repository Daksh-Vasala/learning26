import axios from "axios";
import { useState } from "react";

function ApiDemo1() {
  const [users, setUsers] = useState();
  const [message, setMessage] = useState("");

  const getData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res); //axios object
    console.log(res.data.data);
    setUsers(res.data.data);
    setMessage(res.data.message);
  };
  return (
    <div>
      <h1>API DEMO 1</h1>
      <button onClick={getData}>GET</button>
      <h2>{message && message}</h2>
      {users && (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>{user.isActive ? "true" : "false"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiDemo1;
