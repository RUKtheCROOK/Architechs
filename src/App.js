import "bootstrap/dist/js/bootstrap.min.js"; // to use bootstrap javascript in App.js the css is in the scss file
import './App.scss'; // to replace App.css and uses sass to compile the css for App.js
//import the data service
import DataService from "//services/dataServices"
// import components
// import Header from "./components/header";
import Footer from "./components/footer";
// import Navbar from './components/navbar'; //this is the navbar that stays at the top of the page
import ScrollingNavbar from './components/useComponents/scrollingNavbar'; //this is the navbar that scrolls with the page
// import pages
import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Projects from "./pages/projects";
// import Resume from "./pages/resume";
import Profile from './pages/profile';
import Feed from './pages/feed';
import Bids from './pages/bids';
import Login from './pages/login';
import Signup from './pages/signup';
// import Logout from './pages/logout';
import Messages from './pages/messages';



import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let dataService = new DataService();
  let user = dataService.getLoggedInUser();
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollingNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <script src="https://kit.fontawesome.com/5f81d5fe89.js" crossorigin="anonymous"></script>
    </div> 
  );
}

export default App;