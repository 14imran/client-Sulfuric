// import logo from "./logo.svg";

// import './components/Landing/index.css'
import { react, useState } from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import axios from "axios";
import { Route, Switch, Redirect ,Link} from "react-router-dom";



import React from "react";
import MyNav from "./components/MyNav";
import AddClient from "./components/AddClient";
import Clients from "./components/Clients";
import Clientdetails from "./components/Clientdetails";
import EditClient from "./components/EditClient";
import AddProjects from "./components/AddProjects";
import Projects from "./components/Projects";
import Projectdetails from "./components/Projectdetails";
import EditProject from "./components/EditProject";
import Dashboard from './components/Dashboard'
// import "./App.css";
import LandingPage from './Landing/components/App'
//landing



function LandingHomePage(){
  return(
    <>
    <Link to='/dashboard'>Goto Dashboard</Link>
    <Link to='/Signup'>Signup</Link>
    <Link to='/Signin'>Signin</Link>

    </>
  )
}


export default function App(props) {
  const [loggedInUser, setloggedInUser] = useState(false)

  
  return (
    <>
     
    
         <Switch>
      
        
         <Route exact path="/" component={LandingPage} />; 
         <Route  path="/dashboard/" component={Dashboard} />;
        <Route
          path="/sign-up"
          render={(routeProps) => {
            return <Signup  loggedInUser={loggedInUser} 
             {...routeProps} />;
          }}
        />
        <Route
          path="/sign-in"
          render={(routeProps) => {
            return <Signin loggedInUser={loggedInUser}  {...routeProps} />;
          }}
        />
      </Switch>
      </>
      
  );
}
