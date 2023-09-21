import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./componnets/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./componnets/Footer";
import Bmi from "./pages/Bmi";

function App() {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/bmi" element={<Bmi />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
