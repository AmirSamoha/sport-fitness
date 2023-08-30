import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollBar from "../HorizontalScrollBar";
import Loader from "../Loader";

const SimilarExercises = ({ targetExercise, equipmentExercises }) => {
  console.log(equipmentExercises);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>

      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetExercise.length ? (
          <HorizontalScrollBar data={targetExercise} />
        ) : (
          <Loader />
        )}
      </Stack>

      {/*exercise by equipment  */}
      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>

      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
