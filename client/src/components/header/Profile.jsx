import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React,{useState} from "react";
const MenuContainer = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;
const Profile = ({account,setAccount,userType}) => {
  
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <div>
      <Box style={{display:"flex",textAlign:"center"}}>
        <Typography
          onClick={handleClick}
          style={{ marginTop: 2, cursor: "pointer" }}
        >
          {account}
        </Typography>
        <Typography style={{paddingLeft:"20px"}} >{userType}</Typography>
      </Box>
      <MenuContainer anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </MenuContainer>
    </div>
  );
};

export default Profile;
