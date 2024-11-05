import { useEffect } from "react"
import { getAllUsers } from "../axios"
import { useState } from "react"



function Login ({user, setUser}) {

    const [allUsers, setAllUsers] = useState([])

    useEffect(()=> {
        getAllUsers().then((response)=> {
            setAllUsers(response)
        })
    },[])

    function handleClick (username) {
        setUser(username);
        console.log(username)
    }

     return (
    <div>
        <h2>Pick a User:</h2>
        {allUsers.map((indUser)=> {
            return <button key={indUser.username} onClick={() => {handleClick(indUser.username)}}>
            <img className="userAvatar" src={indUser.avatar_url} />
            <p>{indUser.username}</p>
            </button>
        })}
        <p>Sign in Success! Welcome {user}</p>
    </div>
     )
}

export default Login