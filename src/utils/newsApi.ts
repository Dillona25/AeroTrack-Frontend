import { ProcessServerRes, baseUrl } from "./Constants";

type GetArticlesParams = {
  fromDate: string;
  toDate: string;
  pageSize: number;
  userInput?: string;
};

// Search query in which does its best to condense the user input to aviation articles related to their input
//todo: make sure its working.
const searchQuery = ({ userInput }: GetArticlesParams) =>
  `${userInput} AND (aviation OR aircraft)`;

export const getArticles = ({
  fromDate,
  toDate,
  pageSize,
  userInput,
}: GetArticlesParams) => {
  const query = searchQuery({ userInput, fromDate, toDate, pageSize });
  return fetch(
    `${baseUrl}/everything/?q=${query}&apiKey=f048494bbf6540f1995cbbfe929e5677&$from=${fromDate}&to=${toDate}$pageSize=${pageSize}, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: ApiKey,
      }
    }`
  ).then(ProcessServerRes);
};
