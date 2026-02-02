import React from "react";

function MapDemo7() {
  const products = [
    { id: 1, name: "Backpack", category: "Travel", price: 2499, stock: 12 },
    { id: 2, name: "Laptop Bag", category: "Office", price: 1999, stock: 4 },
    { id: 3, name: "Gym Bag", category: "Fitness", price: 1499, stock: 0 },
    { id: 4, name: "Trek Bag", category: "Travel", price: 3999, stock: 2 },
    { id: 5, name: "Sling Bag", category: "Casual", price: 999, stock: 15 },
    { id: 6, name: "Handbag", category: "Fashion", price: 2999, stock: 10 },
  ];

  return (
    <div style={{textAlign: "center"}}>
      <h1>MAP DEMO 7</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>NAME</th><th>CATEGORY</th><th>PRICE</th><th>STOCK</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr
              key={p.id}
              style={{
                backgroundColor:
                  p.stock === 0 ? "#f8d7da" :
                  p.stock < 5 ? "#fff3cd" :
                  "transparent"
              }}
            >
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td style={{ color: p.category === "Travel" ? "green" : "black" }}>
                {p.category}
              </td>
              <td style={{ fontWeight: p.price > 3000 ? "bold" : "normal" }}>
                ₹{p.price}
              </td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo7;
