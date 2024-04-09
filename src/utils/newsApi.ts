import { NEWS_BASE_URL } from "./constants";

// Types for each parameter that we have for the request
type GetArticlesParams = {
  fromDate: string;
  toDate: string;
  pageSize: number;
  userInput?: string;
};

export const processServerRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  switch (res.status) {
    case 400:
      return Promise.reject(new Error("Bad request"));
    case 401:
      return Promise.reject(new Error("Incorect Email or Password"));
    case 404:
      return Promise.reject(new Error("Not found"));
    case 409:
      return Promise.reject(new Error("Email already in use"));
    default:
      return Promise.reject(new Error(`Error ${res.status}`));
  }
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
    `${NEWS_BASE_URL}/everything/?q=${query}&apiKey=f048494bbf6540f1995cbbfe929e5677&$from=${fromDate}&to=${toDate}$pageSize=${pageSize}, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: ApiKey,
      }
    }`
  ).then(processServerRes);
};
