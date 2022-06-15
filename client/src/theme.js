import { createTheme } from "@mui/material/styles";

const theme = createTheme({
// PALLETTE
  palette: {
    primary: {
      main: "#0E2020"
    },
    secondary: {
      main: "#920CEC"
    },
    common: {
      white: "#FEFFFF",
      black: "#000400"
    },
    warning: {
      main: "#E54B2E"
    },
    success: {
      main: "#31DF8F"
    }

  },  

  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
// COMPONENTS
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          padding: "5px 15px",
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "1rem"
        },
      },
    },
    MuiTextfield: {
      defaultProps: {
        shrink: true,
        margin: "1rem"
      }
      }
    },
  },
);

export default theme;
