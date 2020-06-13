import React, {  useState } from 'react';
import UsersList from './UsersList'
import UserProfile from "./userProfile";

const GetData = () => {

    const [users, setUsers] = useState([])
    const [getUser, setGetUser] = useState()
    const [click, setClick] = useState(false)
    const [isLoading, setLodaing] = useState(false)


    async function getUserData(){
        try {
            const response = await fetch('https://randomuser.me/api/?results=5')
            if(!response.ok){
                throw new Error('something went wrong')
            }
            const data =  await response.json()
            const usersData = await data.results 
            console.log(data)
            setUsers(usersData)
            
        } catch (error) {
            console.error(error.message)
        }
        finally{ setLodaing(false)}
    }

    const selectUser = (id) =>{
        setGetUser(users.filter(user => user.login.uuid === id)[0])
        setClick(true)
    }


    return (
        <div>
            <div>
            <button onClick={getUserData}> Get users </button>
            <UsersList users={users} selectUser={selectUser} />
            {click && <UserProfile user={getUser} />}
            </div>
            <div>
               {isLoading&&<h1>loading ...</h1>} 
            </div>
            
        </div>
    );
};

export default GetData;