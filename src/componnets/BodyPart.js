import React from "react";
import { Typography, Stack } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ category, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      onClick={() => {
        setBodyPart(category);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      sx={{
        borderTop: bodyPart === category ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img src={Icon} alt="img" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {category}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
