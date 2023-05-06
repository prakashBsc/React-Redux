import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import {Link} from 'react-router-dom'
import User from "../../Components/User/User";

const Users = () => {
  const { users , setUsers} = useContext(GlobalContext);
 const deleteUser=(id)=>{
  setUsers((currUsers)=>{
    return currUsers.filter((user)=>user.id!==id)
  })
 }
  return (
    <div className="users">
      <h1 className="users-title"></h1>
      <div className="users-container">
        {users.length===0? (
          <div className="users-empty">
            <h1>No Users Found Please Enter Some .</h1>
            {/* <h3>
              <link to="/">Add User</link>
            </h3> */}
          </div>
        ):(
          users.map((user)=>{
            return(
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                age={user.age}
                contact={user.contact}
                jobRole={user.jobRole}
                deleteUser={ () => deleteUser(user.id)}
              />
            )
          })
        )}
      </div>
    </div>
  )
  
};

export default Users;
