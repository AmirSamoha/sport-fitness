export const exersiceOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
  },
};

export const bmiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
