import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Clientdetails(props) {
  let [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    let clientId = props.match.params.clientID;
    axios
      .get(`http://localhost:5000/api/clients/${clientId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setClientsData(response.data);
      });
  }, []);

  const handleDelete = () => {
    let clientId = props.match.params.clientID;
    axios
      .delete(`http://localhost:5000/api/clients/delete/${clientId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setClientsData(response.data);
      });
  };

  console.log(clientsData._id);

  return (
    <div>
      <p>{clientsData.name}</p>
      <p>{clientsData.email}</p>
      <p>{clientsData.tag}</p>

      <Link to={`/clientDetail/edit/${clientsData._id}`}>
        <button>Edit</button>{" "}
      </Link>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  );
}
