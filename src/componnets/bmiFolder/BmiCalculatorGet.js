import React, { useState } from "react";
import { fetchData,bmiOptions  } from "../../utils";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";

const BmiCalculatorGet = () => {
  const [bmi, setBmi] = useState({});
  const [weightValue, setWeightValue] = useState(null);
  const [heightValue, setHeightValue] = useState(null);
  const [ageValue, setAgeValue] = useState(null);


    const fetchDataFromApi = async (e) => {
      e.preventDefault();
      try {
        const bmiData = await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?age=${ageValue}&weight=${weightValue}&height=${heightValue}`, bmiOptions);
                  setBmi(bmiData.data);

        if (!bmiData) {
          throw new Error('Network response was not ok');
        }

      
        setBmi(bmiData.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };


  return (
    <Box pt="50px">
      <Typography variant="h5">Want to Know what is your BMI?</Typography>
      <p>Enter your data</p>

      <Box display={"flex"} flexWrap={"wrap"}>
        <TextField
          id="outlined-controlled"
          type="number"
          required
          label="weight"
          value={weightValue}
          margin="dense"
          color="success"
          onChange={(e) => {
            setWeightValue(e.target.value);
          }}
        />

        <TextField
          id="outlined-controlled"
          required
          type="number"
          label="height 170"
          value={heightValue}
          margin="dense"
          color="success"
          onChange={(e) => {
            setHeightValue(e.target.value);
          }}
        />

        <TextField
          id="outlined-controlled"
          required
          type="number"
          label="age"
          value={ageValue}
          margin="dense"
          color="success"
          onChange={(e) => {
            setAgeValue(e.target.value);
          }}
        />

        <Button
          sx={{ color: "#ffa9a9" }}
          size="medium"
          endIcon={<CalculateIcon />}
          onClick={fetchDataFromApi}
        >
          Calculate
        </Button>
      </Box>

      <Stack mt="10px">
        {/* <Typography variant="h3" color='#ffa9a9'>your result:</Typography> */}
        <Typography variant="h5" color='#ffa9a9'>your bmi is: {bmi?.bmi}</Typography>
        <Typography variant="h5">the health: {bmi?.health}</Typography>
        <Typography variant="h5">range bmi healthy: {bmi?.healthy_bmi_range}</Typography>
      </Stack>
    </Box>
  );
};

export default BmiCalculatorGet;
