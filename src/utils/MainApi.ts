import { BASE_URL } from "./constants";
import { processServerRes } from "./newsApi";

type updateUserProps = {
  name: string;
  avatar: string;
};

type saveArticlesProps = {
  keyword: string;
  title: string;
  text: string;
  date: string;
  source: string;
  link: string;
  image: string;
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
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
}: saveArticlesProps) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
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
