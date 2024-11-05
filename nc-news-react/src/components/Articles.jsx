import { useEffect, useState } from "react"
import { getArticles } from "../axios"
import { Link } from "react-router-dom"

function Articles () {

   const [articles, setArticles] = useState([])
   const [isLoading, setisLoading] =useState(true)
   const [isErr, setisErr] = useState(false)

    useEffect(()=> {
        getArticles().then((articlesData)=> {
            setArticles(articlesData)
            setisLoading(false)
        }).catch((err)=> setisErr(true) )
    }, [])


if (isLoading === true){return <p>Loading...</p>}

    return <div className="articlesSection" >
        <h1>Articles</h1>
        <div className="articlesList"></div>
        {articles.map((article)=> {
            return <div key={article.article_id} className="articlesCard">
                <h3>{article.title}</h3>
                <p>Author: {article.author}</p>
               <Link to={`/articles/${article.article_id}/comments`}> <button>Comments: {article.comment_count}</button> </Link>
               <Link to={`/topics/${article.topic}`}> <p className="statsText">Topic: {article.topic}</p> </Link>
               <Link to={`/articles/${article.article_id}`}> <button>Read Article</button></Link> 
            </div>
             
        })}
    </div>
}




export default Articles