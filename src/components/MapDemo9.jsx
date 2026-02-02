import React from 'react'

function MapDemo9() {
   const tasks = [
    { id: 1, task: "Login Page", priority: "High", deadline: "2026-02-05", status: "Completed" },
    { id: 2, task: "API Integration", priority: "High", deadline: "2026-02-07", status: "Pending" },
    { id: 3, task: "UI Fixes", priority: "Medium", deadline: "2026-02-06", status: "In Progress" },
    { id: 4, task: "Database Setup", priority: "High", deadline: "2026-02-04", status: "Overdue" },
    { id: 5, task: "Testing", priority: "Low", deadline: "2026-02-10", status: "Pending" },
  ];

  return (
    <div style={{textAlign: "center"}}>
      <h1>MAP DEMO 9</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>TASK</th><th>PRIORITY</th><th>DEADLINE</th><th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(t => (
            <tr
              key={t.id}
              style={{
                backgroundColor:
                  t.status === "Overdue" ? "#f8d7da" :
                  t.priority === "High" ? "#fff3cd" :
                  "transparent"
              }}
            >
              <td>{t.id}</td>
              <td>{t.task}</td>
              <td>{t.priority}</td>
              <td style={{ fontWeight: t.deadline === "2026-02-05" ? "bold" : "normal" }}>
                {t.deadline}
              </td>
              <td style={{ color: t.status === "Completed" ? "green" : "black" }}>
                {t.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo9