import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getArticleById, increaseArticleVotes } from "../axios"

function SingleArticle () {

    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [votes, setVotes] = useState('')

    useEffect(()=> {
        getArticleById(article_id).then((articleData)=> {
            setArticle(articleData)
            setLoading(false)
        })
    },[article_id, votes])

    if(loading === true){return <p>Loading...</p>}


    function handleVotes() {
        increaseArticleVotes(article_id).then((response)=> {
            setVotes(response.votes)
    })}
    


    return (
<div className="singleArticleBody">
            <h1>{article.title}</h1>
    <div className="articleStats">
        <p className="statsText">Written by: {article.author}</p>
        <p className="statsText">Topic: {article.topic}</p>
        <div className="votesBox">
            <p className="statsText">Current Votes: {article.votes}</p>
            <button onClick={handleVotes}>Vote</button>
        </div>
        <div className="commentsBox">
            <p>Comments: {article.comment_count}</p>
            <Link to={`/articles/${article.article_id}/comments`}> <button>View Comments</button> </Link>
        </div>

    </div>
            <img src={article.article_img_url}></img>
            <p>{article.body}</p>
        </div>
    )

}

export default SingleArticle