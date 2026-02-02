import React from "react";

function EmployeeTable() {
  const employees = [
    { id: 1, name: "Rahul", department: "IT", performanceScore: 92, Attendance: 98, status: "active" },
    { id: 2, name: "Priya", department: "HR", performanceScore: 65, Attendance: 85, status: "active" },
    { id: 3, name: "Aman", department: "IT", performanceScore: 48, Attendance: 72, status: "warning" },
    { id: 4, name: "Neha", department: "Finance", performanceScore: 88, Attendance: 95, status: "active" },
    { id: 5, name: "Suresh", department: "Support", performanceScore: 40, Attendance: 68, status: "critical" },
    { id: 6, name: "Kavya", department: "HR", performanceScore: 76, Attendance: 90, status: "active" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 6</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DEPARTMENT</th>
            <th>PERFORMANCE</th>
            <th>ATTENDANCE</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr
              key={emp.id}
              style={{
                backgroundColor:
                  emp.status === "critical"
                    ? "#f8d7da"     // condition 1
                    : emp.status === "warning"
                    ? "#fff3cd"     // condition 2
                    : "transparent",
              }}
            >
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>

              {/* condition 3 */}
              <td style={{ color: emp.performanceScore < 50 ? "red" : "black" }}>
                {emp.performanceScore}
              </td>

              {/* condition 4 */}
              <td style={{ color: emp.Attendance > 95 ? "green" : "black" }}>
                {emp.Attendance}%
              </td>

              <td>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
