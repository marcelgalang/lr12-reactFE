import React, { Component } from 'react'
import { Link  } from 'react-router-dom';

class UserList extends Component{


  render(){
    const { user, title } = this.props

    return (
      <div>

          <div>{user.email}:
          <Link to={`/users/${user.id}`}> {user.email}</Link>
         </div>



      </div>
    )
  }
}



export default UserList
