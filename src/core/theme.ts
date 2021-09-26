import { createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: red,
    background: {
      default: "#121212", // As per MD specs
    },
  },
});
