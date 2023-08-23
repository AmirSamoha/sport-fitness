import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { exersiceOptions, fetchData } from "../utils";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ setSearchExercises, bodyPart, searchExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // will be the first exercise in the new page
  const currentExercises = searchExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginte = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exersiceOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exersiceOptions
        );
      }
      setSearchExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

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
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {searchExercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(searchExercises.length / exercisesPerPage)} // show the number of exercises per page page
            page={currentPage}
            onChange={paginte}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
