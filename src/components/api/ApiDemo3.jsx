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
    <div>
      <h1>ApiDemo3</h1>
      <button onClick={getData}>Get</button>
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
