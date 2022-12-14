import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css' 
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data.slice(0,10)));
  }, []);
  return (
    <div>
      <h1>Hello from countries {countries.length}</h1>
      <h1>Updated from github</h1>
      <h1>Second update from github</h1>
     <div  className="countries-container">
     {
      countries.map(country => <Country
      country = {country}
      key= {country.cca3}
      ></Country>)
     }
     </div>
    </div>
  );
};

export default Countries;
