import React, { useContext, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { DataContext } from "../context/DataProvider";
import { getMovies } from "../redux/actions/moviesActions";
import UserMovieCard from "./UserMovieCard";
import { useState } from "react";
const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;
const AllCreatedMovie = () => {
  const [filteredMovie, setFilteredMovie] = useState([]);
  const { account } = useContext(DataContext);

  const { movies } = useSelector((state) => state.getAllMovies); // this getProducts comming from redux store

 // console.log(movies[53].creatorEmail);
  //console.log(account.email);
  //console.log(filteredMovie);
  const dispatch = useDispatch();
  //console.log(dispatch);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

 

  return (
    <Container>
      {movies.filter((item)=>{return item.creatorEmail===account.email }).map((item) => (
        <UserMovieCard item={item} />
      ))}
    </Container>
  );
};

export default AllCreatedMovie;
