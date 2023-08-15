import React, { useState } from "react";
import { Box } from "@mui/material";
import InfoPage from "../componnets/InfoPage";
import SearchExercises from "../componnets/SearchExercises";
import Exercises from "../componnets/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [searchExercises, setSearchExercises] = useState([]);
  return (
    <Box>
      
      <InfoPage />

      <SearchExercises
        setSearchExercises={setSearchExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises
        setSearchExercises={setSearchExercises}
        bodyPart={bodyPart}
        searchExercises={searchExercises}
      />

    </Box>
  );
};

export default Home;
