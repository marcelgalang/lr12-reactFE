import React, { Component } from 'react'
import LeftTimer from '../lefts/LeftTimer'
import NewLeft from '../lefts/NewLeft'
import NewOne from '../ones/NewOne'
import NewSingle from '../ones/NewSingle'
import StopWatch from '../common/StopWatch'

const UserPage = ({user, users}) => {

      // const user= user.user || users.find(user => user.id== match.params.userId)



    // let lefts =  user.lefts.slice(-1)
    // let lastLeft = lefts[0].duration




  return (
      <div>

          <h1>{user.email}</h1>



          <NewLeft user={user}/>
          <NewSingle user={user} ones={user.ones}/>
      </div>
    )
  }





export default UserPage