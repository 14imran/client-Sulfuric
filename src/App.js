import logo from "./logo.svg";
import "./App.css";
import { react, useState } from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

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

export default function App(props) {
  return (
    <div>
      <MyNav />
      <Switch>
        <Route path="/clients" component={Clients} />;
        <Route path="/add-clients" component={AddClient} />
        <Route exact path="/clientDetail/:clientID" component={Clientdetails} />
        <Route path="/clientDetail/edit/:clientID" component={EditClient} />
        //projects
        <Route path="/projects" component={Projects} />;
        <Route path="/add-projects" component={AddProjects} />
        <Route exact path="/projectDetail/:projectID" component={Projectdetails}
        />
        <Route path="/projectDetail/edit/:projectID" component={EditProject} />
        <Route
          path="/sign-up"
          render={(routeProps) => {
            return <Signup  {...routeProps} />;
          }}
        />
        <Route
          path="/sign-in"
          render={(routeProps) => {
            return <Signin  {...routeProps} />;
          }}
        />
      </Switch>
    </div>
  );
}
