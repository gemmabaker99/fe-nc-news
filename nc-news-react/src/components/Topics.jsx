import { useEffect, useState } from "react"
import { getAllTopics } from "../axios"
import { Link } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';


function Topics () {
  const [topics, setTopics] = useState([])
    const [message, setMessage] =useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getAllTopics().then((topicData)=> {
            setLoading(false)
            setTopics(topicData)
        }).catch((err)=> {
            setLoading(false)
            setMessage('Unable to load topics, please refresh and try again')
        })
    })

    if (loading) {return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

 return ( <div className="topicPage">
            <h2>Topics</h2>
            {topics.map((topic)=> {
                return <div className="topicPageList" key={topic.slug} > 
                           <Link to={`/topics/${topic.slug}`}><h4>{topic.slug}</h4></Link> 
                            <p>{topic.description}</p>
                    </div>
            })}
        </div>
 )
}

export default Topics