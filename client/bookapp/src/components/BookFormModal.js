import {Modal, Button} from 'react-bootstrap';
import React, { useEffect, useState } from "react";

const BookFormModal = ({clicked}) => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const handleShow = clicked;
    return (
        
        <div>
            
                    
            
                <Modal show={handleShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
        
            
        </div> 
    )
}

export default BookFormModal
