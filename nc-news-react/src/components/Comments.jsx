import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { deleteAComment, getCommentsByArticleId, postAComment } from "../axios"

function Comments ({user}) {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(false)
    const {article_id} = useParams()
    const [commentToPost, setCommentToPost] = useState("")
    const [message, setMessage] = useState("")


    useEffect(()=> {
        getCommentsByArticleId(article_id).then((commentsData)=> {
            setComments(commentsData)
            setIsLoading(false)
        }).catch((err)=> {
            setErr(true)
        })
    },[comments])

    function postComment(event) {
        event.preventDefault()
        setIsLoading(true)
        postAComment(article_id, {username: user, body: commentToPost}).then((response)=> {
            setIsLoading(false)
            setMessage('Posted Successfully')
        }).catch((err)=> {
            setMessage("posting Failed, Please Try again")
        })
    }

    function deleteComment (comment_id) {
        deleteAComment(comment_id).then(()=> {
            setMessage("comment deleted successfully")
        })

    }


if(isLoading){return <p>Loading...</p>}

    return (
        <>
        
        <div className="commentsList">
        {comments.map((comment)=> {
            return <div key={comment.comment_id} className="commentsCard">
                    <p>Author: {comment.author}</p>
                    <p>Comment: {comment.body}</p>
                    {comment.author === user? <button onClick={()=> {deleteComment(comment.comment_id)}}>Delete</button> : <></>}
                 </div>
  })}
        </div>
        <div className="postCommentBox">
             <form>
             <label htmlFor="body">Comment:</label>
            <input onChange={(event)=> {setCommentToPost(event.target.value)}}type="text" id="body" name="body"/>
            <button onClick={postComment}>Post</button>
            </form>
            <p>{message}</p>
             </div>
        </>
    
    
    )

}

export default Comments