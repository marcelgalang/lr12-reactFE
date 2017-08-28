import React, { Component } from 'react'
import LeftTimer from '../lefts/LeftTimer'

class UserDetail extends Component{
  render(){
    const { user } = this.props
    console.log(user.lefts)


  return (
      <div>

          <h1>{user.email}</h1>
          <div>{user.lefts.map((left) =>(
            <div key={left.id}>{left.duration}</div>
            ))}</div>
          <LeftTimer/>

      </div>
    )
  }
}




export default UserDetail