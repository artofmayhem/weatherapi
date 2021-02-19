import React, { useState, useEffect } from "react";
import axios from "axios";

import ironman1 from "./ironman1.png";
import ironman2 from "./ironman2.jpg";
import reactortrans from "./reactor-trans.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

 const initialFormValues = {
  city: "",
 };

 const initialSearchValue = {
   value: "",
 }

function App() {

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
  const [searchValue, setSearchValue] = useState(initialSearchValue.value);
  const [locationValue, setLocationValue] = useState(initialFormValues.city);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=aa1aca8fef9d4c3f9c2123921210502&q=${locationValue}`
      )
      .then((res) => {
    
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
        console.log(
          "Geolocating.... local information received.... complete",
          res.data
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [locationValue]);

  const PUBLIC_KEY = "e2413ca828a65e2cb80fba818d0052b7"; // your public key
  //const PRIVATE_KEY = "398de4eb8a05e988e0b39750de9e3098245b1e0c"; // your private key

  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/astronomy.json?key=aa1aca8fef9d4c3f9c2123921210502&q=${locationValue}`
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
  }, [locationValue]);

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchValue}&limit=50&apikey=${PUBLIC_KEY}`
      )
      .then((res) => {
        setAvengers(res.data.data.results);
        console.log(
          "Initial Avengers Data requisition... Commencing... Complete, Mr. Stark",
          res.data.data.results
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchValue]);




 
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
        <form className="d-flex flex-column justify-content-center" >
          <div
            className="parallax-bg2 d-flex justify-content-center flex-column align-items-center"
            style={{
              padding: "3rem",
              backgroundColor: "black",
              opacity: 0.95,
            }}
          >
            <div className='d-flex justify-content-center flex-column' style={{backgroundColor: 'black', textAlign: 'center'}}>
            <p className="display-4" style={{ textAlign: "center", margin: '3rem 2rem', color: 'white'}}>
              {" "}
              Hello, Mr.Stark...{" "}
            </p>{" "}
            <h5 style={{ textAlign: "center", color: 'white' }}>
              {" "}
              Welcome to Jarvis 2.0 <br></br>Your Personal Data Assistant{" "}
            </h5>{" "}
            <h5 style={{color: 'white'}}> How are you today ? </h5>{" "}
            <h4 style={{textAlign: 'center', color: 'white', padding: '2rem 2rem'}}>I see you have an upcoming trip sir... <br></br>Please enter your destination below.</h4> 
            <input
            type="text"
            placeholder="Input any location value"
            style={{ width: "20rem", alignSelf: "center", backgroundColor: '#444', color: 'lightblue', textAlign: 'center', fontSize: '1.25rem' }}
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value.toUpperCase())}
          />
        
            <h5
              style={{
                margin: "3rem 2rem",
                textAlign: "center",
                lineHeight: "1.78rem",
                color: 'white'
              }}
            >
              The current date and time of your destination is: <br></br> {localTime} in the {timeZone}{" "}
              timezone{" "}
            </h5>{" "}
            <div className="shadow">
              {" "}
              <div className="d-flex justify-content-center">
                <p style={{color: 'white'}}>
                  {" "}
                  {name}, {region}, {country}{" "}
                </p>{" "}
              </div>{" "}
              <div className="d-flex justify-content-center">
                <p style={{color: 'white', padding: '2rem'}}>
                  {" "}
                  {longitude} longitude {latitude} latitude{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>      




          <div
            className="d-flex justify-content-center flex-column align-items-center"
            style={{
              backgroundColor: "black",
              opacity: "0.7",
              boxShadow: "0 0 1.5rem #666",
              textAlign: "center",
            }}
          >
            <img style={{marginTop: '2rem'}}src={`https:${icon}`} alt="time of day icon"></img>
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
              <a href="https://www.weatherapi.com/" style={{marginBottom: '2rem'}} title="Free Weather API">
                WeatherAPI.com
              </a>
            </p>
          </div>
        </form>{" "}
       



        <div className="d-flex flex-column justify-content-center">
          <div
            className="d-flex flex-column container justify-content-center"
            style={{ padding: "1rem 0", maxWidth: "80vw" }}
          >
            <h2
              style={{
                textShadow: "0 0 1rem ##67C7EB",
                padding: "5rem 0",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              Your local astronomy report
            </h2>

            <table
              className="table table-bordered d-flex justify-content-center parallax-bg"
              style={{
                textAlign: "center",
                opacity: "1",
                color: "white",
                textShadow: "#67C7EB",
                maxWidth: "100%",
                alignSelf: "center",
                
                backgroundColor: '#444',
                
              }}
            >
              <tbody
                className="d-flex flex-column"
                style={{
                  maxWidth: "100%",
                  padding: '3rem 0',
                  opacity: '0.95',
                  backgroundColor: 'black'
                }}
              >
                <tr
                  className="d-flex flex-column"
                  style={{ margin: "2vh", padding: '3rem 1rem', boxShadow: "0 0 1rem #67C7EB" }}
                >
                 <td> Moon Phase</td>
                 <td>{moon_phase}</td>
                </tr>
                <tr
                  className="d-flex flex-column"
                  style={{ margin: "2vh", padding: '3rem 1rem', boxShadow: "0 0 1rem #67C7EB" }}
                >
                 <td> Moon Illumination</td>
                 <td>{moon_illumination}%</td>
                </tr>
                <tr
                  className="d-flex flex-column"
                  style={{ margin: "2vh", padding: '3rem 1rem', boxShadow: "0 0 1rem #67C7EB" }}
                >
                 <td> Moonrise</td>
                 <td>{moonrise}</td>
                </tr>
                <tr
                  className="d-flex flex-column"
                  style={{ margin: "2vh", padding: '3rem 1rem', boxShadow: "0 0 1rem #67C7EB" }}
                >
                 <td> Moonset</td>
                 <td>{moonset}</td>
                </tr>
                <tr
                  className="d-flex flex-column"
                  style={{ margin: "2vh", padding: '3rem 1rem', boxShadow: "0 0 1rem #67C7EB" }}
                >
                 <td> Sunrise</td>
                 <td>{sunrise}</td>
                </tr>
                <tr
                  className="d-flex flex-column"
                  style={{ margin: "2vh", padding: '3rem 1rem', boxShadow: "0 0 1rem #67C7EB" }}
                >
                 <td> Sunset</td>
                 <td>{sunset}</td>
                </tr>

              </tbody>
            </table>
            <p style={{ alignSelf: "center", padding: '3rem 0', textAlign: "center" }}>
              Mark II Prototype... <br></br>
              <br></br>Ready and Online
            </p>
          </div>
        </div>





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
            className="d-flex justify-content-center flex-column"
            style={{ padding: "5rem 0" }}
          >
            <img
              src={ironman1}
              style={{
                maxWidth: "80vw",
                margin: "2rem 0",
                alignSelf: "center",
              }}
              alt="suit one"
            />
            <img
              src={ironman2}
              style={{
                maxWidth: "80vw",
                margin: "3rem 0",
                alignSelf: "center",
              }}
              alt="suit one"
            />
          </div>
        </div>
     
     




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
          <input
            type="text"
            placeholder="input any search value"
            style={{ width: "20rem", marginBottom: '3rem', alignSelf: "center", backgroundColor: '#444', color: 'lightblue', fontSize: '2rem', textAlign: 'center' }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value.toUpperCase())}
          />
          
          <div className="d-flex flex-wrap justify-content-center">
            {avengers.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className=" arc-reactor d-flex flex-column container justify-content-center align-items-lg-center "
                  style={{
                    width: "25%",
                    padding: "5rem",
                    border: ".1rem solid #444",
                    borderRadius: ".2rem",
                    margin: "4%",
                  }}
                >
                  <h2
                    style={{
                      alignSelf: "center",
                      textAlign: "center",
                      color: "white",
                      textShadow: "0 0 1.5rem lime",
                    }}
                  >
                    {avengers[idx].name}
                  </h2>
                  <img
                    src={`${avengers[idx].thumbnail.path}.${avengers[idx].thumbnail.extension}`}
                    style={{ width: "20vw", alignSelf: "center" }}
                    alt={idx}
                  ></img>
                </div>
              );
            })}{" "}
          </div>
          
        </div>
      </div>{" "}
      </div>
  );
}

export default App;
