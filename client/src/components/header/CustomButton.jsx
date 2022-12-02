import { Box, Button, styled } from "@mui/material";
import { useState} from "react";

import LoginDialog from "./LoginDialog";

import Profile from "./Profile";
const Wapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
 
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-item: center;
  }

`;

const LoginButton = styled(Button)`
  color: rgb(29, 69, 107);
  background: #ffffff;
  text-transform: none;
  padding: 5px 15px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  //const { account, setAccount } = useContext(DataContext);
  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wapper>
      {false ? (
        <Profile  />
      ) : (
        <Box>
          <LoginButton variant="contained" onClick={() => openDialog()}  style={{marginRight:"10px"}} >
         User Login
        </LoginButton>
         <LoginButton variant="contained" onClick={() => openDialog()}>
         Admin Login
        </LoginButton>
        </Box>
      )}

      {open && <LoginDialog open={open} setOpen={setOpen} />}
    </Wapper>
  );
};
export default CustomButton;
