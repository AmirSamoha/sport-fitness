import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./componnets/Navbar";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./componnets/Footer";

function App() {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>

      <Footer />
    </Box>
  );
}
// להמשיך מ4:00
export default App;
