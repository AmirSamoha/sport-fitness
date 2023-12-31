import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ youtubeDetails, name }) => {
  if (!youtubeDetails) {
    return "Loading...";
  }

  return (
    <Box p="20px" sx={{ marginTop: { lg: "150px", xs: "20px" } }}>
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: "#FF2625" }}>{name}</span> exercise videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row", xs: "column" },
          gap: { lg: "80px", xs: "0" },
        }}
      >
        {youtubeDetails?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="gray ">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
