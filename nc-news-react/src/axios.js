import axios from "axios";

const api = axios.create({
  baseURL: "https://gemmas-news.onrender.com/api",
});

function getArticles() {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
}

function getArticleById(article_id) {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
}

export { getArticles, getArticleById };
