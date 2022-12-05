import React from "react";
import { Card,Button, Box, Typography, styled } from "@mui/material";

const StyledCard = styled(Card)`
  width:200px;
  height:auto;
  margin-button:20px:
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const SubContainer=styled(Box)`

`;

const UserMovieCard = ({ item }) => {
  return (
    <StyledCard>
      <Box
        textAlign="center"
        style={{ padding: "25px 15px", marginBottom: "10px" }}
      >
        <Image alt="Movie Poster" src={item.posterurl} />
        <SubContainer >
          <Text style={{ fontWeight: 600, color: "#212121" }}>
            {item.title}
          </Text>
          <Text style={{ color: "green" }}>
            Release Date:{item.releaseDate}
          </Text>
          <Text style={{ color: "#212121", opacity: ".6" }}>
            IMDB Rating {item.imdbRating}
          </Text>
        </SubContainer>
        <Button  style={{background:"rgb(29, 69, 107)",color:"white",marginRight:"10px"}} >Update</Button>
        <Button  style={{background:"rgb(29, 69, 107)",color:"white",marginRight:"10px"}} >Delete</Button>
      </Box>
    </StyledCard>
  );
};

export default UserMovieCard;
