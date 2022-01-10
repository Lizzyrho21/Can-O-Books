
import { Button } from 'react-bootstrap';
import { useState } from "react";
import BookFormModal from './BookFormModal';




const FormButton = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(true);

    return (
        <>
            <Button onClick={handleClick} >Add Book </Button>  
            <BookFormModal clicked={click} setClicked={setClick}/>
        
        </>
    )
}

export default FormButton
