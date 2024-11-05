import { Link } from "react-router-dom"
import Nav from "./Nav"

function Header ({user, setUser}) {

function handleClick() {
   setUser('')
}

 return (
    <div className="headerSection">
      {user !== ''?  <div className="loginHeader">
      <p className="loggedInAs">Currently Logged In As {user}</p>
      <button onClick={()=> {handleClick()}}>Sign Out</button>
      </div> : <Link to={'login'}> <button>Login</button></Link>}
     
      <div className="titleSection">
      <img className="logo" src="/Assets/logo-transparent.png" alt="Gemma News Logo"/>
      <h1 className="mainTitle">Gemma's News</h1>
      </div>
 < Nav />
    </div>
 )
}

export default Header

