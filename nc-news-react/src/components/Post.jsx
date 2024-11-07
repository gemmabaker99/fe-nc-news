import { useEffect, useState } from "react"
import { deleteAnArticle, getAllTopics, getArticles, postAnArticle } from "../axios"
import { Link } from "react-router-dom"

function Post ({user}) {

    const [topicsList, setTopicsList] = useState([])
    const [articleTitle, setArticleTitle] = useState('')
    const [articleContent, setArticleContent] = useState('')
    const [articleTopic, setArticleTopic] = useState('')
    const [message, setMessage] = useState("")
    const [usersArticles, setUsersArticles] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=> {
        Promise.all([getAllTopics(), getArticles(undefined, undefined, "1", "1000")])
        .then(([topicsData, articlesData])=> {
            setTopicsList(topicsData)
            setLoading(false)
            console.log(articlesData, "articlesdata")
            const filteredArticles = articlesData.filter((article)=> {
                return article.author === user
            })
            setUsersArticles(filteredArticles)
        })
    },[user])

function postArticle (event) {
    event.preventDefault()
    console.log({author: user, title: articleTitle, body: articleContent, topic: articleTopic})
    setLoading(true)
    if(user === ''){setMessage("Please Login to Post an article")}
    else {
    postAnArticle({author: user, title: articleTitle, body: articleContent, topic: articleTopic}).then((newArticle)=> {
        setLoading(false)
        setMessage('Posted Successfully')
        setUsersArticles((prevArticles) => [newArticle.data.article, ...prevArticles])
    }).catch((err)=> {
        setLoading(false)
        setMessage(err.message)
    })
}}

function deleteArticle (article_id) {
    setLoading(true)
    deleteAnArticle(article_id).then(()=> {
        setLoading(false)
        setMessage("Deleted Successfully")
        setUsersArticles((prevArticles) =>
            prevArticles.filter((article) => article.article_id !== article_id)
        )
    }).catch((err)=> {
        setLoading(false)
        setMessage(err.message)
    })
}
    if(loading){return <p>Loading...</p>}

    return (
        <div>
        <p>Post a New Article</p>
        <form onSubmit={postArticle} className="postForm">
            <label htmlFor="title" name="Title">Title</label>
            <input onChange={(event) => {setArticleTitle(event.target.value)}} id="title" type="text" name="Title" />
            
            <label htmlFor="Content" name="Content">Content</label>
            <textarea onChange={(event) => {setArticleContent(event.target.value)}} name="Content" />

            <label htmlFor="topic">Choose a topic:</label>
            <select onChange={(event) => {setArticleTopic(event.target.value)}}  name="topic" id="topic">
        {topicsList.map((topic)=> {
            return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
        })}
        </select>
            
            <input type="submit" value='Post' />
        </form>
        <p>{message}</p>
        <div className="Your Articles">
            <h3>Your Articles:</h3>
            {usersArticles.map((article)=> {
                return <div className="manageArticleCard" key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`}> <p>{article.title}</p></Link> 
                        
                    <p>{article.author}</p>
                    <button onClick={() => {deleteArticle(article.article_id)}}>Delete</button>
                    </div>
            })}
        </div>
        </div>
    )
}

export default Post