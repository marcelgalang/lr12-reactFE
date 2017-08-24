import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserList = ({users}) => {
  return (
      <ul className="list-group">
        {users.map(user =>
           <li className="list-group-item" key={user.id}>
            <Link to={'/users/' + user.id}>{user.email}

            </Link></li>
        )}
      </ul>
  );
};

UserList.propTypes = {
  Users: PropTypes.array.isRequired
};

export default UserList;