import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Delivery = ({total, setTotal}) => {

const [flowers, setFlowers] = useState([]);
const [flowersInCheckout, setFlowersInCheckout] = useState([]);

useEffect(() => {
    const fetchFlowers = async () => {
      const res = await axios.get("http://localhost/backend/flowers/read.php");
      const flowers = res.data.records;
      setFlowers(flowers);
    };
    fetchFlowers();
  }, []);
  
  return (
    <Container className='mt-5'>
    <h1>Delivery Service</h1>
    </Container>
    
  );
    

  

};

export default Delivery;


/*const Ride = ({ total, setTotal }) => {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [distance, setDistance] = useState();
  const [cars, setCars] = useState([]);*/

/* Flower object contains "id": "1",
                "name": "Spring Flower",
                "store_code": "1",
                "img_path": "images/flowers/spring.jpg",
                "price": "12.99"
*/


/* <h1 class="">Plan your Delivery</h1>
  <br>
  <div class='row'>
    <div class='col-10'>
      <?php
      $i = 0;
      while ($i < $stmt->num_rows) {
        $stmt->bind_result($name, $price, $description, $src);
        $stmt->fetch();
        echo '<div class="card shop-item" style="width: 10rem;" draggable="true">
            <img class="card-img-top img-fluid" src="' . $src . '" alt="">
            <div class="card-body">
              <h4 class="card-title-0">' . $name . '</h4>
              <p class="card-text">' . $description . '</p>
              <p class="card-text">
                <small class="text-muted"> $' . $price . '.99</small>
              </p>
            </div>
          </div>';
        $i++;
      }
      ?>
    </div>

    <div class="col-2 shop-cart" style="background-color: #F3F3F3">
      <h6>Shopping cart</h6>
      <h6 class="total-price">Total Price --> $0</h6>
      <button class="btn btn-dark btn-block" type="button" onclick="clearShoppingCart()">Clear</button>
      <a href='../pages/checkout.php'><button class="btn btn-dark btn-block" type="button">Checkout</button></a>
    </div>

  </div>
*/