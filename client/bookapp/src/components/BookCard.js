import { useAuth0 } from "@auth0/auth0-react";
import { Card, Button } from 'react-bootstrap';




const BookCard = ({key, title, description}) => {
    const { isLoading } = useAuth0();


    if (isLoading) {
        return <div>Loading ...</div>;
      }
    return (
        <div style={{display: 'flex', flexDirection: 'row',  padding:"1rem"}}>
           <Card style={{ width: '20rem', justifyContent: 'center', }}>
  <Card.Img variant="top" src="https://via.placeholder.com/150" />
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
