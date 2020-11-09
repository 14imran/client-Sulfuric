import logo from "./logo.svg";
import "./App.css";
import {react,useState} from 'react'
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import axios from 'axios'
import {Route, Switch,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import MyNav from "./components/MyNav";

export default function App(props) {
  let [loggedInUser, setloggedInUser] = useState()

  const handleSignUp = (e) => {
        e.preventDefault()
        const {username, email, password} = e.target
    
        axios.post(`http://localhost:5000/api/signup` , {
          username: username.value, 
          email: email.value, 
          password: password.value
        }, {withCredentials: true})
          .then((response) => {
    
          setloggedInUser(()=>{
            loggedInUser= response.data;
          })
          // props.history.push('/');

              })}

            const  handleSignIn = (e) => {
                e.preventDefault()
                e.preventDefault()
                const {email, password} = e.target
            
                axios.post(`http://localhost:5000/api/signin` , {
                  email: email.value, 
                  password: password.value
                }, {withCredentials: true})
                  .then((response) => {
                    setloggedInUser({
                      loggedInUser: response.data
                    })
                  })
                  .catch((er) => {
                    setloggedInUser({
                        errorMessage: er.response.data.error
                      })
                  })
              }
        
        

  return (
    <div>
     
      <MyNav />
       <Switch>

   <Route path="/sign-up" render={(routeProps) => {
            return <Signup onSignUp={handleSignUp} {...routeProps} />
          }}/>

<Route path="/sign-in" render={(routeProps) => {
            return <Signin onSignIn={handleSignIn} {...routeProps} />
          }}/>

  </Switch>
    </div>
  )
}

// export default  function App(props) {
// const [loggedInUser, setloggedInUser] = useState()



//   const handleSignUp = (e) => {
//     e.preventDefault()
//     const {username, email, password} = e.target

//     axios.post(`http://localhost:5000/api/signup` , {
//       username: username.value, 
//       email: email.value, 
//       password: password.value
//     }, {withCredentials: true})
//     .then((response) => {

//       setloggedInUser(()=>{
//         loggedInUser= response.data;
//         // props.history.push('/');
//      })
//     }
     

        
      

//   return (
//   <div>
//   <Switch>
//   {/* <Signin /> */}
//   <Route path="/sign-up" render={(routeProps) => {
//             return <Signup onSignUp={handleSignUp} {...routeProps} />
//           }}/>
//   </Switch>
//   </div>
  
//   )
//   }

        

