function FooterComponent(props) {
  return (
    <div
      style={{
        backgroundColor: "#a60042",
        color: "white",
        padding: "8px",
        textAlign: "center",
        marginTop: "auto",
        fontSize: "50px",
        position: "absolute",
        bottom: "0",
        right: "0",
        left: "0",
      }}
    >
      {props.footer || "Footer"}
    </div>
  );
}

export default FooterComponent;