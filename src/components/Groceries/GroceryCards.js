import React, { useState, useEffect } from "react";
import { Card , Button } from "react-bootstrap";
//import axios from "axios";

const FlowerCards = (props) =>{

const dragStart = (e) =>{
  const target = e.target;
  e.dataTransfer.setData('card_id' , props.id);
  e.dataTransfer.setData('card_name' , props.name);
  e.dataTransfer.setData('card_price' , props.price);
  e.dataTransfer.setData('card_img' , props.img);

  setTimeout(() => {
    target.style.display='none';
  }, 0);

}

const dragOver = (e)=>{
  e.stopPropagation();

}

    return (
      
        <Card id={props.id} className={props.className} draggable="true" onDragStart={dragStart}  onDragOver={dragOver} style={{ width: '18rem' }}>
          <Card.Img variant="top" height='200px' src={props.img} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.price}
            </Card.Text>
          </Card.Body>
        </Card>
     
    );
};

export default FlowerCards;

/*
<div id={props.id} className={props.className} draggable="true" onDragStart={dragStart}  onDragOver={dragOver}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://source.unsplash.com/random/" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
     </div>
     */