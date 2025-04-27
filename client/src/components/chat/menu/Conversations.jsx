import { useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import { Box } from "@mui/material";
import Conversation from "./Conversation";

const Conversations = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await getUsers();
        console.log('line_13',response); 
        setUsers(response);   
      }
    fetchData();
  }, []);

  return (
    <Box>
      {users.map((user) => (
        <Conversation user={user} />
      ))}
    </Box>
  );
};

export default Conversations;
