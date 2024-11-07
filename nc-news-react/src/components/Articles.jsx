import { useEffect, useState } from "react"
import { getArticles } from "../axios"
import { Link } from "react-router-dom"

function Articles () {

   const [articles, setArticles] = useState([])
   const [isLoading, setisLoading] =useState(true)
   const [isErr, setisErr] = useState(false)
   const [sortBy, setSortBy] = useState('created_at')
   const [order, setOrder] = useState('desc')
   const [page, setPage] = useState('1')
   const [numPerPage, setNumPerPage] = useState('10')

    useEffect(()=> {
        getArticles(sortBy, order, page, numPerPage).then((articlesData)=> {
            setArticles(articlesData)
            setisLoading(false)
        }).catch((err)=> setisErr(true) )
    }, [sortBy, order, page, numPerPage])


if (isLoading === true){return <p>Loading...</p>}

    return <div className="articlesSection" >
    <h1 id='articleHeader'>Articles</h1>
    <div className="articleSorter">
        <label htmlFor="sortBy">Sort By:</label>

            <select onChange={(event)=> {setSortBy(event.target.value)}} name="sortBy" id="sortBy">
                <option  value="created_at">Date</option>
                <option  value="comment_count">Comment Count</option>
                <option  value="votes">Votes</option>
            </select>
        <label htmlFor="order">Sort By:</label>

            <select onChange={(event)=> {setOrder(event.target.value)}} name="order" id="order">
                <option  value="desc">Descending</option>
                <option  value="asc">Ascending</option>
            </select>


        </div>
        <div className="articlesList">
        {articles.map((article)=> {
            return <div key={article.article_id} className="articlesCard">
                <h3>{article.title}</h3>
                <p>{new Date(article.created_at).toLocaleString()}</p>
                <p>Author: {article.author}</p>
               <Link to={`/articles/${article.article_id}/comments`}> <button>Comments: {article.comment_count}</button> </Link>
               <Link to={`/topics/${article.topic}`}> <p className="statsText">Topic: {article.topic}</p> </Link>
               <Link to={`/articles/${article.article_id}`}> <button>Read Article</button></Link> 
            </div>
             
        })}
        </div>
        <button onClick={()=> {setPage('1'), window.scrollTo({ top: 0, behavior: 'smooth' })}}>Page 1</button>
         <button onClick={()=> {setPage('2'), window.scrollTo({ top: 0, behavior: 'smooth' })}}>Page 2</button>
         <label htmlFor="numPerPage">Results Per Page:</label>

            <select onChange={(event)=> {setNumPerPage(event.target.value)}} name="numPerPage" id="numPerPage">
                <option  value="10">10</option>
                <option  value="20">20</option>
                <option  value="30">30</option>
            </select>
    </div>
    
}




export default Articles