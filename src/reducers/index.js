import { combineReducers } from 'redux';

//import reducers
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  // content of application state (Redux)
  weather: WeatherReducer

});

export default rootReducer;
