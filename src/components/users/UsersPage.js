import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { Route } from 'react-router-dom'
import UserPage from './UserPage';
import { Link  } from 'react-router-dom';

const UsersPage = ({ users }) => (
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
          <UserPage users={users} user={users.find(user => user.id== match.params.userId)}/>
        )}/>



    </div>

  </div>
)


UsersPage.propTypes = {
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  users: state.users,
  lefts: state.lefts,

})



export default connect(mapStateToProps)(UsersPage);