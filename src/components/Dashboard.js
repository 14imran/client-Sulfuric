// import logo from "./logo.svg";
// import "./App.css";
import { react, useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import axios from "axios";
import { Route, Switch, Redirect,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import MyNav from "./MyNav";
import AddClient from "./AddClient";
import Clients from "./Clients";
import Clientdetails from "./Clientdetails";
import EditClient from "./EditClient";
import AddProjects from "./AddProjects";
import Projects from "./Projects";
import Projectdetails from "./Projectdetails";
import EditProject from "./EditProject";
import AddTodo from "./AddTodo";
import Todo from './Todo'

export default function App(props) {
  const [loggedInUser, setloggedInUser] = useState(false)

  
  return (
    <div className="container-fluid">
      <div className="row">
            <div className="col-sm-2">
                  <MyNav />

            </div>
      
      <div className="col-cm-10">
      <Switch>
        <Route path="/dashboard/clients" component={Clients} />;
        <Route path="/dashboard/add-clients" component={AddClient} />
        <Route exact path="/dashboard/clientDetail/:clientID" component={Clientdetails} />
        <Route path="/dashboard/clientDetail/edit/:clientID" component={EditClient} />
        //projects
        <Route path="/dashboard/projects" component={Projects} />;
        <Route path="/dashboard/add-projects" component={AddProjects} />
        <Route exact path="/dashboard/projectDetail/:projectID" component={Projectdetails}
        />
        <Route path="/dashboard/projectDetail/edit/:projectID" component={EditProject} />
    
         // Todo
         <Route path="/dashboard/addtodo" component={AddTodo} />
         <Route path="/dashboard/todo" component={Todo} />
        {/* <Route
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
        /> */}
      </Switch>
      </div>
      </div>
    </div>
  );
}
