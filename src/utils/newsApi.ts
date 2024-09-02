import { processServerResponse } from "./processServerResponse";
const newsKey = import.meta.env.VITE_API_NEWS_KEY;

// Types for each parameter that we have for the request
type GetArticlesParams = {
  fromDate: string;
  toDate: string;
  pageSize: number;
  userInput?: string;
};

// Search query in which does its best to condense the user input to aviation articles related to their input
const searchQuery = ({ userInput }: GetArticlesParams) =>
  `${userInput} AND (aviation OR aircraft)`;

// Request to getArticles using the fetch method
export const getArticles = ({
  fromDate,
  toDate,
  pageSize,
  userInput,
}: GetArticlesParams) => {
  const query = searchQuery({ userInput, fromDate, toDate, pageSize });
  return fetch(
    `https://nomoreparties.co/news/v2/everything/?q=${query}&apiKey=${newsKey}&$from=${fromDate}&to=${toDate}$pageSize=${pageSize}, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: newsKey,
      }
    }`
  ).then(processServerResponse);
};
