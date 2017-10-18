import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import StopWatch from '../common/StopWatch';
import { Link, Route  } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { createOne, getOnes } from '../../actions/onesActions';

class NewSingle extends Component {

  constructor(props){
    super(props);

    this.state={
        one: {
          user_id: this.props.user.id
        },

        ones: props.ones,
        user: props.user
      },

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

      this.props.createOne(this.state.one);


    };

    componentWillReceiveProps(nextProps) {

      if(nextProps.ones !== this.props.ones) {
        this.setState({
          ones: [...this.state.ones, nextProps],

        });
      }
    }

    render() {
      const {user, ones} = this.props

      const count = ones.filter((one) => one.user_id==user.id).length
    console.log(this.state.user.ones.length)
    console.log(this.state.ones.length)
    console.log(this.props.user.ones.length)
    return(
      <div><Button
      color="secondary" size="sm"
      onClick={this.handleClick}
      >
       diaper count: {count}
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
}) (NewSingle);