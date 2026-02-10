// import ContentComponent from "./components/ContentComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
// import HeaderComponent from "./components/HeaderComponent.jsx"
import MapDemo1 from "./components/MapDemo1.jsx"
import MapDemo2 from "./components/MapDemo2.jsx"
import MapDemo3 from "./components/MapDemo3.jsx"
import MapDemo4 from "./components/MapDemo4.jsx"
import MapDemo5 from "./components/MapDemo5.jsx"
import MapDemo6 from "./components/MapDemo6.jsx"
import MapDemo7 from "./components/MapDemo7.jsx"
import MapDemo8 from "./components/MapDemo8.jsx"
import MapDemo9 from "./components/MapDemo9.jsx"
import MapDemo10 from "./components/MapDemo10.jsx"
import Navbar from "./components/Navbar.jsx"
import { Form, Route, Routes } from "react-router-dom"
import NetflixHome from "./components/NetflixHome.jsx"
import NetflixShows from "./components/NetflixShows.jsx"
import NetflixMovies from "./components/NetflixMovies.jsx"
import NetflixContact from "./components/NetflixContact.jsx"
import NetflixAbout from "./components/NetflixAbout.jsx"
import NetflixSeries from "./components/NetflixSeries.jsx"
import NotFound from "./components/NotFound.jsx"
import Watch from "./components/Watch.jsx"
import TeamDetails from "./components/TeamDetails.jsx"
import Team from "./components/Team.jsx"
import FunctionDemo1 from "./components/FunctionDemo1.jsx"
import UseStateDemo1 from "./components/UseStateDemo1.jsx"
import UseStateDemo2 from "./components/UseStateDemo2.jsx"
import UseStateDemo3 from "./components/UseStateDemo3.jsx"
import Tables from "./components/Tables.jsx";
import FormInput from "./components/FormInput.jsx";


function App() {
  const navLinks = [
    {name: "Home", link: "/"},
    {name: "Shows", link: "/netflixShows"},
    {name: "Movies", link: "/netflixMovies"},
    {name: "Seried", link: "/netflixSeries"},
    {name: "Team", link: "/team"},
    {name: "Contact", link: "/netflixContact"},
    {name: "About", link: "/netflixAbout"},
    {name: "Function Demo 1", link: "/funcd1"},
    {name: "Usestate demo 1", link: "/used1"},
    {name: "Usestate demo 2", link: "/used2"},
    {name: "Usestate demo 3", link: "/used3"},
    {name: "Tables", link: "/tables"},
  ]

  return (
    <div>
      {/* <HeaderComponent />
      <ContentComponent /> */}
      {/* <MapDemo1 />
      <MapDemo2 />
      <MapDemo3 />
      <MapDemo4 />
      <MapDemo5 />
      <MapDemo6 />
      <MapDemo7 />
      <MapDemo8 />
      <MapDemo9 />
      <MapDemo10 /> */}
      <Navbar navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<NetflixHome />} />
        <Route path="/*"element={<NotFound />}  />
        <Route path="/netflixShows"element={<NetflixShows />}  />
        <Route path="/netflixMovies"element={<NetflixMovies />}  />
        <Route path="/netflixSeries"element={<NetflixSeries />}  />
        <Route path="/netflixContact"element={<NetflixContact />}  />
        <Route path="/netflixAbout"element={<NetflixAbout />}  />
        <Route path="/watch/:name"element={<Watch />}  />
        <Route path="/team"element={<Team />}  />
        <Route path="/teamdetail/:name"element={<TeamDetails />}  />
        <Route path="/funcd1"element={<FunctionDemo1 />}  />
        <Route path="/used1"element={<UseStateDemo1 />}  />
        <Route path="/used2"element={<UseStateDemo2 />}  />
        <Route path="/used3"element={<UseStateDemo3 />}  />
        <Route path="/tables"element={<Tables />}  />
        <Route path="/form"element={<FormInput />}  />
      </Routes>
      <FooterComponent footer="2026" /> 
    </div>
  );
}

export default App;
