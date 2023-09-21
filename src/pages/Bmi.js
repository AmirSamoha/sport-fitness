import { Box } from "@mui/material";

import FoodCalculator from "../componnets/bmiFolder/FoodCalculator";
import BmrCalculator from "../componnets/bmiFolder/BmrCalculator";
import BmiCalculatorGet from "../componnets/bmiFolder/BmiCalculatorGet";

const Bmi = () => {
  return (
    <Box>
      <BmiCalculatorGet />
      <FoodCalculator />
      <BmrCalculator />
    </Box>
  );
};

export default Bmi;
