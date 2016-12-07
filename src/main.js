import React from 'react';
import ReactDOM from 'react-dom';

// import redux packages
import { createStore, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

// action
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrementAction = () => {
  return {
    type: 'DECREMENT'
  }
}

// reducer
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT' :
      return state + 1;
    case 'DECREMENT':
      return state - 1; 
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer
})

// store
const store = createStore(rootReducer);

// component
class Btn extends React.Component {
  render(){
    return(
      <div>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

class Show extends React.Component {
  render(){
    return (
      <div>{this.props.number}</div>
    );
  }
}

// container
class Panel extends React.Component {
  constructor(){
    super();
  }

  render(){
    const {counter, incrementAction, decrementAction} = this.props;

    return (
      <div>
        <Show number={counter} />
        <Btn increment={incrementAction} decrement={decrementAction} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementAction: bindActionCreators(incrementAction, dispatch),
    decrementAction: bindActionCreators(decrementAction, dispatch)
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Panel);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('app'));