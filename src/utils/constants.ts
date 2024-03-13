export const baseUrl = `https://nomoreparties.co/news/v2`;

export const ProcessServerRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`Error ${res.status}`));
};

export const ApiKey = "f048494bbf6540f1995cbbfe929e5677";
