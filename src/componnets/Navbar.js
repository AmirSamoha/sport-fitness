import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "30px" },
        mt: { sm: "32px", xs: "20px" },
        px:{ sm: "20px", xs: "5px" },
        justifyContent: "none"
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48", margin: "0 15px" }}
        />
      </Link>

      <Stack direction="row" gap={{ sm: "40px", xs: "5px" }} fontSize={{ sm: "22px", xs: "16px" }} alignItems="flex-end" >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>

        <a
          href="#exercises || / "
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>{" "}

        <Link
          to="/bmi"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          BMI calculet
        </Link>

        <Link
          to="/sign-in"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Login
        </Link>
        <Link
          to="/sign-up"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Sign up
        </Link>
      </Stack>
      
    </Stack>
  );
};

export default Navbar;
