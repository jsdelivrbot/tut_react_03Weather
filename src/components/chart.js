// reusable functional Component
import React from 'react';
// https://github.com/borisyankov/react-sparklines
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
// use _ for loadash
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

// fat arrow function
export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
