import { useState, useEffect } from "react";
import axios from "axios";

export function useUser() {
  const [currentUser, setUser] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/login/success", {
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);
  return { currentUser, error };
}
