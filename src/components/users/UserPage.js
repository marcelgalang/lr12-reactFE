import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { Route } from 'react-router-dom'
import UserDetail from './UserDetail';
import UserList from './UserList';
import { Link  } from 'react-router-dom';




const UserPage = ({ users }) => (
<div>
  <div>
   <div>{users.map((user) => (
      <div key={user.id}>
        <Link to={`/users/${user.id}`}> {user.email}</Link>
      </div>
  ))}</div>
  </div>
    <div>

        <Route path="/users/:userId"  render={({match}) => (
          <UserDetail user={users.find(user => user.id== match.params.userId)}/>
        )}/>



    </div>

  </div>
)


UserPage.propTypes = {
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(UserPage);