import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./componnets/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./componnets/Footer";
import Bmi from "./pages/Bmi";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import UserDetails from "./pages/Login/UserDetails";

function App() {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
