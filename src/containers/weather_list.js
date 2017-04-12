import React, { Component } from 'react';
import { connect } from 'react-redux';
// use _ for loadash
import _ from 'lodash';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    // key ==> list items has to be unique
    const name = cityData.city.name;

    // pull off the temeratures from the list
    // conversion from K (kelvin) to
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    // ES6 --> 2 Variablen gleichzeitig zuweisen
    // find in "cityData.city.coord" Object the two properties "lon" and "lat"
    // and assign them to a new variable in WeatherList context named "lon" and "lat"
    const { lon, lat } = cityData.city.coord;

    // use a reusable component for Sparklines --> separate component
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color={"green"} units="°C"/></td>
        <td><Chart data={pressure} color={"red"} units="hPa" /></td>
        <td><Chart data={humidity} color={"orange"} units="%" /></td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-jover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperatur (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// ES6 Syntax
function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
