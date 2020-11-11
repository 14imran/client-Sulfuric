import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import {Modal,Button} from 'react-bootstrap'
export default function Todo(props) {
  let [todoData, settodoData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [clickData, setClickData] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/todo/todos`, { withCredentials: true })
      .then((response) => {
        settodoData(response.data);
      });
  }, []);
  console.log(todoData);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/todo/todos/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        settodoData(response.data);
        props.history.push("/dashboard");
      });
  };

 
  const handleClick =(todo)=>{
      setClickData(todo)
      setModalShow(true)
  }

  return (
    <div>
      In todo list
      {todoData.map((todo) => {
        return (
          <>
            <p key={todo._id}>{todo.name}</p>
            <div>{todo.description}</div>
            <img src={todo.image} alt={todo.name} />
            {/* <button
              onClick={() => {
                handleEdit(todo._id, todo.name, todo.description, todo.image);
              }}
            >
              Edit{" "}
            </button> */}
            <Button variant="primary" onClick={() => handleClick(todo)}>
            Edit
             </Button>
            <button
              onClick={() => {
                handleDelete(todo._id);
              }}
            >
              Delete
            </button>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        
        clickData={clickData}
      />
          </>
        );
      })}
    </div>
  );
}


function MyVerticallyCenteredModal(props) {
      const handleEditSubmit = (e)=>{
            e.preventDefault();
            const { name, id, description } = e.target;
            const newObj = {
                  name : name.value,
                  id: id.value,
                  description : description.value
            }
            console.log("ondub" , newObj)
            axios
            .patch(
              `http://localhost:5000/api/todo/edit/${newObj.id}`,
              newObj,
              { withCredentials: true }
            )
            .then((response) => {
                  props.onHide()
            });
      }
     
     

      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Edit Todo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Enter the details</h4>
            <form onSubmit={handleEditSubmit}>
            <input name="id" 
                
                type="text" placeholder="Enter id" value={props.clickData._id} />
                <input name="name" 
                
                type="text" placeholder="Enter name" defaultvalue={props.clickData.name}/>
                <input name="description"  type="text" 
             
                placeholder="Enter description" defaultvalue={props.clickData.description}/>
                {/* <input type="file" name="image" /> */}
                <button type="submit">Submit</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    