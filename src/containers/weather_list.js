import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render () {
    return (
      <table className="table table-jover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperatur</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
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
