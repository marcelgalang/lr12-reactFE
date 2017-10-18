import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import StopWatch from '../common/StopWatch';
import { Link, Route  } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { createLeft, getLefts } from '../../actions/leftActions';

const formattedSeconds = (sec) =>
  (sec>=10) ? Math.floor(sec / 60) +
    ' m ' +
  ('0' + sec % 60).slice(-2)
    + ' s '
    :
  Math.floor(sec / 60) +
    ' m ' +
  ('0' + sec % 60).slice(-1)
    + ' s '


var convertMS = gap => {
  var date = new Date(gap);
  var str = '';
  date.getUTCDate()-1 > 0 ?
    str += date.getUTCDate()-1 + " days " : null;
  date.getUTCHours() > 0 ?
    str += date.getUTCHours() + " hours " : null;
  date.getUTCMinutes() > 0 ?
  str += date.getUTCMinutes() + " m " : null;
  date <= 59000 ? str += "less than 1 minute " : null;
  str += "ago"
  console.log(gap)
  return str;
}

class NewLeft extends Component {

  constructor(props) {
  super(props);
  this.state = {
    left: {
      duration: 0,
      user_id: this.props.user.id
    },
    user: props.user,

    secondsElapsed: 0,
    lastClearedIncrementer: null
  };
  this.incrementer = null;

  }

  handleStartClick() {
  this.incrementer = setInterval( () =>
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1,
        left: {duration: this.state.secondsElapsed + 1,
          user_id: this.props.user.id
        }
    })
  , 1000);
  }

  handleStopClick() {

    this.props.createLeft(this.state.left);
    this.props.getLefts(this.props.left)


    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer,
    });
  }


  handleResetClick() {

    this.props.getLefts()
    clearInterval(this.incrementer);
    this.setState({
      duration: this.state.secondsElapsed,
      secondsElapsed: 0
    });
  }


  render() {
    var then = new Date(this.props.lefts.slice(-1)[0].created_at)
    var now = new Date()
    // function getNow(){
    //   let d = Date.now;
    //   d;

    // }
    var gap = now - then
    var since = convertMS(gap);



    let lefts = this.props.lefts.slice(-1)[0].duration
    let lastLeft = formattedSeconds(lefts)
    let lastFeed = this.state.secondsElapsed !== 0 ? "right now" : lastLeft

    const {user, users} = this.props

    return (
      <div>

        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button bsSize="large"  onClick={this.handleStartClick.bind(this)}>{formattedSeconds(this.state.secondsElapsed)}</Button>
          : <Button bsSize="large"  onClick={this.handleStopClick.bind(this)}>{formattedSeconds(this.state.secondsElapsed)}</Button>
        )}

        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button bsSize="large" onClick={this.handleResetClick.bind(this)} >
          <Link to={`/users/${user.id}`} > update </Link>
          </Button>
          : null
        )}

        <h2>last feeding: <Link to={`/users/${user.id}`} >{since} </Link></h2>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {

  return {
    lefts: state.lefts
  }
}

export default connect(mapStateToProps, {
  createLeft, getLefts
}) (NewLeft);