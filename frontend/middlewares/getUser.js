import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchUser(userId) {
  const [user, setUser] = useState(false);
  const [userError, setUserError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getuser/${userId}`, { withCredentials: true })
      .then((response) => {
        // console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        // console.log(err.response.data);
        setUserError(err);
      });
  }, [userId]);
  return { user, userError };
}
