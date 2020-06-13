import React from "react";

const UsersList = ({ users, selectUser }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid} onClick={()=> selectUser(user.login.uuid)}>
            {user.name.first}  {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
