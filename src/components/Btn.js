import React from 'react';

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

export default Btn;