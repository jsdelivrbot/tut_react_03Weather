// show map of city
import React, { Component } from 'react';

class GoogleMap extends Component {
  // LifeCycle Method --> after this component has been rendered to the screen
  componentDidMount() {
    // new embedded Google Map inside our App
    // Map(HTML Element --> div , Options Object)
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }


  render () {
    // ref system of React
    // this.refs.map --> gives direct access to this Component
    return <div ref="map" />;
  }
}

export default GoogleMap;
