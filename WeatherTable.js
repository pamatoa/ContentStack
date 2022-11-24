function WeatherTable() {

  const url = "https://mjgh1cx0le.execute-api.us-west-1.amazonaws.com/default/weatherAPI";

  const req = new XMLHttpRequest();
  req.open("GET", url);
  req.send();
  req.onload = () => {
    const weatherdata = JSON.parse(req.responseText);
    //const weather = JSON.stringify(weatherdata);
    //console.log(weather);
    //console.log(weatherdata.weather.time)
    //console.log(weatherdata.weather.location);
    const humidityvar = weatherdata.weather.humidity;
    const locationvar = weatherdata.weather.location;
    const percipitationvar = weatherdata.weather.precipitation;
    const temperaturevar = weatherdata.weather.temperature_current;
    const temperaturehighvar = weatherdata.weather.temperature_high;
    const temperaturelowvar = weatherdata.weather.temperature_low;
    const timevar = weatherdata.weather.time;
    const windvar = weatherdata.weather.wind;
    //document.getElementById("weatherresults")
    // Set the text content of the <p> element with id of the corresponding weather data
    // Humidity
    document.getElementById("weatherresulthumidity").textContent = "Humidity: " + humidityvar;
    // location
    document.getElementById("weatherresultlocation").innerHTML = "Location: " + locationvar;
    // percipitation
    document.getElementById("weatherresultprecipitation").innerHTML = "Percipitation: " + percipitationvar;
    // temperature
    document.getElementById("weatherresulttemperature").innerHTML = "Temperature: " + temperaturevar;
    // temperature high
    document.getElementById("weatherresulttemperaturehigh").innerHTML = "Temperature High: " + temperaturehighvar;
    // temperature low
    document.getElementById("weatherresulttemperaturelow").innerHTML = "Temperature Low: " + temperaturelowvar;
    // time
    document.getElementById("weatherresulttime").innerHTML = "Time: " + timevar;
    // wind
    document.getElementById("weatherresultwind").innerHTML = "Wind: " + windvar;



 //
 //   const fragment = document.createDocumentFragment();
 //   const li = fragment
 //     .appendChild(document.createElement('section'))
 //     .appendChild(document.createElement('ul'))
 //     .appendChild(document.createElement('li'));
 //       li.textContent = location;
 //   document.body.appendChild(fragment);

    /*
//const para = document.createElement("div")
//const node = document.createElement(`${time}`);
//para.appendChild(node);
//document.getElementById("myDIV").appendChild(para)
//node = document.createElement(`${location}`);
//console.log(`${location}`)
//para.append(node);
//document.getElementById("myDIV").appendChild(para)
*/
  };
  return (
    <div className="weather-container">
      <table>
        <tr>
          <div className="table-header">
            <th>Weather API Results</th>
            <p>Feel free to get creative!</p>
          </div>
        </tr>
          <tr>
            <td className="center">
              <div id="weatherresults">
                <p>Weather Results</p>
                <h2 id= "weatherresulthumidity">
                Humidity:
                </h2>
                <h2 id= "weatherresultlocation">
                Location:
                </h2>

                <h2 id= "weatherresultprecipitation">
                Precipitation:
                </h2>

                <h2 id= "weatherresulttemperature">
                Temperature:
                </h2>

                <h2 id= "weatherresulttemperaturehigh">
                Temperature High:
                </h2>

                <h2 id= "weatherresulttemperaturelow">
                Temperature Low:
                </h2>

                <h2 id= "weatherresulttime">
                Time:
                </h2>

                <h2 id= "weatherresultwind">
                Wind:
                </h2>
              </div>
              <div id="myDIV"></div>

            </td>
          </tr>
      </table>
    </div>
  )
}
export default WeatherTable;
