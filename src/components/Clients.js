import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Clients() {
  let [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/clients`, { withCredentials: true })
      .then((response) => {
        setClientsData(response.data);
      });
  }, []);
  console.log(clientsData);

  return (
    <>
      {clientsData.map((client, index) => (
        <Link to={`/dashboard/clientDetail/${client._id}`} key={index}>
          <p>{client.name}</p>
        </Link>
      ))}
    </>
  );
}
