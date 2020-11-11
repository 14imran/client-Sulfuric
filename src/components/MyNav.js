import { React, useState } from "react";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNav(props) {
  const [loggedInUser, setloggedInUser] = useState(false);

  const [errorMessage, seterrorMessage] = useState(null);
  let buttonStyle = { marginLeft: "10px" };
  const handleLogout = () => {
  

    axios
      .post(`http://localhost:5000/api/logout`, {}, { withCredentials: true })
      .then(() => {
        setloggedInUser(true);
        props.history.push("/");
      });
  };

  return (
    <Nav className="flex-column" bg="light" expand="lg">
      {/* <Link to="/dashboard/todo">Todos</Link> */}

      <Link to="/dashboard/clients">All clients</Link>
      <Link to="/dashboard/add-clients">Add clients</Link>

      <Link style={buttonStyle} to="/dashboard/addtodo">
        Add Todo
      </Link>
      <Link to="/dashboard/todo">Todos</Link>
      <Link to="/dashboard/projects">All projects</Link>
      <Link to="/dashboard/add-projects">Add Projects</Link>

      <Link to="/dashboard/proposal">Proposal</Link>
      {loggedInUser ? (
        <button style={buttonStyle} onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <>
          <Link style={buttonStyle} to="/sign-in">
            Sign In
          </Link>
          <Link style={buttonStyle} to="/sign-up">
            Sign Up
          </Link>
        </>
      )}
    </Nav>
  );
}

export default MyNav;
