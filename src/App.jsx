import ContentComponent from "./components/ContentComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx"

function App() {

  return (
    <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
