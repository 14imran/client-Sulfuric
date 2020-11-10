import { React, useState } from "react";
import axios from "axios";

export default function SignIn(props) {
  //componentWillUnMount
  //     useEffect(() => {
  //         //didMount
  //         return props.onUnmount
  //     }, [])
  let [loggedInUser, setloggedInUser] = useState();
  const handleSignIn = (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    

    axios
      .post(
        `http://localhost:5000/api/signin`,
        {
          email: email.value,
          password: password.value,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setloggedInUser(response.data);
        props.history.push('/');
      })
      .catch((er) => {
        setloggedInUser({
          errorMessage: er.response.data.error,
        });
      });
  };

  
  return (
    <form onSubmit={handleSignIn}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={props.onUnmount}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      {/* {
                props.errorMessage ? (
                    <p style={{color:'red'}} >{props.errorMessage}</p>
                ) : null
            } */}
    </form>
  );
}
