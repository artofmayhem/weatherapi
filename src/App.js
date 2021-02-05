import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=aa1aca8fef9d4c3f9c2123921210502&q=Honolulu"
      )
      .then((res) => {
        setData(res.data);
        console.log("fetched data", res.data);
        console.log(res.data.location.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
      <div
        className="App jumbotron d-flex flex-row justify-content-between"
        style={{ minHeight: "100vh" }}
      >
        <div className="d-flex justify-content-center flex-column align-items-center">
          <p className="display-1">Hello {data.location.name}</p>
          <h5>
            Your current date and time is {data.location.localtime}{" "}
            {data.location.tz_id}
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
        <div
          className="d-flex justify-content-center flex-column align-items-center"
          style={{
            backgroundColor: "#444",
            opacity: "0.7",
            boxShadow: "1rem 1rem 1.5rem #aaa",
            borderRadius: "10px",
          }}
        >
          {/* <img src={data.current.conditions.icon} alt='time of day icon'></img> */}
          <p style={{ padding: "0 5rem" }}>
            Today's Weather in {data.location.name} is {data.current.cloud}%{" "}
            {data.current.condition.text}
          </p>
          <br></br>
          <p>
            The temperature is {data.current.temp_f}f / {data.current.temp_c}c
          </p>
          <br></br>
          <p>
            {" "}
            Wind is coming in from {data.current.wind_dir} at{" "}
            {data.current.wind_mph} mph / {data.current.wind_kph} kph <br />{" "}
            with gusts of {data.current.gust_mph} mph / {data.current.gust_kph}{" "}
            kph
          </p>
          <p>
            {" "}
            Current Precipitation is: {data.current.precip_in} in /{" "}
            {data.current.precip_mm} mm
          </p>
          <p>
            Humidity is {data.current.humidity}% and the barometric pressure is{" "}
            {data.current.pressure_mb} mb / {data.current.pressure_in} in
          </p>
          <p>
            It currently feels like {data.current.feelslike_f}f /{" "}
            {data.current.feelslike_c}c
          </p>
          <br></br>
          <br></br>
          <p>
            Visibility is at {data.current.vis_miles} miles /{" "}
            {data.current.vis_km} Km{" "}
          </p>
          <p>UV index: {data.current.uv}</p>
        </div>
      </div>
  );
}

export default App;
