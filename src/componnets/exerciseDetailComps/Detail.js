import React from "react";
import { Typography, Stack, Button } from "@mui/material";

//images
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

const Detail = ({ exercsieDetails }) => {
  const { bodyPart, equipment, gifUrl, target, name } = exercsieDetails;

  const iconsDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack
        sx={{
          gap: { lg: "35px", xs: "20px" },
        }}
      >
        <Typography variant="h3">{name}</Typography>

        <Typography variant="h6">
          Exercise keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>

        {iconsDetails.map((icon) => (
          <Stack key={icon.name} direction="row" gap="24px" alignItems="center">
            
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
              }}
            >
              <img src={icon.icon} alt={icon.name} />
            </Button>

            <Typography variant="h5" textTransform="capitalize">
              {icon.name}
            </Typography>

          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
