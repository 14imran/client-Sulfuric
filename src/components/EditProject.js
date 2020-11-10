import { React, useState, useEffect } from "react";
import axios from "axios";

export default function EditProject(props) {
  let [addProject, setAddProject] = useState();

  const handleEditProject = (e) => {
    e.preventDefault();
    const  {projectName, title,startDate,endDate,amount,mark} = e.target;

    let projectId = props.match.params.projectID
    axios
      .patch(
        `http://localhost:5000/api/projects/edit/${projectId}`,
        {
            projectName: projectName.value,
            title: title.value,
            startDate: startDate.value,
            endDate: endDate.value,
            amount: amount.value,
            mark: mark.value,
           
        },
        { withCredentials: true }
      )
      .then((response) => {
        setAddProject(response.data);
      });
  };

  return (
    <div>

      <form onSubmit={handleEditProject}>
        <div className="form-group">
          <label htmlFor="exampleInputUsername">Project name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            name="projectName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="title"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputtag1"> start date</label>
          <input
            name="startDate"
            type="date"
            className="form-control"
            id="exampleInputtag1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputtag1"> end date</label>
          <input
            name="endDate"
            type="date"
            className="form-control"
            id="exampleInputtag1"
          />
        </div>    
        <div className="form-group">
          <label htmlFor="exampleInputtag1"> amount $</label>
          <input
            name="amount"
            type="number"
            className="form-control"
            id="exampleInputtag1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputtag1">mark</label>
          <input
            name="mark"
            type="text"
            className="form-control"
            id="exampleInputtag1"
          />
        </div>


        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
