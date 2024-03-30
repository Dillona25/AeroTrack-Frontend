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
