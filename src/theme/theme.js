import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#FEB6B7",
    },
    outLine: {
      main: "#494949",
    },
    backgroundButton: {
      main: "#E0C3F6",
    },
    error: {
      main: red.A400,
    },
  },
});
