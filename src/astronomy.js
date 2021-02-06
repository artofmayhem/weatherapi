

export default function Astronomy(props) {
  const data = { props };
  console.log("astronomy data from astronomy component", data);
  //console.log(props.data.astronomy.astro);
  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{ padding: "3rem 0" }}
    >
       if (data === undefined) ?  <div>loading...</div>: 
        <div>
          <h2 style={{textShadow:'0 0 1rem #aaa'}}>Your local astronomy report</h2>
          <table
            className="table table-bordered text-light"
            style={{ textAlign: "center", backgroundColor: '#444', opacity: '0.8' }}
          >
            <tr>
              <th style={{ maxWidth: "10%" }}>Moon Phase</th>
              <th>Moon Illumination</th>
              <th>Moonrise</th>
              <th>Moonset</th>
              <th>Sunrise</th>
              <th>Sunset</th>
            </tr>
            <tr>
              <th style={{ maxWidth: "10%" }}>
                {props.data.astronomy.astro.moon_phase}
              </th>
              <th>{props.data.astronomy.astro.moon_illumination}%</th>
              <th>{props.data.astronomy.astro.moonrise}</th>
              <th>{props.data.astronomy.astro.moonset}</th>
              <th>{props.data.astronomy.astro.sunrise}</th>
              <th>{props.data.astronomy.astro.sunset}</th>
            </tr>
          </table>
        </div>
    </div>
  );
}
