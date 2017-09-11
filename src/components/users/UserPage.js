import React, { Component } from 'react'
import LeftTimer from '../lefts/LeftTimer'
import NewLeft from '../lefts/NewLeft'
import StopWatch from '../common/StopWatch'

const UserPage = props => {

    const { user } = props.user
    console.log(props.user)

    let lefts =  props.user.lefts.slice(-1)
    let lastLeft = lefts[0].duration




  return (
      <div>

          <h1>{props.user.email}</h1>
          <h1>{lastLeft}</h1>


          <NewLeft  user_id={props.user.id}/>

      </div>
    )
  }





export default UserPage