// export default function Forecast(props) {
//   const data = { props };
//   console.log("forecast data", data);


//   return (

//     <div className='d-flex container justify-content-center align-items-center'>
//       <h3 style={{ textShadow: "0 0 1rem ##67C7EB" }}>Local Forecast</h3>



//       {props.data.forecast.forecastday.map((item, idx) => {
//         return (
          
//             <table className="d-flex flex-column table table-bordered text-light">
//               <thead>
//                 {props.data.forecast.forecastday[idx].date}
//                 <tr>
//                   <th>
//                     <img
//                       src={`https:${props.data.forecast.forecastday[idx].day.condition.icon}`}
//                       alt="time of day icon"
//                     />
//                   </th>
//                   <th>
//                     <p>
//                       {props.data.forecast.forecastday[idx].day.condition.text}
//                     </p>
//                   </th>
//                   <th>
//                     <p>High</p>
//                     <p>{props.data.forecast.forecastday[idx].day.maxtemp_f}f</p>
//                     <p>{props.data.forecast.forecastday[idx].day.maxtemp_c}c</p>
//                   </th>
//                   <th>
//                     <p>Low</p>
//                     <p>{props.data.forecast.forecastday[idx].day.mintemp_f}f</p>
//                     <p>{props.data.forecast.forecastday[idx].day.mintemp_c}c</p>
//                   </th>
//                   <th>
//                     <p>
//                       <p>Chance of Rain</p>
//                       {
//                         props.data.forecast.forecastday[idx].day
//                           .daily_chance_of_rain
//                       }
//                       %
//                     </p>
//                   </th>
//                   <th>
//                     <p>Humidity</p>
//                     <p>
//                       {props.data.forecast.forecastday[idx].day.avghumidity}%
//                     </p>
//                   </th>
//                 </tr>
//               </thead>
//             </table>

          
//         );
//       })}

//     </div> //outermost div
// ) //outermost return
// } //function block
