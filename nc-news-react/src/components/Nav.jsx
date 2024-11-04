import { Link } from "react-router-dom"

function Nav () {
    return <nav>
        <Link to={'/'}> <button>Home</button> </Link>
        <Link to={'/articles'}> <button>Articles</button> </Link>
        <Link to={'/post'}> <button>Post</button> </Link>

    </nav>
}

export default Nav