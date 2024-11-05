import Nav from "./Nav"

function Header ({user}) {
 return (
    <div className="headerSection">
      <p className="loggedInAs">Currently Logged In As {user}</p>
      <div className="titleSection">
      <img className="logo" src="/Assets/logo-transparent.png" alt="Gemma News Logo"/>
      <h1 className="mainTitle">Gemma's News</h1>
      </div>
 < Nav />
    </div>
 )
}

export default Header