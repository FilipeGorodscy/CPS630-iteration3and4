import React from "react";
import { Link } from "react-router-dom";

const FormButtons = ({ price, validateConfirmation, checkout }) => {
  const storeTotal = (e, price) => {
    // set to DB preferably (orders table)
    alert("Your order was saved");
    const total = localStorage.getItem("total");
    if (total) {
      price += parseInt(total);
    }
    localStorage.setItem("total", price);
  };

  return (
    <div>
      {validateConfirmation() && (
        <div>
          <input
            type="submit"
            onClick={(e) => storeTotal(e, price)}
            className="btn btn-outline-secondary w-100"
            value="Ride later"
          />
          <br />
          {
            <Link onClick={() => checkout()} to="/shopping-cart" className="text-light btn btn-secondary w-100 mt-2">
              Proceed to checkout
            </Link>
          }
        </div>
      )}
    </div>
  );
};

export default FormButtons;
