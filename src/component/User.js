import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function User({ x }) {
 const navigate =   useNavigate()

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{x.name}</Card.Title>
          <Card.Title>{x.username}</Card.Title>
          <Card.Title>{x.email}</Card.Title>

          <Card.Text>{x.address.street}</Card.Text>
          <Card.Text>{x.address.suite}</Card.Text>
          <Card.Text>{x.address.city}</Card.Text>
          <Card.Text>{x.address.zipcode}</Card.Text>
          <Card.Text>{x.address.geo.lat}</Card.Text>
          <Card.Text>{x.address.geo.lng}</Card.Text>
        </Card.Body>
        <Button onClick={()=> navigate(`/${x.id}`)}  > Go To Profile  </Button>
      </Card>
    </div>
  );
}

export default User;
