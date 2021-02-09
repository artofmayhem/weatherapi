import React, { useState, useEffect } from 'react';

export default function Weather(props) {


        const [icon, setIcon] = useState(props.data.current.condition.icon)
        const [name, setname] = useState(props.data.current.condition.name)
        const [cloud, setCloud] = useState(props.data.current.condition.cloud)
        const [text, setText] = useState(props.data.current.condition.text)
        const [temp_f, setTemp_f] = useState(props.data.current.condition.temp_f)
        const [temp_c, setTemp_c] = useState(props.data.current.condition.temp_c)
        const [precip_in, setPrecip_in] = useState(props.data.current.condition.precip_in)
        const [precip_mm, setPrecip_mm] = useState(props.data.current.condition.precip_mm)
        const [humidity, setHumidity] = useState(props.data.current.condition.humidity)
        const [pressure_mb, setPressure_mb] = useState(props.data.current.condition.pressure_mb)
        const [pressure_in, setPressure_in] = useState(props.data.current.condition.pressure_in)
        const [feelslike_f, setFeelslike_f] = useState(props.data.current.condition.feelslike_f)
        const [feelslike_c, setFeelslike_c] = useState(props.data.current.condition.feelslike_c)
        const [vis_miles, setVis_miles] = useState(props.data.current.condition.vis_miles)
        const [vis_km, setVis_km] = useState(props.data.current.condition.vis_km)
        const [uv, setUV] = useState(props.data.current.condition.uv)
        const [wind_dir, setWind_dir ] = useState(props.data.current.condition.wind_dir)
        const [wind_mph, setWind_mph ] = useState(props.data.current.condition.wind_mph)
        const [wind_kph, setWind_kph ] = useState(props.data.current.condition.wind_kph)
        const [gust_mph, setGust_mph ] = useState(props.data.current.condition.gust_mph)
        const [gust_kph, setGust_kph] = useState(props.data.current.condition.gust_kph)
        
 
        console.log("Unpacking Weather Sir... Data Unpacked. ", props.data.current.condition.icon )
        

       
 
    return (
        <div
        className="d-flex justify-content-center flex-column align-items-center"
        style={{
          backgroundColor: "black",
          opacity: "0.7",
          boxShadow: "0 0 1.5rem #666",
        }}
      >
        <img src={`https:${icon}`} alt='time of day icon'></img> 
       <p style={{ padding: "0 5rem" }}>
          Today's cloud coverage in {name} is {cloud}%{" "}
          and {text}
        </p>
        <br></br>
        <p>
          The temperature is {temp_f}f / {temp_c}c
        </p>
        <br></br>
        <p>
          {" "}
          Wind is coming in from {wind_dir} at{" "}
          {wind_mph} mph / {wind_kph} kph <br />{" "}
          with gusts of {gust_mph} mph / {gust_kph}{" "}
          kph
        </p>
        <p>
          {" "}
          Current Precipitation is: {precip_in} in /{" "}
          {precip_mm} mm
        </p>
        <p>
          Humidity is {humidity}% and the barometric pressure is{" "}
          {pressure_mb} mb / {pressure_in} in
        </p>
        <p>
          It currently feels like {feelslike_f}f /{" "}
          {feelslike_c}c
        </p>
        <br></br>
        <br></br>
        <p>
          Visibility is at {vis_miles} miles /{" "}
          {vis_km} Km{" "}
        </p>
        <p>UV index: {uv}</p>
        <p style={{paddingTop: '3rem'}}>
          Powered by{" "}
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            WeatherAPI.com
          </a>
        </p>
      </div>
    )
}