import React from "react";

const FormInput = ({ setSource, setDestination }) => {
  return (
    <div>
      <label for="source">Source</label>
      <input
        onChange={(e) => setSource(e.target.value)}
        className="form-control"
        id="source"
        placeholder="Enter source address"
      />
      <br />
      <label for="destination">Destination</label>
      <input
        onChange={(e) => setDestination(e.target.value)}
        className="form-control"
        id="destination"
        placeholder="Enter destination address"
      />
    </div>
  );
};

export default FormInput;
