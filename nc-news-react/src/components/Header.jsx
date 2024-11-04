import Nav from "./Nav"

function Header () {
 return (
    <div className="headerSection">
      <div className="titleSection">
      <img className="logo" src="/Assets/logo-transparent.png" alt="Gemma News Logo"/>
      <h1 className="mainTitle">Gemma's News</h1>
      </div>
 < Nav />
    </div>
 )
}

export default Header