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

export { getArticles, getArticleById };
