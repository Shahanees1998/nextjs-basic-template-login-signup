import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcd38",
    },
    secondary: {
      main: "#14a37f",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
})

export default theme
