import { React, useState, useEffect } from "react";
import axios from "axios";

export default function AddClient(props) {
  let [addClient, setAddClient] = useState();

  const handleEditClient = (e) => {
    e.preventDefault();
    const { name, email, tag } = e.target;

      let clientId = props.match.params.clientID;
      axios.patch(
          `http://localhost:5000/api/clients/edit/${clientId}`,
          {
            name: name.value,
            email: email.value,
            tag: tag.value,
          },
          { withCredentials: true }
        )
        .then((response) => {
          setAddClient(response.data)
        })
      }
      
    

  return (
    <div>
          hio from edit
      <form onSubmit={handleEditClient}>
        <div className="form-group">
          <label htmlFor="exampleInputUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputtag1">tag</label>
          <input
            name="tag"
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
