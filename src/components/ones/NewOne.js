import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import StopWatch from '../common/StopWatch';
import { Link, Route  } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { createOne, getOnes } from '../../actions/onesActions';

class NewOne extends Component {

  constructor(props){
    super(props);

    this.state={
      ones: []

      },

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      debugger
      this.props.createOne(this.state.ones.slice(-1)[0]);
      this.props.getOnes()


    };

    componentWillReceiveProps(nextProps) {

        this.setState({ ones: [...this.state.ones, nextProps] });
    }

    render() {

    // const { one, user } = this.state
    // const count = this.props.user.ones.length
    console.log(this.state)

    console.log(this.props)

    // console.log(this.state.user.ones.length)

    return(
      <div><Button
      color="secondary" size="sm"
      onClick={this.handleClick}
      >
       diaper count: {this.state.ones.length}
      </Button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    ones: state.ones
  }
}

export default connect(mapStateToProps, {
  createOne, getOnes
}) (NewOne);