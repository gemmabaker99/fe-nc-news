import { useEffect, useState } from "react"
import { getArticles } from "../axios"
import { Link } from "react-router-dom"

function Home () {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [err,setErr] = useState(false)

    useEffect(()=> {
        getArticles('votes').then((data)=> {
            setArticles(data)
            setLoading(false)
        }).catch((err)=> {
            setErr(true)
        })
    }, [])

    if(loading){return <p>Loading...</p>}

    return (
    <>
        <div className="trendingArticlesSection">
        <h2>Trending Articles</h2>
        <Link to={`/articles/${articles[0].article_id}`}> <button>{articles[0].title}</button> </Link>
        <Link to={`/articles/${articles[1].article_id}`}> <button>{articles[1].title}</button> </Link>
        <Link to={`/articles/${articles[2].article_id}`}> <button>{articles[2].title}</button> </Link>
        <Link to={`/articles/${articles[3].article_id}`}> <button>{articles[3].title}</button> </Link>
    </div>
    <div className="trendingTopicsSection">
        <h2>Trending Topics</h2>
    </div>
    </>
    )
}

export default Home