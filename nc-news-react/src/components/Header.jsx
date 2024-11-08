import { Link } from "react-router-dom"
import Nav from "./Nav"
import Logo from "../../Assets/logo-transparent.png"

function Header ({user, setUser}) {

function handleClick() {
   setUser('')
}

 return (
    <div className="headerSection">
      {user !== ''?  <div className="loginHeader">
      <p className="loggedInAs">Currently Logged In As {user}</p>
      <button id="signOut" onClick={()=> {handleClick()}}>Sign Out</button>
      </div> : <Link className="loginButton" to={'login'}> <button>Login</button></Link>}
     
      <div className="titleSection">
      <Link to={'/'}> <img className="logo" src={Logo} alt="Gemma News Logo"/></Link>
      <h1 className="mainTitle">Gemma's News</h1>
      

      
      </div>
 < Nav />
    </div>
 )
}

export default Header

