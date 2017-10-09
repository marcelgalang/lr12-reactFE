import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addLeft } from '../../actions/leftActions'

 const createLeft = (left) => dispatch =>  {

    fetch('https://lr12-server.herokuapp.com/api/v1/lefts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({left: left})
    })
    .then(response =>  response.json()
    )
    .then(left => {
        dispatch(addLeft(left))
      })
    .catch(error => {
      return error;
    });
  }

function loadLeftsSuccess(lefts) {
  console.log("HERE MOTHERFUCKERS")
  return {type: 'LOAD_LEFTS_SUCCESS', lefts};
}

const LOAD_LEFTS_SUCCESS = 'LOAD_LEFTS_SUCCESS'

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


class StopWatch extends Component {
  constructor(props) {
    super(props);

    console.log(this.props)
    this.state = {
      secondsElapsed: 0,
      lastClearedIncrementer: null,
      left: {
        duration: 0,
        user_id: this.props.user_id
      },
      user: props.user


    };
    this.incrementer = null;
  }

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1,
          left: {duration: this.state.secondsElapsed + 1,
            user_id: this.props.user_id
          }
      })
    , 1000);
  }

  handleStopClick() {

    createLeft(this.state.left)

    clearInterval(this.incrementer);

    this.setState({
      lastClearedIncrementer: this.incrementer,
    });
  }



  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      duration: this.state.secondsElapsed,
      secondsElapsed: 0
    });
  }


  render() {
    console.log(this.state)

    return (
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</h1>

        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button className="start-btn" onClick={this.handleStartClick.bind(this)}>start</Button>
          : <Button className="stop-btn" onClick={this.handleStopClick.bind(this)}>stop</Button>
        )}




        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
          ? <Button onClick={this.handleResetClick.bind(this)}>reset</Button>
          : null
        )}


      </div>
    );
  }
}



const Button = (props) =>
  <button type="button" {...props} className={"btn " + props.className } />;

const mapStateToProps = state => ({
  user: state.user,
  left: state.left

})
export default connect(mapStateToProps)(StopWatch);