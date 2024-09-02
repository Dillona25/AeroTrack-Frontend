import { BASE_URL } from "./apiKeys";
import { processServerResponse } from "./processServerResponse";

type registrationProps = {
  email: string;
  password: string;
  name: string;
  avatar: string;
};

type authorizeProps = {
  email: string;
  password: string;
};

// Fecth to the API to register a user
export const registration = ({
  email,
  password,
  name,
  avatar,
}: registrationProps) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then(processServerResponse)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// Fetch to API to sign a user in
export const authorize = ({ email, password }: authorizeProps) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(processServerResponse)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// API Call to get the current user and check token
export const checkToken = (token: string) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then(processServerResponse)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

// Function to check if the email exists
export const checkEmailExists = (email: string) => {
  return fetch(`${BASE_URL}/users/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then(processServerResponse)
    .catch((err) => {
      console.error("Error checking email:", err);
      throw err;
    });
};

// Function to check if the passwords match
export const checkPasswords = (email: string, password: string) => {
  return fetch(`${BASE_URL}/users/check-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(processServerResponse)
    .catch((err) => {
      console.error("Invalid Email or Password", err);
      throw err;
    });
};
