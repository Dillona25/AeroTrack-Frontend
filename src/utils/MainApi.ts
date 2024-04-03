import { Article } from "../components/App";
import { BASE_URL } from "./constants";
import { processServerRes } from "./newsApi";

type updateUserProps = {
  name: string;
  avatar: string;
};

export const updateUser = ({ name, avatar }: updateUserProps) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(processServerRes);
};

export const getSavedArticles = (token: string) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerRes);
};

export const saveArticle = ({
  author,
  title,
  description,
  publishedAt,
  url,
  urlToImage,
}: Article) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      author,
      title,
      description,
      publishedAt,
      url,
      urlToImage,
    }),
  });
};

export const deleteSaveArticles = (articleId: string, token: string) => {
  return fetch(`${BASE_URL}/articles/:${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ articleId }),
  }).then(processServerRes);
};
