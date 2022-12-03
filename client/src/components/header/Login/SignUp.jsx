import React, { useState,useContext } from "react";
import {Typography,Box,styled } from "@mui/material";
import {DataContext} from   '../../context/DataProvider'
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


const SignUp = (props) => {
    const {setAccount}=useContext(DataContext);
    const {setOpen,setLoginSignup}=props;
  const intialState = {
    name:"",
    email: "",
    password: "",
    cpassword:""
  };
  const [login, setlogin] = useState(intialState);
  const [error,setError]=useState({color: "red",visibility:"hidden" });


  const inputHandler = (e) => {
    setError({color: "red",visibility:"hidden"});
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const signupHandler=()=>{
    setLoginSignup(true);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
      setAccount(login.email);
    console.log(login);
    setOpen(false);
  };

  
  return (
    <Container>
      <InnerContainer >
        <h3 style={{color:"white"}}>SignUp</h3>
        <form onSubmit={submitHandler}>
        <DivBox >
            <Input
              type="text"
              placeholder="Name"
              name="name"
              onChange={inputHandler}
              minLength="3"
              maxLength="64"
              
            />
          </DivBox>

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
            <Input
              type="password"
              placeholder=" conform password"
              name="cpassword"
              onChange={inputHandler}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </DivBox>

          <DivBox >
            <StyledButton type="submit">LogIn</StyledButton>
            <Typography style={{color:"white"}}>
              Don't have an account ? please{" "} <span style={{cursor:"pointer"}}onClick={signupHandler} >Login</span>
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

export default SignUp;