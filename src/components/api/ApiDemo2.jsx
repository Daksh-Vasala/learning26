import axios from "axios";
import { useState } from "react";

function ApiDemo2() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    setData(response.data.products);
  };
  return (
    <div>
      <h1>ApiDemo2</h1>
      <button onClick={getData}>Get</button>
      {data && (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Decription</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {}
    </div>
  );
}

export default ApiDemo2;
