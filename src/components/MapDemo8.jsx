import React from 'react'

function MapDemo8() {
  const sales = [
    { id: 1, month: "Jan", region: "North", sales: 120000, target: 100000, profit: 18 },
    { id: 2, month: "Feb", region: "South", sales: 85000, target: 100000, profit: 10 },
    { id: 3, month: "Mar", region: "East", sales: 95000, target: 90000, profit: 14 },
    { id: 4, month: "Apr", region: "West", sales: 70000, target: 90000, profit: 8 },
    { id: 5, month: "May", region: "North", sales: 130000, target: 110000, profit: 20 },
  ];

  return (
    <div style={{textAlign: "center"}}>
      <h1>MAP DEMO 8</h1>
      <table className="table">
        <thead>
          <tr>
            <th>MONTH</th><th>REGION</th><th>SALES</th><th>TARGET</th><th>PROFIT %</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(s => (
            <tr
              key={s.id}
              style={{
                backgroundColor:
                  s.sales < s.target ? "#f8d7da" :
                  s.profit < 10 ? "#fff3cd" :
                  "transparent"
              }}
            >
              <td>{s.month}</td>
              <td style={{ fontWeight: s.region === "North" ? "bold" : "normal" }}>
                {s.region}
              </td>
              <td>{s.sales}</td>
              <td>{s.target}</td>
              <td style={{ color: s.profit > 15 ? "green" : "black" }}>
                {s.profit}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo8