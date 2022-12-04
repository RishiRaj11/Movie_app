import React from 'react'
import { Box } from '@mui/material';
import { styled } from '@mui/material';
import AddMovie from './AddMovie';

const Container=styled(Box)`
margin-top:75px;
`;
const UserLogin = () => {
  return (
    <Container>
      <AddMovie />
    </Container>
  )
}

export default UserLogin