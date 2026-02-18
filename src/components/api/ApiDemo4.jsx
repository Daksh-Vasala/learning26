import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function ApiDemo4() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const getData = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${search}&apikey=82302e74`,
    );
    setData(res.data.Search);
    console.log(res.data);
  };
  return (
    <div style={{ padding: "20px 20px 20px 20px" }}>
      <h1>API DEMO 4</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button
        onClick={getData}
        style={{
          backgroundColor: "green",
          border: "none",
          borderRadius: "5px",
          color: "white",
        }}
      >
        Get
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {data?.map((movie) => {
          return (
            <div
              key={movie.imdbID}
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
            >
              <div
                style={{
                  minHeight: "300px",
                  width: "200px",
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                  src={movie.Poster}
                  alt=""
                />
              </div>
              <div style={{ minHeight: "200px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <h5>ID: </h5>
                  <p>{movie.imdbID}</p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <h5>Title: </h5>
                  <p>{movie.Title}</p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <h5>Year: </h5>
                  <p>{movie.Year}</p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <h5>Type: </h5>
                  <p>{movie.Type}</p>
                </div>
              </div>
              <Link
                style={{
                  backgroundColor: "blue",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                  padding: "5px 5px 5px 5px"
                }}
                to={`/apiMovie/${movie.imdbID}`}
              >
                Detail
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ApiDemo4;
