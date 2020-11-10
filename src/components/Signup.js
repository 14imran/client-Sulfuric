import { React, useState } from "react";
import axios from "axios";

export default function SignUp(props){
    let [loggedInUser, setloggedInUser] = useState();

    const handleSignUp = (e) => {
      e.preventDefault();
      const { username, email, password } = e.target;
  
      axios
        .post(
          `http://localhost:5000/api/signup`,
          {
            username: username.value,
            email: email.value,
            password: password.value,
          },
          { withCredentials: true }
        )
        .then((response) => {
          setloggedInUser(response.data);
          props.history.push('/');
        });
    };
  





    return (
        <form onSubmit={handleSignUp}>
            <div className="form-group">
                <label htmlFor="exampleInputUsername">Username</label>
                <input type="text" className="form-control" id="exampleInputUsername" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}