import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import StopWatch from '../common/StopWatch'


class NewLeft extends Component {
  constructor(props) {
  super(props);
  this.state = {
    left: {
      duration: 0,
      user_id: this.props.user_id
    },
    // user: props.user
  };
  // this.saveLeft = this.saveLeft.bind(this);

  }

  updateUserLeft(event){
    const user = this.state.user;
    const leftId = event.target.value;
    const left = this.props.user.lefts.filter(left => {
      left.id == leftId
    })[0];
    user.lefts.push(left)
    this.setState({user: user})

  }



  render() {
    const { user } = this.props

    return(
      <div>

      {this.props}
      </div>
    )
  }

}

export default NewLeft