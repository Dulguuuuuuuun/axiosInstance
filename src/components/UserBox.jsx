import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function UserBox({ user }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="img"
        variant="top"
        onMouseOver={(e) =>
          user.images.length === 1
            ? (e.target.src = user.image[0])
            : (e.target.src = user.image[1])
        }
        onMouseLeave={(e) => (e.target.src = user.images[0])}
        src={user.images[0]}
      />
      <Card.Body>
        <Card.Title>{user.title}</Card.Title>
        <hr />
        <Card.Text>{user.category}</Card.Text>
        <hr />
        <Card.Text>{user.id}</Card.Text>
        <hr />
        <Card.Text>{user.price}</Card.Text>
        <hr />
        <Card.Text>{user.stock}</Card.Text>
        <hr />
        <Card.Text>{user.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserBox;
