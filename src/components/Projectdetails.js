import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Projectdetails(props) {
      let [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    let projectId = props.match.params.projectID
    console.log('im proid',projectId)
    axios
      .get(`http://localhost:5000/api/projects/${projectId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setProjectsData(response.data);
      });
  }, []);

  const handleDelete = () => {
    let projectId = props.match.params.projectID;
    axios
      .delete(`http://localhost:5000/api/projects/delete/${projectId}`, {
        withCredentials: true,
      })
      .then((response) => {
            setProjectsData(response.data);
      });
  };

  console.log(projectsData._id);

  return (
    <div>
      <p>{projectsData.projectName}</p>
      <p>{projectsData.title}</p>
      <p>{projectsData.amount}</p>

      <Link to={`/projectDetail/edit/${projectsData._id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  );
}