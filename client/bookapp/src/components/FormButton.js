
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import BookFormModal from './BookFormModal';




const FormButton = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(true);

    return (
        <>
            <Button onClick={handleClick} >Add Form </Button>  
            <BookFormModal clicked={click}/>
        
        </>
    )
}

export default FormButton
