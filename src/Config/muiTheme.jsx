import { createTheme } from "@mui/material";

const primaryColor = "#FF7F50"; // e.g., primary color shade 500
const primaryColorLight = "#E65D2E";
const primaryColorDark = "#FFA07A";

const secondaryColor = "#4A9B8F";
const secondaryColorLight = "#6BB5AA";
const secondaryColorDark = "#3B7A70";

const textPrimary = "#2D3748";
const textSecondary = "#718096";

const theme = createTheme({
  components: {
    MuiTab: {
      style: {
        // color: primaryColor,
        // "&.Mui-selected": {
        //   color: secondaryColor,
        // },
      },
    },
  },
  palette: {
    primary: {
      main: primaryColor,
      light: primaryColorLight,
      dark: primaryColorDark,
    },
    secondary: {
      main: secondaryColor,
      light: secondaryColorLight,
      dark: secondaryColorDark,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    error: {
      main: "#F56565",
    },
    toggleButton: {
      main: "#E65D2E",
    },
    textMedium: {
      main: "#4F5C6F",
    },
    success: {
      main: "#22c55e",
    },
    info: {
      main: "#3b82f6",
    },
  },
});
export default theme;
