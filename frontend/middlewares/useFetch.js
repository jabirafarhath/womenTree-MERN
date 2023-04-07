import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch() {
  const [users, setUsers] = useState([]);
  const [authError, setError] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/getUsers", { withCredentials: true }).then((response)=>{
        setUsers(response.data);

    }).catch((err)=>{
        console.log(err);
    })
  },[]);
  return {users,authError}
}
