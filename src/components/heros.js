import React from "react";

export const Comics = (props) => {
  const { comics } = props;
  console.log("Passed props to the Comics component", comics.items);

  return (
    <div
      className="d-flex flex-column flew-wrap justify-content-center align-items-stretch"
      style={{
        backgroundColor: "#222",
        textAlign: "center",
        padding: "5vh 25vw",
        
        alignSelf: "center",
      }}
    >
      <h3
        className="display-4"
        style={{ fontSize: "2rem", marginBottom: "3vh", padding: '5vh 0vw' }}
      >
        Verified Appearances
      </h3>
      {comics.items &&
        comics.items.map((item, idx) => {
          // console.log(comicData.avengers[idx])
          return (
            <div key={idx} style={{padding: '3vh 0'}}>
              <h5>{comics.items[idx].name}</h5>
              <p>type: {comics.items[idx].type}</p>
            </div>
          );
        })}
    </div>
  );
};

export default function Heros(props) {
  const { avengers } = props;
  console.log("Props from Films function heros.js", avengers);

  return (
    <div className="d-flex flex-wrap justify-content-center" style={{width: '100vw', alignSelf: 'center'}}>
      {avengers &&
        avengers.map((item, idx) => {
          return (
            <div
              key={idx}
              className=" arc-reactor d-flex flex-column container justify-content-start align-items-lg-center "
              style={{
                width: "100vw",
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
                  backgroundColor: "#222",
                  padding: "10vh 0",
                  width: "65vw",
                  fontSize: '3rem',
                }}
              >
                {avengers[idx].name}
              </h2>
              <img
                src={`${avengers[idx].thumbnail.path}.${avengers[idx].thumbnail.extension}`}
                style={{ width: '60vw', alignSelf: "center", margin: "3vh 0" }}
                alt={idx}
              ></img>
              <Comics comics={avengers[idx].stories} />
            </div>
          );
        })}{" "}
    </div>
  );
}
