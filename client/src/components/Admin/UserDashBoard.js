import React, { useState, useEffect } from "react";

import UserCard from "./UserCard";
import axios from "axios";
import { Box, styled } from "@mui/material";


const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const UserDashBoard = () => {
  const [user, setUser] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:5000/login").then((data) => setUser(data.data.data));
  }, []);

  return (
    <>
    <Container>
      {user.map((item) => (
        <UserCard item={item} key={item._id} />
      ))}
    </Container>
    </>
  );
};

export default UserDashBoard;
