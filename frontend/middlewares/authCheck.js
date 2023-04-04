import { useState, useEffect } from "react";
import axios from "axios";

export function useAuthCheck() {
  const [isAuthenticated, setAuth] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/session", {
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response);
        setAuth(response);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);
  return { isAuthenticated, error };
}