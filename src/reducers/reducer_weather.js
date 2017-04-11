import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // from promise-redux we get "good looking" data from the response
  // 1.  what data do we want from the response? --> look into response in browser => data object containing cities and data as array

  switch (action.type) {
    case FETCH_WEATHER:
      // add on to existing state instead of exchange/override it
      // return a new version of our state --> new object
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // same as above. insert the first array into the state
  }

  return state;
}
