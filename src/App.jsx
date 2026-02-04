// import ContentComponent from "./components/ContentComponent.jsx";
// import FooterComponent from "./components/FooterComponent.jsx";
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
import { Route, Routes } from "react-router-dom"
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


function App() {

  return (
    <div>
      {/* <HeaderComponent />
      <ContentComponent />
      <FooterComponent /> */}
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
      <Navbar />
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
      </Routes>
    </div>
  );
}

export default App;
