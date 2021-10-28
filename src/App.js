import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./Components/About/About";
import Admin from "./Components/Admin/Admin";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import SignIn from "./Components/LogInPage/SignIn";
import SignUp from "./Components/LogInPage/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import NoMatch from "./Components/NoMatch/NoMatch";
import Services from "./Components/Services/Services";
import { FaArrowUp } from "react-icons/fa";
import User from "./Components/User/User";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Components/LogInPage/PrivateRoute";
export const userContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  const [show, handleShow] = useState(false);
    
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const backToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    {/* <img src="Images/House-Cleaning-service.jpg" alt="" /> */}
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/user">
            <User />
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="*">
            <NoMatch />
          </Route>
        </Switch>
        {show &&<ul class="smothscroll" onClick={() => backToTop()}   ><li id="myBtn"><a href="#navbar"><FaArrowUp /></a></li></ul>
             }
    <Footer/>
    </Router>
    </userContext.Provider>
  );
}

export default App;
