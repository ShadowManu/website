import { createMuiTheme } from "@material-ui/core/styles"
import red from "@material-ui/core/colors/red"

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
    background: {
      default: "#121212", // As per MD specs
    },
  },
})
