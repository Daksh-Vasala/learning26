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
import FunctionDemo1 from "./components/FunctionDemo1.jsx"
import UseStateDemo1 from "./components/UseStateDemo1.jsx"
import UseStateDemo2 from "./components/UseStateDemo2.jsx"
import UseStateDemo3 from "./components/UseStateDemo3.jsx"
import Tables from "./components/Tables.jsx";
import Input from "./components/input/Input.jsx";
import FormDemo1 from "./components/forms/FormDemo1.jsx";
import FormDemo2 from "./components/forms/FormDemo2.jsx";
import FormDemo3 from "./components/forms/FormDemo3.jsx";
import FormDemo4 from "./components/forms/FormDemo4.jsx";
import FormDemo5 from "./components/forms/FormDemo5.jsx";
import FormValid from "./components/forms/FormValid.jsx";
import FormValid1 from "./components/forms/FormValid1.jsx";
import FormValid2 from "./components/forms/FormValid2.jsx";
import WatchForm from "./components/forms/WatchForm.jsx";
import ApiDemo1 from "./components/api/ApiDemo1.jsx";
import ApiDemo2 from "./components/api/ApiDemo2.jsx";
import ApiDemo3 from "./components/api/ApiDemo3.jsx";
import ApiDemo4 from "./components/api/ApiDemo4.jsx";
import MovieDetail from "./components/api/MovieDetail.jsx";
import ApiDemo5 from "./components/api/ApiDemo5.jsx";


function App() {
  const navLinks = [
    {name: "Home", link: "/"},
    // {name: "Shows", link: "/netflixShows"},
    // {name: "Movies", link: "/netflixMovies"},
    // {name: "Seried", link: "/netflixSeries"},
    // {name: "Team", link: "/team"},
    // {name: "Contact", link: "/netflixContact"},
    // {name: "About", link: "/netflixAbout"},
    // {name: "Function Demo 1", link: "/funcd1"},
    // {name: "Usestate demo 1", link: "/used1"},
    // {name: "Usestate demo 2", link: "/used2"},
    // {name: "Usestate demo 3", link: "/used3"},
    // {name: "Tables", link: "/tables"},
    // {name: "Input", link: "/input"},
    // {name: "Form 1", link: "/form1"},
    // {name: "Form 2", link: "/form2"},
    // {name: "Form 3", link: "/form3"},
    // {name: "Form 4", link: "/form4"},
    // {name: "Form 5", link: "/form5"},
    // {name: "Form Valid", link: "/formValid"},
    // {name: "Form Valid 1", link: "/formValid1"},
    // {name: "Form Valid 2", link: "/formValid2"},
    // {name: "Watch Form", link: "/watchForm"},
    {name: "API Demo 1", link: "/apiDemo1"},
    {name: "API Demo 2", link: "/apiDemo2"},
    {name: "API Demo 3", link: "/apiDemo3"},
    {name: "API Demo 4", link: "/apiDemo4"},
    {name: "API Demo 5", link: "/apiDemo5"},
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
        <Route path="/*" element={<NotFound />}  />
        <Route path="/netflixShows" element={<NetflixShows />}  />
        <Route path="/netflixMovies" element={<NetflixMovies />}  />
        <Route path="/netflixSeries" element={<NetflixSeries />}  />
        <Route path="/netflixContact" element={<NetflixContact />}  />
        <Route path="/netflixAbout" element={<NetflixAbout />}  />
        <Route path="/watch/:name" element={<Watch />}  />
        <Route path="/team" element={<Team />}  />
        <Route path="/teamdetail/:name" element={<TeamDetails />}  />
        <Route path="/funcd1" element={<FunctionDemo1 />}  />
        <Route path="/used1" element={<UseStateDemo1 />}  />
        <Route path="/used2" element={<UseStateDemo2 />}  />
        <Route path="/used3" element={<UseStateDemo3 />}  />
        <Route path="/tables" element={<Tables />}  />
        <Route path="/input" element={<Input />}  />
        <Route path="/form1" element={<FormDemo1 />}  />
        <Route path="/form2" element={<FormDemo2 />}  />
        <Route path="/form3" element={<FormDemo3 />}  />
        <Route path="/form4" element={<FormDemo4 />}  />
        <Route path="/form5" element={<FormDemo5 />}  />
        <Route path="/formValid" element={<FormValid />}  />
        <Route path="/formValid1" element={<FormValid1 />}  />
        <Route path="/formValid2" element={<FormValid2 />}  />
        <Route path="/watchForm" element={<WatchForm />}  />
        <Route path="/apiDemo1" element={<ApiDemo1 />}  />
        <Route path="/apiDemo2" element={<ApiDemo2 />}  />
        <Route path="/apiDemo3" element={<ApiDemo3 />}  />
        <Route path="/apiDemo4" element={<ApiDemo4 />}  />
        <Route path="/apiMovie/:id" element={<MovieDetail />}  />
        <Route path="/apiDemo5" element={<ApiDemo5 />}  />
      </Routes>
      {/* <FooterComponent footer="2026" />  */}
    </div>
  );
}

export default App;
