import React from 'react';
import ReactDOM from 'react-dom';

// import redux packages
import { createStore, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

// action
const counterAction = () => {
  return {
    type: 'INCREMENT'
  }
}

// reducer
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT' :
      return state + 1;
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
      <button onClick={this.props.handleClick}> Click Me </button>
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
    const {counter, counterAction} = this.props;

    return (
      <div>
        <Show number={counter} />
        <Btn handleClick={counterAction} />
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
    counterAction: bindActionCreators(counterAction, dispatch)
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Panel);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('app'));