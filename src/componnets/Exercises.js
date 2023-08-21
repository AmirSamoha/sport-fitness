import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { exersiceOptions, fetchData } from "../utils";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setSearchExercises, bodyPart, searchExercises }) => {
  console.log(searchExercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >

        {searchExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
        
      </Stack>
    </Box>
  );
};

export default Exercises;
