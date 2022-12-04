import React,{useState} from "react";
import { Box, styled } from "@mui/material";
const Container = styled(Box)`
  margin: 5%;
  
  width: auto;
  height: auto;
`;
const InnerContainer = styled(Box)`
  width: auto;
  height: auto;
  border-radius: 10px;
`;
const DivBox = styled(Box)`
  padding: 1px;
`;

const StyledButton = styled("button")({
  padding: "4px",
  borderRadius: "5px",
  fontSize: "medium",
  border: "none",
});

const Input = styled("input")({
  padding: "6px",
  borderRadius: "5px",
  fontSize: "large",
  width: "80%",
});




const AddMovie = () => {
    const [addNewMovie,setAddNewMovie]=useState({});
    const inputHandler = (e) => {
        setAddNewMovie({...addNewMovie,[e.target.name]:e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(addNewMovie);
    };
  return (
    <Container>
      <InnerContainer>
        <h3 style={{ color: "white" }}>Log In</h3>
        <form onSubmit={submitHandler}>
       <Box>
       <lable>Title</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter title"
              name="title"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Year</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter year  e.g.  2022"
              name="year"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Genres</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter genres  e.g. [] "
              name="genres"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>ratings</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter ratings e.g. [1,4,3,4]"
              name="ratings"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Poster</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter poster URL"
              name="poster"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Content Rating</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter Content Rating e.g  12 "
              name="contentRating"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Duration</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter  Duration"
              name="duration"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Release Date</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter release date"
              name="releaseDate"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Average Rating</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Average Rating"
              name="averageRating"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Original Title</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="originalTitle"
              name="originalTitle"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Storyline</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Story Line"
              name="storyline"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Actors</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Actor name in []"
              name="actors"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>IMDB Rating</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Enter IMDB Rating"
              name="imbdbRating"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>
       <Box>
       <lable>Poster URL</lable>
          <DivBox>
            <Input
              type="text"
              placeholder="Poster URL"
              name="posterurl"
              onChange={inputHandler}
            />
          </DivBox>
       </Box>

          <DivBox>
            <StyledButton type="submit">Submit</StyledButton>
          </DivBox>
        </form>
      </InnerContainer>
    </Container>
  );
};

export default AddMovie;
