function Post () {


function postArticle () {
}

    return (
        <div>
        <p>Post a New Article</p>
        <form>
            <input id="title" type="text" name="Title" />
            <label htmlFor="title" name="Title" />
            <input type="text" name="Content" />
            <input type="button" value='post' onClick={postArticle} />
        </form>
        </div>
    )
}

export default Post