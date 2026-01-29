import messiImage from "../assets/images/ITSMESSI.jpg";

function ContentComponent() {
  return (
    <div
      style={{
        backgroundColor: "#f5faff",
        width: "100%",
        minHeight: "100vh",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "24px",
          maxWidth: "1500px",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ width: "500px", flexShrink: 0 }}>
          <img
            src={messiImage}
            alt="Lionel Messi"
            style={{
              width: "100%",
              borderRadius: "6px",
            }}
          />
        </div>

        <div
          style={{
            fontSize: "15px",
            lineHeight: "1.6",
            color: "#333",
            textAlign: "justify",
          }}
        >
          <h2>
          Lionel Andrés Messi, born on 24 June 1987 in Rosario, Argentina, is
          widely regarded as one of the greatest footballers of all time. Known
          for his exceptional dribbling, vision, playmaking ability, and
          goal-scoring prowess, Messi has redefined modern football with his
          consistency and creativity.
          </h2>

          <br />
          <h2>
          Messi began his professional career with FC Barcelona, where he spent
          over two decades, becoming the club’s all-time top scorer and winning
          numerous domestic and international trophies, including multiple UEFA
          Champions League titles. During his time at Barcelona, he won a record
          number of Ballon d’Or awards, recognizing him as the world’s best
          player.
          </h2>


          <br />
          <h2>
          In 2021, Messi joined Paris Saint-Germain (PSG), continuing to showcase
          his brilliance at the highest level of European football. Later, he
          moved to Inter Miami CF, significantly increasing global interest in
          football in the United States.
          </h2>


          <br />
          <h2>
          On the international stage, Messi is the heart of the Argentina
          national team. He led Argentina to victory in the Copa América 2021,
          the Finalissima 2022, and the FIFA World Cup 2022, cementing his legacy
          as a football icon.
          </h2>


          <br />
          <h2>
          Beyond his achievements, Messi is admired for his humility,
          discipline, and dedication to the sport. His journey is a powerful
          story of perseverance and excellence.
          </h2>

        </div>
      </div>
    </div>
  );
}

export default ContentComponent;
