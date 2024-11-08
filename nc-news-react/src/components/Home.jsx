import { useEffect, useState } from "react"
import { getAllTopics, getArticles } from "../axios"
import { Link } from "react-router-dom"
import Spinner from "react-bootstrap/esm/Spinner"

function Home () {
  const [articles, setArticles] = useState([])
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)

    useEffect(()=> {
        Promise.all([getArticles('votes'), getAllTopics() ])
        .then(([articlesData, topicData])=> {
            setArticles(articlesData)
            setTopics(topicData)
            setLoading(false)
        }).catch((err)=> {
            setLoading(false)
            setErr(true)
        })}
    , [])

    if(loading){return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    return (
    <div>
        <div className="trendingArticlesSection">
        <h2>Trending Articles</h2>
        <Link to={`/articles/${articles[0].article_id}`}> <button>{articles[0].title}</button> </Link>
        <Link to={`/articles/${articles[1].article_id}`}> <button>{articles[1].title}</button> </Link>
        <Link to={`/articles/${articles[2].article_id}`}> <button>{articles[2].title}</button> </Link>
        <Link to={`/articles/${articles[3].article_id}`}> <button>{articles[3].title}</button> </Link>
        </div>
        <div className="trendingTopicsSection">
        <h2>Trending Topics</h2>
        <Link to={`/topics/${topics[0].slug}`}> <button>{topics[0].slug}</button></Link>
        <Link to={`/topics/${topics[1].slug}`}> <button>{topics[1].slug}</button></Link>

        </div>
    </div>
    )
}

export default Home