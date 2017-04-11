import React, { Component } from 'react';

// Container = Component with link to part of Application State from Redux (mapped)
// when state changes, the container will be rerendered
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
