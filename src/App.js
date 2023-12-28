import React, { useState, useEffect } from "react";
import axios from "axios";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [states, setstates] = useState([]);
  const [cities, setcities] = useState([]);
  const [countryName, setcountryName] = useState("");
  const [stateName, setstateName] = useState("");
  const [cityName, setcityName] = useState("");
  useEffect(() => {
    axios
      .get("https://crio-location-selector.onrender.com/countries")
      .then((res) => {
        setCountries(res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://crio-location-selector.onrender.com/country=${countryName}/states`
      )
      .then((res) => {
        setstates(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [countryName]);

  useEffect(() => {
    axios
      .get(
        `https://crio-location-selector.onrender.com/country=${countryName}/state=${stateName}/cities`
      )
      .then((res) => {
        setcities(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [countryName, stateName]);

  return (
    <div
      style={{
        // display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "5rem",
      }}
    >
      <div className="country">
        {countries && (
          <select
            value={countryName}
            onChange={(e) => {
              setcountryName(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="option1">Select your Country</option>
            {countries.map((ele, index) => (
              <option key={index} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* //////////////////////////////////// */}

      <div className="state">
    <select
      value={stateName}
      onChange={(e) => {
        setstateName(e.target.value);
        setcityName(''); // Reset city selection when changing the state
      }}
      disabled={!countryName || !states.length}
    >
      <option value="option1">Select your State</option>
      {states.length > 0 &&
        states.map((ele, index) => (
          <option key={index} value={ele}>
            {ele}
          </option>
        ))}
    </select>
  </div>

  <div className="cities">
    <select
      value={cityName}
      onChange={(e) => {
        setcityName(e.target.value);
      }}
      disabled={!countryName || !stateName || !cities.length}
    >
      <option value="option1">Select your City</option>
      {cities.length > 0 &&
        cities.map((ele, index) => (
          <option key={index} value={ele}>
            {ele}
          </option>
        ))}
    </select>
  </div>

  {(countryName&&stateName&&cityName) ? (
    <p>
    <b>You selected <span style={{
        
    }}>{cityName ? cityName : 'City'}</span></b>, {stateName ? stateName : 'State'}, {countryName ? countryName : 'Country'}
  </p>
  ):null}    
  
  </div>
  );
}

export default Countries;
