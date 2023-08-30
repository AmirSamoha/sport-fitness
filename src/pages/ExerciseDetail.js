import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exersiceOptions, fetchData, youtubeOptions } from "../utils";
//comps
import SimilarExercises from "../componnets/exerciseDetailComps/SimilarExercises";
import ExerciseVideos from "../componnets/exerciseDetailComps/ExerciseVideos";
import Detail from "../componnets/exerciseDetailComps/Detail";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exercsieDetails, setexercsieDetails] = useState({});
  const [youtubeDetails, setYoutubeDetails] = useState([]);
  const [targetExercise, setTargetExercise] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const fetchDetailsData = async() => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      //call the exercise data 
      const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exersiceOptions);
      setexercsieDetails(exerciseDetailData)

      //fetch the data of the exercise from youTube(rapidApi) by name from exerciseDetailData
      const youtubeExercises = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setYoutubeDetails(youtubeExercises.contents)

      //fetch similar exercises by the same target
      const similarTargetExercisesData = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetailData.target}`, exersiceOptions);
      setTargetExercise(similarTargetExercisesData)

      //fetch similar exercises by the same equipment
      const equipmentExercisesData = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exersiceOptions);
      setEquipmentExercises(equipmentExercisesData)
    }

    fetchDetailsData()
  },[id]);

  return (
    <Box>
      <Detail exercsieDetails={exercsieDetails} />
      <ExerciseVideos youtubeDetails={youtubeDetails} name={exercsieDetails.name}/>
      <SimilarExercises targetExercise={targetExercise} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
