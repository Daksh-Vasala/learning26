import React from "react";

function MapDemo10() {
  const products = [
    {
      id: 1,
      name: "Backpack",
      category: "Travel",
      price: 2499,
      stock: 12,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Laptop Bag",
      category: "Office",
      price: 1999,
      stock: 4,
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1611461527944-1a718332613b?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Gym Bag",
      category: "Fitness",
      price: 1499,
      stock: 0,
      rating: 3.8,
      image:
        "https://images.unsplash.com/photo-1535879335191-618713ec3e3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Trek Bag",
      category: "Travel",
      price: 3999,
      stock: 2,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1583838812711-91e66580f5e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Handbag",
      category: "Fashion",
      price: 2999,
      stock: 10,
      rating: 4.1,
      image: "",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 10</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>RATING</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              style={{
                backgroundColor:
                  p.stock === 0
                    ? "#f8d7da" // red - out of stock
                    : p.stock < 5
                      ? "#fff3cd" // orange - low stock
                      : "transparent",
              }}
            >
              <td>{p.id}</td>

              {/* image condition */}
              <td>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border:
                        p.rating >= 4.5 ? "3px solid green" : "1px solid #ccc",
                    }}
                  />
                ) : (
                  <span style={{ color: "red", fontStyle: "Itallic" }}>
                    Image missing
                  </span>
                )}
              </td>

              <td>{p.name}</td>
              <td>{p.category}</td>

              {/* price condition */}
              <td style={{ fontWeight: p.price > 3000 ? "bold" : "normal" }}>
                ₹{p.price}
              </td>

              <td>{p.stock}</td>

              <td>{p.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo10;
