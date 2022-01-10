import {Modal, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {FloatingLabel} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const BookFormModal = ({clicked, setClicked}) => {
    const FormData = require('form-data');
    const url = 'http://localhost:3004/';
       //Handles close of modal
        const handleClose = () => setClicked(false);
        //Handles open of modal
        const handleShow = clicked;
    


    //handles our form data
    const [formValue, setformValue] = useState({
        title: '',
        description: '', 
        email: '',
        });

        const handleSubmit = async() => {
            // store the states in the form data
            const loginFormData = new FormData();
            loginFormData.append("title", formValue.title);
            loginFormData.append("description", formValue.description);
            loginFormData.append("email", formValue.email);
          
            try {
              // make axios post request
              const response = await axios({
                method: "post",
                url: `${url}book`,
                data: loginFormData,
                headers: { "Content-Type": "multipart/form-data" },
              }); console.log(response.data);
            } catch(error) {
              console.log(error)
            }
          }

//handles the event that triggers when form data is submitted
const handleChange = (event) => {
    //useeffect here
    setformValue({
        //spread operator...
      ...formValue,
      [event.target.name]: event.target.value
    });
   
  }



        

    return (
        
        <div>
            
                    
            
                <Modal show={handleShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add a Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleChange}>
                <Form.Group> 
                <Form.Label>Title: </Form.Label>
                <Form.Control type="text"  placeholder="name input" onChange={handleChange}/>  
                </Form.Group> 

                <Form.Group>  

                <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                as="textarea"
               
                onChange={handleChange}
                placeholder="Put your description of book here"
                style={{ height: '100px', marginTop: '17px' }}
            />
            </FloatingLabel>
            </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"  placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>     
                </Form>       
                </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit Book
                    </Button>
                    </Modal.Footer>
                </Modal>
        
            
        </div> 
    )
}

export default BookFormModal
