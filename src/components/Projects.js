import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Projects() {
      let [projectsData, setProjectsData] = useState([]);

      useEffect(() => {
        axios
          .get(`http://localhost:5000/api/projects`, { withCredentials: true })
          .then((response) => {
            setProjectsData(response.data);
            console.log(response.data)
          });
      }, []);
      console.log(projectsData);
    
      return (
        <>
          {projectsData.map((project, index) => (
            <Link to={`/dashboard/projectDetail/${project._id}`} key={index}>
              <p>{project.projectName}</p>
            </Link>
          ))}
        </>
      );
    }