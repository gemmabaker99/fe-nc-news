import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getArticleById, increaseArticleVotes } from "../axios"
import Spinner from "react-bootstrap/esm/Spinner"

function SingleArticle () {

    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [votes, setVotes] = useState('')
    const [message, setMessage] = useState("")

    useEffect(()=> {
        getArticleById(article_id).then((articleData)=> {
            setArticle(articleData)
            setLoading(false)
        }).catch((err)=> {
            console.log(err, "error log")
            setLoading(false)
            setMessage("article not found")
        })
    },[article_id, votes])

    if(loading === true){return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    if(message) {return <div>
        <p>{message}</p>
        <Link to="/">Go back to Home</Link>
        </div>}


    function handleVotes() {
        increaseArticleVotes(article_id).then((response)=> {
            setVotes(response.votes)
    })}
    


    return (
<div className="singleArticleBody">
            <h1 id="singleArticleHeader">{article.title}</h1>
  
            <img id="singleArticleImg" src={article.article_img_url}></img>
            <p>{article.body}</p>
            <div className="articleStats">
        <p className="statsText">Written by: {article.author}</p>
        <Link to={`/topics/${article.topic}`}> <p className="statsText">Topic: {article.topic}</p> </Link>
        <div className="votesBox">
            <p className="statsText">Current Votes: {article.votes}</p>
            <button onClick={handleVotes}>Vote</button>
        </div>
        <div className="commentsBox">
            <p>Comments: {article.comment_count}</p>
            <Link to={`/articles/${article.article_id}/comments`}> <button>View Comments</button> </Link>
        </div>

    </div>
</div>
    )

}

export default SingleArticle