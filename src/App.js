import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import SignIn from "./Components/LogInPage/SignIn";
import SignUp from "./Components/LogInPage/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import NoMatch from "./Components/NoMatch/NoMatch";
import Services from "./Components/Services/Services";
function App() {
  return (
    <>
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
          <Route exact path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
