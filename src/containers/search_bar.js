import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  // Component (React) State --> NOT Redux Application State!!!
  constructor(props) {
    super(props);

    this.state = { term: '' }

    // override local function onInputChange
    // take "this" (SearchBar), use the onInputChange FUnction and bind it to "this"
    // and replace the existing function this.onInputChange with it
    // => Otherwise --> Error --> setState is not defined
    this.onInputChange = this.onInputChange.bind(this);
    // otherwise error "this is null" / "Cannot ready props of null"
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    // Callback context --> uses this ==> bind it!!!
    // !!! when using a Callback function like this here, that uses "this",
    // always bind this function as above the the current component!
    // => Otherwise --> Error --> setState is not defined
    this.setState({ term:event.target.value })
  }

  // prevent browser to submit form
  onFormSubmit(event) {
    // Submit Button or ENTER will do nothing
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      // input-group from bootstrap
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a fife-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null = no mapStateToProps --> is the first argument
export default connect(null, mapDispatchToProps)(SearchBar);
