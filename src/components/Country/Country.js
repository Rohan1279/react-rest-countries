import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, population, area, flags } = props.country;
  return (
    <div className="country">
      <h2>{name.common}</h2>
      <p>Population: {population}</p>
      <p>Area:{area}</p>
      <img src={flags.png} alt=""/>
    </div>
  );
};

export default Country;
