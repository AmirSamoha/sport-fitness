import Reactת, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exersiceOptions, fetchData } from "../utils";
//comps
import SimilarExercises from "../componnets/exerciseDetailComps/SimilarExercises";
import ExerciseVideos from "../componnets/exerciseDetailComps/ExerciseVideos";
import Detail from "../componnets/exerciseDetailComps/Detail";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exercsieDetails, setexercsieDetails] = useState({});

  useEffect(() => {
    const fetchDetailsData = async() => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      //call the exercise data 
      const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exersiceOptions);
      setexercsieDetails(exerciseDetailData)

    }

    fetchDetailsData()
  },[id]);

  console.log(exercsieDetails)

  return (
    <Box>
      <Detail exercsieDetails={exercsieDetails} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
