import {Modal, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {FloatingLabel} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookFormModal = ({clicked, setClicked}) => {
    const url = 'http://localhost:3004/';
       //Handles close of modal
        const handleClose = () => setClicked(false);
        //Handles open of modal
        const handleShow = clicked;

    //handle form data 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState(null);


    //add toast success message 
    const showToast = () => {
      toast("Submission successful!")
    };

const handleSubmit = () => {
  const data = {
    title: title,
    description: description,
    email:email,
  }
  axios.post(`${url}book`, data).then(res => {
    setData(res.data);
    setTitle('');
    setDescription('');
    setEmail('');
    handleClose();
    window.location.reload()
    showToast();
   
  }).catch(err => {
    console.error(`Error: ${err}`)
  });
}






        

    return (

      
     
        
        <div>
            
                    
            
                <Modal show={handleShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add a Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                <Form.Group> 
                <Form.Label>Title: </Form.Label>
                <input type="text"  placeholder="name input" 
                value={title}
                onChange={e => setTitle(e.target.value)}/>  
                </Form.Group> 

                <Form.Group>  

                <FloatingLabel controlId="floatingTextarea2" label="Description">
                <input type="textarea"  placeholder="description input" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{ height: '100px', marginTop: '17px' }}/> 
            </FloatingLabel>
            </Form.Group>



                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <input type="email"  placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
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
        
                <ToastContainer />
        </div> 
    )
}

export default BookFormModal
