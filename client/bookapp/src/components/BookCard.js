import React from 'react'
import { Card, Button } from 'react-bootstrap';


const BookCard = ({key, title, description}) => {
    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">See more</Button>
  </Card.Body>
</Card> 
        </div>
    )
}

export default BookCard
