import { ProcessServerRes, baseUrl } from "./Constants";

type GetArticlesParams = {
  ApiKey: string;
  fromDate: string;
  toDate: string;
  pageSize: number;
};

export const getArticles = ({
  fromDate,
  toDate,
  pageSize,
}: GetArticlesParams) => {
  return fetch(
    `${baseUrl}/everything/?q=Aviation&apiKey=f048494bbf6540f1995cbbfe929e5677&$from=${fromDate}&to=${toDate}$pageSize=${pageSize}, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: ApiKey,
      }
    }`
  ).then(ProcessServerRes);
};
