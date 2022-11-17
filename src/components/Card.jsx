import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function CardComp({ data }) {
  return (
    
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {data.address.city}
          </Card.Subtitle>
          <Card.Text>{data.company.bs}</Card.Text>
          <Card.Link href="#">{data.email}</Card.Link>
          <Card.Link href="#">{data.phone}</Card.Link>
          <Card.Link href="#">{data.website}</Card.Link>
        </Card.Body>
      </Card>
      
    </div>
  );
}
export default CardComp;
