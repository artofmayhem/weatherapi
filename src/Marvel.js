import stark from "./stark.png";

export default function Marvel(props) {
  const data = { ...props };
  const datadig = data.data.data.results;
  console.log(
    "Loading Known Enhanced Biological Weapon Data.... data... fetched, Mr. Stark",
    datadig
  );
  console.log(datadig[0].urls[0].url);
  return (
    <div className="d-flex flex-column" style={{ flexDirection: "wrap" }}>
      <h3
        className="display-4"
        style={{
          textShadow: "0 0 1rem #aaa",
          padding: "5rem 0",
          alignSelf: "center",
          textAlign: 'center'
        }}
      >
        Enhanced Entities Database
      </h3>{" "}
      <div className="d-flex flex-wrap justify-content-center">
        {datadig.map((item, idx) => {
          return (
            <div
              className=" arc-reactor d-flex flex-column container justify-content-center align-items-center"
              style={{
                width: "25%",
                padding: "5rem",
                border: ".1rem solid #444",
                borderRadius: ".2rem",
                margin: "4%",
              }}
            >
              <h2 style={{ textAlign: "center" }}>{datadig[idx].name}</h2>
              <img
                src={`${datadig[idx].thumbnail.path}.${datadig[idx].thumbnail.extension}`}
                style={{ width: "20vw", alignSelf: "center" }}
                alt={idx}
              ></img>
              
              {/* <ul key={idx}>
                {datadig.map((item, idx) => {
                  return (
                  <li key={idx}>
                    <a href={datadig[idx].urls[idx].url}>
                      {datadig[idx].urls[idx].type}
                    </a>
                  </li>
                  )
                })}{" "}
              </ul> */}
              
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
  );
}
