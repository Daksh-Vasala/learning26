import axios from "axios";
import { useState } from "react";

function ApiDemo3() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/comments");
    console.log(response);
    setData(response.data.comments);
  };
  return (
    <div style={{textAlign: "center"}}>
      <h1>API DEMO 3</h1>
      <button onClick={getData} style={{border: "none", borderRadius: "20px"}}>GET</button>
      {data && (
        <table className="table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Comment</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((comment) => {
              return (
                <tr key={comment.id}>
                  <td>{comment.user.fullName}</td>
                  <td>{comment.user.username}</td>
                  <td>{comment.body}</td>
                  <td>{comment.likes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiDemo3;
