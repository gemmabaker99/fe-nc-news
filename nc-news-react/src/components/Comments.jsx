import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCommentsByArticleId } from "../axios"

function Comments () {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(false)
    const {article_id} = useParams()


    useEffect(()=> {
        getCommentsByArticleId(article_id).then((commentsData)=> {
            setComments(commentsData)
            setIsLoading(false)
        }).catch((err)=> {
            setErr(true)
        })
    })


if(isLoading){return <p>Loading...</p>}

    return (
        <div className="commentsList">
        {comments.map((comment)=> {
            return <div className="commentsCard">
                <p>Author: {comment.author}</p>
                <p>Comment: {comment.body}</p>
             </div>
  })}
        </div>
    
    
    )

}

export default Comments