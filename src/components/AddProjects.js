import { React, useState } from "react";
import axios from "axios";

export default function AddProjects() {
  let [addProjects, setAddProjects] = useState();

  const handleAddProjects = (e) => {
    e.preventDefault();
    const { projectName, title, startDate, endDate, amount, mark } = e.target;

    axios
      .post(
        `http://localhost:5000/api/projects/create`,
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
        setAddProjects(response.data);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddProjects}>
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
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="title"
            aria-describedby="emailHelp"
          />
         
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputtag1">startDate</label>
          <input
            name="startDate"
            type="date"
            className="form-control"
            id="exampleInputtag1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputtag1">endDate</label>
          <input
            name="endDate"
            type="date"
            className="form-control"
            id="exampleInputtag1"
          />
        </div>  <div className="form-group">
          <label htmlFor="exampleInputtag1">amount</label>
          <input
            name="amount"
            type="number"
            className="form-control"
            id="exampleInputtag1"
          />
        </div>  <div className="form-group">
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
