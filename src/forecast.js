export default function Forecast(props) {
  const data = { props };
  console.log("forecast data", data);

  return (
    <div>
      if ( data === undefined ? <div>loading...</div>: (
      <h3 style={{ textShadow: "0 0 1rem #aaa" }}>Local Forecast</h3>
      {props.data.forecast.forecastday.map((item, idx) => {
        return (
          <div key={idx} style={{ backgroundColor: "#444", opacity: "0.8" }}>
            <table className="table table-bordered text-light">
              <thead>
                {item.data.forecast.forecastday[idx].date}
                <tr>
                  <th>
                    <img
                      src={`https:${item.data.forecast.forecastday[idx].day.condition.icon}`}
                      alt="time of day icon"
                    />
                  </th>
                  <th>
                    <p>
                      {item.data.forecast.forecastday[idx].day.condition.text}
                    </p>
                  </th>
                  <th>
                    <p>High</p>
                    <p>{item.data.forecast.forecastday[idx].day.maxtemp_f}f</p>
                    <p>{item.data.forecast.forecastday[idx].day.maxtemp_c}c</p>
                  </th>
                  <th>
                    <p>Low</p>
                    <p>{item.data.forecast.forecastday[idx].day.mintemp_f}f</p>
                    <p>{item.data.forecast.forecastday[idx].day.mintemp_c}c</p>
                  </th>
                  <th>
                    <p>
                      <p>Chance of Rain</p>
                      {
                        item.data.forecast.forecastday[idx].day
                          .daily_chance_of_rain
                      }
                      %
                    </p>
                  </th>
                  <th>
                    <p>Humidity</p>
                    <p>
                      {item.data.forecast.forecastday[idx].day.avghumidity}%
                    </p>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        );
      })}
      )
    </div> //outermost div
  ); //return statement
} //function block
