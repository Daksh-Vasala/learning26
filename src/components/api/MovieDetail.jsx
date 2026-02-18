import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function MovieDetail() {
  const id = useParams().id
  const [movie, setMovies] = useState();

  const getDetails = async () => {
    console.log(id);
    const res = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=82302e74`,
    );
    console.log(res.data);
    setMovies(res.data);
  };
  return (
    <>
      <button
        onClick={getDetails}
        style={{
          backgroundColor: "green",
          borderRadius: "10px",
          color: "white",
          border: "none",
          fontSize: "20px",
          margin: "20px 20px 20px 20px"
        }}
      >
        Get Details
      </button>
      {movie && (
        <div
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* Top Section */}
          <div style={{ display: "flex", gap: "30px" }}>
            {/* Poster */}
            <div style={{ width: "280px" }}>
              <img
                src={movie?.Poster}
                alt={movie?.Title}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Basic Info */}
            <div style={{ flex: 1 }}>
              <h1 style={{ marginBottom: "10px" }}>{movie?.Title}</h1>

              <p style={{ margin: "6px 0", color: "#555" }}>
                {movie?.Year} • {movie?.Rated} • {movie?.Runtime}
              </p>

              <p style={{ margin: "6px 0" }}>
                <strong>Genre:</strong> {movie?.Genre}
              </p>

              <p style={{ margin: "6px 0" }}>
                ⭐ <strong>{movie?.imdbRating}</strong> ({movie?.imdbVotes}{" "}
                votes)
              </p>

              <p style={{ margin: "6px 0" }}>
                <strong>Metascore:</strong> {movie?.Metascore}
              </p>
            </div>
          </div>

          {/* Plot Section */}
          <div style={{ marginTop: "30px" }}>
            <h3>Plot</h3>
            <p style={{ lineHeight: "1.6", color: "#444" }}>{movie?.Plot}</p>
          </div>

          {/* Cast & Crew */}
          <div style={{ marginTop: "30px" }}>
            <h3>Cast & Crew</h3>

            <p>
              <strong>Director:</strong> {movie?.Director}
            </p>
            <p>
              <strong>Writer:</strong> {movie?.Writer}
            </p>
            <p>
              <strong>Actors:</strong> {movie?.Actors}
            </p>
          </div>

          {/* Production & Stats */}
          <div style={{ marginTop: "30px" }}>
            <h3>Production & Details</h3>

            <p>
              <strong>Awards:</strong> {movie?.Awards}
            </p>
            <p>
              <strong>Box Office:</strong> {movie?.BoxOffice}
            </p>
            <p>
              <strong>Country:</strong> {movie?.Country}
            </p>
            <p>
              <strong>Language:</strong> {movie?.Language}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
