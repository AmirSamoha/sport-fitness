import React from "react";
import { Box, Button,Typography } from "@mui/material";
import banner from "../assets/images/banner.png";


const InfoPage = () => {
  return (
    <Box
      position="relative"
      p="15px"
      sx={{
        mt: { lg: "220px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px" 
        mt='23px'
      >
        Swite, Smile <br /> and Repeat
      </Typography>

      <Typography marginBottom={4} fontSize="22px">
        Check out the most effective exercises
      </Typography>

      <Button href="#exercises" variant="contained" color="error">
        Explore Exercises
      </Button>

      <Typography
        color="#FF2625"
        fontWeight={600}
        fontSize="200px"
        sx={{
          opacity: 0.1,
          display: {lg: "block",xs: "none",},
        }}
      >
        Exercises
      </Typography>

      <img src={banner} alt="img" className="hero-banner-img " />
    </Box>
  );
};

export default InfoPage;
