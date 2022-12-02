import React, { useState } from "react";
import {Typography, Button,Box,styled } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
const Login = () => {
  const intialState = {
    email: "",
    password: "",
  };
  const [login, setlogin] = useState(intialState);
  const [error,setError]=useState({color: "red",visibility:"hidden" });


  const inputHandler = (e) => {
    setError({color: "red",visibility:"hidden"});
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(login);
  };

  const Container=styled(Box)`
     margin:10%;
     text-align: center;
     width: auto;
     height:auto;        
  `;
  const InnerContainer=styled(Box)`
  width: auto;
  height: auto;
  border-radius: 10px;
  `
const DivBox=styled(Box)`
padding: 1px;
`;

const StyledButton=styled("button")({
    padding:"4px",
    borderRadius: "5px",
    fontSize: "medium",
    border: "none"
})



const Input=styled("input")({
    padding:"4px",
    borderRadius: "5px",
    fontSize: "medium"
})
  return (
    <Container>
      <InnerContainer >
        <h3 style={{color:"white"}}>Log In</h3>
        <form onSubmit={submitHandler}>
          <DivBox >
            <Input
              type="email"
              placeholder="email"
              name="email"
              onChange={inputHandler}
              minLength="3"
              maxLength="64"
              multiple
            />
          </DivBox>

          <DivBox >
            <Input
              type="password"
              placeholder="password"
              name="password"
              onChange={inputHandler}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </DivBox>

          <DivBox >
            <StyledButton type="submit">LogIn</StyledButton>
            <Typography style={{color:"white"}}>
              Don't have an account ? please{" "}SignUp
            </Typography>
          </DivBox>
          <span style={error} >
            Error : account doesn't exist
          </span>
        </form>
      </InnerContainer>
    </Container>
  );
};

export default Login;