import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./weather";
import Astronomy from "./astronomy.js";
import Forecast from "./forecast.js";
import Sports from "./sports.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// const initialFormValues = {
//   city: "Honolulu",
// };

function App() {
  const [data, setData] = useState();
  const [astro, setAstro] = useState();
  const [sports, setSports] = useState();
  const [foreCast, setForecast] = useState();

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=aa1aca8fef9d4c3f9c2123921210502&q=96822"
      )
      .then((res) => {
        setData(res.data);
        console.log("fetched current weather data", res.data);
        //console.log(res.data.location.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/astronomy.json?key=aa1aca8fef9d4c3f9c2123921210502&q=96822"
      )
      .then((res) => {
        setAstro(res.data);
        console.log("fetched astronomy data", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/sports.json?key=aa1aca8fef9d4c3f9c2123921210502&q=96822"
      )
      .then((res) => {
        setSports(res.data);
        console.log("fetched sports data", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/forecast.json?key=aa1aca8fef9d4c3f9c2123921210502&q=96822&days=5"
      )
      .then((res) => {
        setForecast(res.data);
        console.log("fetched forecast data", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="App d-flex flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >  
     {data === undefined ? ( <div>loading...</div>) : (
      <div className='d-flex flex-column justify-content-center'style={{marginTop: '5rem'}}>
      <form className="d-flex justify-content-center">
     
        <div
          className="d-flex justify-content-center flex-column align-items-center"
          style={{ padding: "3rem" }}
        >
          <p className="display-1">Hello {data.location.name}</p>
          <h5>
            Your current date and time is {data.location.localtime} in the{" "}
            {data.location.tz_id} timezone
          </h5>
          <div className="shadow">
            {" "}
            <div className="d-flex justify-content-center">
              <p>
                {" "}
                {data.location.name}, {data.location.region},{" "}
                {data.location.country}
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                {data.location.lon} longitude {data.location.lat} latitude{" "}
              </p>
            </div>
          </div>
        </div>
        <Weather data={data} />{" "}
      </form>
      <Astronomy data={astro} />
      <Forecast data={foreCast} />
      <Sports data={sports} />
      </div>
       
       )}
    </div>
  );
}

export default App;
