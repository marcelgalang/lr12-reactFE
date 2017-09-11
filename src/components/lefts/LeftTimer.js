import React, { Component } from 'react';
import StopWatch from '../common/StopWatch'

class LeftTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lefts: this.props.user.lefts,
      counter: 0,
    };

     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: ++this.state.counter,
    });
  }

  render() {
    console.log(this.state)
    return(
      <div><button
      onClick={this.handleClick}>
      Count
      </button>
       {this.state.counter}
       <StopWatch/>
      </div>

    )
  }
}

export default LeftTimer