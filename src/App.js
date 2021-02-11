import React, { useState, useEffect } from "react";
import axios from "axios";

// import Astronomy from "./astronomy.js";
// import Forecast from "./forecast.js";
// import Marvel from "./Marvel";
import stark from "./stark.png";
import ironman1 from "./ironman1.png";
import ironman2 from "./ironman2.jpg";
import reactortrans from "./reactor-trans.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// const initialFormValues = {
//   city: "Honolulu",
// };

function App() {
  const [data, setData] = useState();
  const [foreCast, setForecast] = useState();
  const [localTime, setTime] = useState();
  const [timeZone, setTimeZone] = useState();
  const [name, setName] = useState();
  const [region, setRegion] = useState();
  const [country, setCountry] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  const [icon, setIcon] = useState();
  const [name2, setname2] = useState();
  const [cloud, setCloud] = useState();
  const [text, setText] = useState();
  const [temp_f, setTemp_f] = useState();
  const [temp_c, setTemp_c] = useState();
  const [precip_in, setPrecip_in] = useState();
  const [precip_mm, setPrecip_mm] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure_mb, setPressure_mb] = useState();
  const [pressure_in, setPressure_in] = useState();
  const [feelslike_f, setFeelslike_f] = useState();
  const [feelslike_c, setFeelslike_c] = useState();
  const [vis_miles, setVis_miles] = useState();
  const [vis_km, setVis_km] = useState();
  const [uv, setUV] = useState();
  const [wind_dir, setWind_dir] = useState();
  const [wind_mph, setWind_mph] = useState();
  const [wind_kph, setWind_kph] = useState();
  const [gust_mph, setGust_mph] = useState();
  const [gust_kph, setGust_kph] = useState();
  const [moon_phase, setMoon_phase] = useState();
  const [moon_illumination, setMoon_illumination] = useState();
  const [moonrise, setMoonrise] = useState();
  const [moonset, setMoonset] = useState();
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [isLoading, setIsLoading] =useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/current.json?key=aa1aca8fef9d4c3f9c2123921210502&q=96822"
      )
      .then((res) => {
        setData(res.data);
        setTime(res.data.location.localtime);
        setTimeZone(res.data.location.tz_id);
        setName(res.data.location.name);
        setRegion(res.data.location.region);
        setCountry(res.data.location.country);
        setLongitude(res.data.location.lon);
        setLatitude(res.data.location.lat);
        setIcon(res.data.current.condition.icon);
        setname2(res.data.location.name);
        setCloud(res.data.current.cloud);
        setText(res.data.current.condition.text);
        setTemp_f(res.data.current.temp_f);
        setTemp_c(res.data.current.temp_c);
        setPrecip_in(res.data.current.precip_in);
        setPrecip_mm(res.data.current.precip_mm);
        setHumidity(res.data.current.humidity);
        setPressure_mb(res.data.current.pressure_mb);
        setPressure_in(res.data.current.pressure_in);
        setFeelslike_f(res.data.current.feelslike_f);
        setFeelslike_c(res.data.current.feelslike_c);
        setVis_miles(res.data.current.vis_miles);
        setVis_km(res.data.current.vis_km);
        setUV(res.data.current.uv);
        setWind_dir(res.data.current.wind_dir);
        setWind_mph(res.data.current.wind_mph);
        setWind_kph(res.data.current.wind_kph);
        setGust_mph(res.data.current.gust_mph);
        setGust_kph(res.data.current.gust_kph);

        // console.log(
        //   "Geolocating.... local information received.... complete",
        //   res.data
        // );
        console.log(
          "Geolocating.... local information received.... complete",
          data
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const PUBLIC_KEY = "e2413ca828a65e2cb80fba818d0052b7"; // your public key
  //const PRIVATE_KEY = "398de4eb8a05e988e0b39750de9e3098245b1e0c"; // your private key

  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/astronomy.json?key=aa1aca8fef9d4c3f9c2123921210502&q=96822"
      )
      .then((res) => {
       
        setMoon_phase(res.data.astronomy.astro.moon_phase);
        setMoon_illumination(res.data.astronomy.astro.moon_illumination);
        setMoonrise(res.data.astronomy.astro.moonrise);
        setMoonset(res.data.astronomy.astro.moonset);
        setSunrise(res.data.astronomy.astro.sunrise);
        setSunset(res.data.astronomy.astro.sunset);

        console.log("Required astronomy data... received", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=M&limit=50&apikey=${PUBLIC_KEY}`
      )
      .then((res) => {
        setAvengers(res.data.data.results);
        console.log(
          "Initial Avengers Data requisition... Commencing... Complete, Mr. Stark",
          res.data.data.results
        );
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        "https://api.weatherapi.com/v1/forecast.json?key=aa1aca8fef9d4c3f9c2123921210502&q=96822&days=5"
      )
      .then((res) => {
        setForecast(res.data.forecast.forecastday);
        console.log("Upcoming local weather foreCast data... received.", res.data.forecast.forecastday);
      })
      .catch((error) => {
        console.log(error);
      }).then(() => {
        setIsLoading(false)
      })
  }, []);

  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        opacity: "0.9",
        minWidth: "100%",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center "
        style={{
          marginTop: "5rem",
        }}
      >
        <form className="d-flex flex-column justify-content-center">
          <div
            className="d-flex justify-content-center flex-column align-items-center"
            style={{
              padding: "3rem",
              backgroundColor: "black",
              opacity: 0.8,
            }}
          >
            <p className="display-2" style={{ textAlign: "center" }}>
              {" "}
              Hello, Mr.Stark...{" "}
            </p>{" "}
            <h5 style={{ textAlign: "center" }}>
              {" "}
              Welcome to Jarvis 2.0 <br></br>Your Personal Data Assistant{" "}
            </h5>{" "}
            <h5> How are you today ? </h5>{" "}
            <h5
              style={{
                paddingTop: "3rem",
                textAlign: "center",
                lineHeight: "1.78rem",
              }}
            >
              Your current date and time is {localTime} in the {timeZone}{" "}
              timezone{" "}
            </h5>{" "}
            <div className="shadow">
              {" "}
              <div className="d-flex justify-content-center">
                <p>
                  {" "}
                  {name}, {region}, {country}{" "}
                </p>{" "}
              </div>{" "}
              <div className="d-flex justify-content-center">
                <p>
                  {" "}
                  {longitude} longitude {latitude} latitude{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="d-flex justify-content-center flex-column align-items-center"
            style={{
              backgroundColor: "black",
              opacity: "0.7",
              boxShadow: "0 0 1.5rem #666",
              textAlign: "center",
            }}
          >
            <img src={`https:${icon}`} alt="time of day icon"></img>
            <p style={{ padding: "0 5rem" }}>
              Today's cloud coverage in {name2} is {cloud}% and {text}
            </p>
            <br></br>
            <p>
              The temperature is {temp_f}f / {temp_c}c
            </p>
            <br></br>
            <p>
              {" "}
              Wind is coming in from {wind_dir} at {wind_mph} mph / {wind_kph}{" "}
              kph <br /> with gusts of {gust_mph} mph / {gust_kph} kph
            </p>
            <p>
              {" "}
              Current Precipitation is: {precip_in} in / {precip_mm} mm
            </p>
            <p>
              Humidity is {humidity}% and the barometric pressure is{" "}
              {pressure_mb} mb / {pressure_in} in
            </p>
            <p>
              It currently feels like {feelslike_f}f / {feelslike_c}c
            </p>
            <br></br>
            <br></br>
            <p>
              Visibility is at {vis_miles} miles / {vis_km} Km{" "}
            </p>
            <p>UV index: {uv}</p>
            <p style={{ paddingTop: "3rem" }}>
              Powered by{" "}
              <a href="https://www.weatherapi.com/" title="Free Weather API">
                WeatherAPI.com
              </a>
            </p>
          </div>
        </form>{" "}
        {/* <Astronomy data={astro} /> <Forecast data={foreCast} />{" "} */}
        <div className="d-flex flex-column justify-content-center">
          <div
            className="d-flex flex-column justify-content-center"
            style={{ padding: "3rem 0" }}
          >
            <h2
              style={{
                textShadow: "0 0 1rem ##67C7EB",
                padding: "5rem 0",
                alignSelf: "center",
              }}
            >
              Your local astronomy report
            </h2>

            <table
              className="table table-bordered"
              style={{
                textAlign: "center",
                backgroundColor: "#444",
                opacity: "0.8",
                color: "#67C7EB",
                textShadow: "#67C7EB",
              }}
            >
              <tbody>
                <tr>
                  <th style={{ maxWidth: "10%" }}>Moon Phase</th>
                  <th>Moon Illumination</th>
                  <th>Moonrise</th>
                  <th>Moonset</th>
                  <th>Sunrise</th>
                  <th>Sunset</th>
                </tr>
                <tr>
                  <th style={{ maxWidth: "10%" }}>{moon_phase}</th>
                  <th>{moon_illumination}%</th>
                  <th>{moonrise}</th>
                  <th>{moonset}</th>
                  <th>{sunrise}</th>
                  <th>{sunset}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    
    
{/* { (isLoading) ? console.log('loading') : (

    <div className='d-flex container justify-content-center align-items-center'>

      <h3 style={{ textShadow: "0 0 1rem ##67C7EB" }}>Local Forecast</h3> 

         {foreCast.map((item, idx) => {
        return (
          
            <table className="d-flex flex-column table table-bordered text-light">
              <thead>
                {foreCast[idx].date}
                <tr>
                  <th>
                    <img
                      src={`https:${foreCast[idx].day.condition.icon}`}
                      alt="time of day icon"
                    />
                  </th>
                  <th>
                    <p>
                      {foreCast[idx].day.condition.text}
                    </p>
                  </th>
                  <th>
                    <p>High</p>
                    <p>{foreCast[idx].day.maxtemp_f}f</p>
                    <p>{foreCast[idx].day.maxtemp_c}c</p>
                  </th>
                  <th>
                    <p>Low</p>
                    <p>{foreCast[idx].day.mintemp_f}f</p>
                    <p>{foreCast[idx].day.mintemp_c}c</p>
                  </th>
                  <th>
                    <p>
                      <p>Chance of Rain</p>
                      {
                        foreCast[idx].day
                          .daily_chance_of_rain
                      }
                      %
                    </p>
                  </th>
                  <th>
                    <p>Humidity</p>
                    <p>
                      {foreCast[idx].day.avghumidity}%
                    </p>
                  </th>
                </tr>
              </thead>
            </table>

          
        );
      })} 

    </div>  
)} */}

        <div className="d-flex justify-content-center flex-column">
          <h3
            className="display-4"
            style={{
              padding: "5rem 0",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Suit Prototype Specs For Your Review{" "}
          </h3>
          <img
            src={reactortrans}
            alt="reactor"
            style={{
              maxHeight: "60vh",
              alignSelf: "center",
              padding: "5rem 0",
            }}
          ></img>
          <div
            className="d-flex justify-content-around flex-row"
            style={{ padding: "5rem 0" }}
          >
            <img src={ironman1} style={{ maxHeight: "20vh" }} alt="suit one" />
            <img src={ironman2} style={{ maxHeight: "20vh" }} alt="suit one" />
          </div>
        </div>
        {/* <Marvel data={avengers} /> */}
        <div className="d-flex flex-column" style={{ flexDirection: "wrap" }}>
          <h3
            className="display-4"
            style={{
              textShadow: "0 0 1rem #aaa",
              padding: "5rem 0",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Enhanced Entities Database
          </h3>{" "}
          <div className="d-flex flex-wrap justify-content-center">
            {avengers.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className=" arc-reactor d-flex flex-column container justify-content-center align-items-center"
                  style={{
                    width: "25%",
                    padding: "5rem",
                    border: ".1rem solid #444",
                    borderRadius: ".2rem",
                    margin: "4%",
                  }}
                >
                  <h2 style={{ textAlign: "center" }}>{avengers[idx].name}</h2>
                  <img
                    src={`${avengers[idx].thumbnail.path}.${avengers[idx].thumbnail.extension}`}
                    style={{ width: "20vw", alignSelf: "center" }}
                    alt={idx}
                  ></img>
                </div>
              );
            })}{" "}
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={stark}
              alt="stark logo"
              style={{ maxWidth: "30%", alignSelf: "center", opacity: "0.8" }}
            ></img>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
