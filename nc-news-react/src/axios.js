import axios from "axios";

const api = axios.create({
  baseURL: "https://gemmas-news.onrender.com/api",
});

function getArticles(sortBy = "created_at") {
  return api
    .get("/articles", {
      params: {
        sort_by: sortBy,
      },
    })
    .then((response) => {
      return response.data.articles;
    });
}

function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
}

function getCommentsByArticleId(article_id) {
  return api.get(`articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}

function increaseArticleVotes(article_id) {
  return api
    .patch(`articles/${article_id}`, { inc_votes: 1 })
    .then((response) => {
      return response.data.article;
    });
}

function postAComment(article_id, commentBody) {
  return api
    .post(`articles/${article_id}/comments`, commentBody)
    .then((response) => {
      return response.data.comment;
    });
}

function deleteAComment(comment_id) {
  return api.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
}

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  increaseArticleVotes,
  postAComment,
  deleteAComment,
};
