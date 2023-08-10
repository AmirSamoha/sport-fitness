import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Stack, TextField } from "@mui/material";
import { fetchData, exersiceOptions } from "../utils";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [searchExercises, setSearchExercises] = useState([]);
  const [bodyPartsData, setBodyPartsData] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exersiceOptions);

      setBodyPartsData(['all', ...bodyPartsData])  
    };
    fetchBodyParts()
  },[])

  const hendleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exersiceOptions
      );

      //the input field search will find the exercise by more option than the exercise name 
      const inputSearch = exerciseData.filter(
        (exercise) =>
          exercise.name.toLocaleLowerCase().includes(search) ||
          exercise.target.toLocaleLowerCase().includes(search) ||
          exercise.equipment.toLocaleLowerCase().includes(search) ||
          exercise.bodyPart.toLocaleLowerCase().includes(search)
      );
        
      setSearchExercises(inputSearch)
      setSearch('')

    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        mb="50px"
        textAlign="center"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Exercises You Should Know <br />
        And Practice
      </Typography>

{/* search box */}
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search for Exercise"
          type="text"
          sx={{
            width: { lg: "1000px", md: "600px", xs: "370px" },
            background: "#fff",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          onClick={hendleSearch}
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>

      {/* category- fetch from the api */}
      <Box sx={{position: "relative", width: '100%', p: '20px'}}>
        <HorizontalScrollBar data={bodyPartsData} />

      </Box>
    </Stack>
  );
};

export default SearchExercises;
