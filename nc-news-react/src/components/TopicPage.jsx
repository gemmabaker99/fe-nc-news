import { useEffect, useState } from "react"
import { getAllTopics, getArticles } from "../axios"
import { Link, useParams } from "react-router-dom"
import { all } from "axios"



function TopicPage () {

    const [allTopics, setAllTopics] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [allArticles, setAllArticles] = useState([])
    const {topic_name} = useParams()


    useEffect(()=> {
        getAllTopics().then((response)=> {
            setLoading(false)
            setAllTopics(response)
            getArticles(undefined, undefined, "1", "1000").then((response)=> {
            setAllArticles(response)
            })
            
        }).catch((err)=> {
            setMessage('request failed, please try again')
        })
    },[])

    const matchingTopic = allTopics.filter((topic)=> {
        return topic.slug === topic_name
    })

    if(loading){return <p>Loading...</p>}
    if(matchingTopic.length === 0) {return <div>
        <p>Topic does not exist</p>
        <Link to="/">Go back to Home</Link>
        </div> }

    return (
        <div>
            <h2>{matchingTopic[0].slug}</h2>
            <p>Description: {matchingTopic[0].description}</p>
            <p>{message}</p>
            {allArticles.map((article)=> {
                if(article.topic === matchingTopic[0].slug){
                    return <Link to={`/articles/${article.article_id}`}> <p>{article.title}</p> </Link>
                }
            })}
        </div>
    )
}

export default TopicPage