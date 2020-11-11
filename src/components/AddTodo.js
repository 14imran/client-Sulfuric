import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link,Route } from "react-router-dom";


export default function AddTodo(props) {
      // if (!props.loggedInUser) {
      //       return <Redirect to={'/sign-in'} />
      //   }
              const [todo,setTodo]= useState([])
        const handleAddTodo =(e)=>{
            e.preventDefault()
            const {name, description, image} = e.target
            let imageFile = image.files[0]
        
            let uploadForm = new FormData()
            uploadForm.append('imageUrl', imageFile)
        
            axios.post(`http://localhost:5000/api/upload`, uploadForm)
              .then((response) => {
        
                  let newTodo = {
                    name: name.value,
                    description: description.value,
                    completed: false,
                    image: response.data.image
                  }
              
                  axios.post(`http://localhost:5000/api/todo/create`, newTodo)
                  .then((response) =>{
                        setTodo(response.data)      
                        props.history.push('/dashboard/todo')
                  })
              })
        
        }
    
        return (
              <>
            <form onSubmit={handleAddTodo} >
                <input name="name" type="text" placeholder="Enter name"></input>
                <input name="description"  type="text" placeholder="Enter description"></input>
                <input type="file" name="image" />
                <button type="submit">Submit</button>
            </form>
                {/* <Route  path="/dashboard/todo" render={() => {
                  return <Todo todos={todo} />
                }} /> */}
             
        </>

        
        )
    }
