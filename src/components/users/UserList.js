import React, { Component, PropTypes } from 'react'
import { Link  } from 'react-router-dom';

class UserList extends Component{


  render(){
    const { user, title } = this.props

    return (
      <div>
          <Link to={`/users/${user.id}`}> {user.email}</Link>
      </div>

    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList
