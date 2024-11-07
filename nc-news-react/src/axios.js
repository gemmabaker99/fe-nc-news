import axios from "axios";

const api = axios.create({
  baseURL: "https://gemmas-news.onrender.com/api",
});

function getArticles(
  sortBy = "created_at",
  order = "desc",
  page = "1",
  numPerPage = "10"
) {
  return api
    .get("/articles", {
      params: {
        sort_by: sortBy,
        order: order,
        p: page,
        limit: numPerPage,
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

function getAllTopics() {
  return api.get("/topics").then((response) => {
    return response.data.topics;
  });
}

function getAllUsers() {
  return api.get("/users").then((response) => {
    return response.data.users;
  });
}

function postAnArticle(article) {
  return api.post("/articles", article).then((response) => {
    return response;
  });
}

function deleteAnArticle(article_id) {
  return api.delete(`/articles/${article_id}`).then((response) => {
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
  getAllTopics,
  getAllUsers,
  postAnArticle,
  deleteAnArticle,
};
