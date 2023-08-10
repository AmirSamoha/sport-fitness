import React from "react";
import { Box } from "@mui/material";
import InfoPage from "../componnets/InfoPage";
import SearchExercises from "../componnets/SearchExercises";
import Exercises from "../componnets/Exercises";

const Home = () => {
  return (
    <Box>
      <InfoPage />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
