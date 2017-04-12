# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

## Weather App

- more Redux Experience
  - ActionCreator -> Fetch Weather => Constant of ActionType
- Middlewares
  - redux-promise
  - axios --> waits for response of requests --> sends data (as payload) to the reducers
- reducers  
  - never direct access/manipulate "state"
    - state.weather.push  or state.weather = this.props.weather;
  - return a new object that taks place for an existing state ''' return [ action.payload.data, ...state ]; '''
- Sparklines Library --> Charts
- Google Maps api
- Chart and GoogleMap Component --> reusable
