import React from 'react';

export default function Weather(props) {
        const { data } = props;
        

 
    return (
        <div
        className="d-flex justify-content-center flex-column align-items-center"
        style={{
          backgroundColor: "#444",
          opacity: "0.7",
          boxShadow: "1rem 1rem 1.5rem #aaa",
          borderRadius: "10px",
        }}
      >
        <img src={`http:${data.current.condition.icon}`} alt='time of day icon'></img> 
       <p style={{ padding: "0 5rem" }}>
          Today's cloud coverage in {data.location.name} is {data.current.cloud}%{" "}
          and {data.current.condition.text}
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
        <p style={{paddingTop: '3rem'}}>
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </p>
      </div>
    )
}