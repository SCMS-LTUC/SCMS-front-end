import { createTheme } from "@mui/material";

const primaryColor = "#FF7F50"; // e.g., primary color shade 500
const primaryColorLight = "#E65D2E";
const primaryColorDark = "#FFA07A";

const secondaryColor = "#4A9B8F";
const secondaryColorLight = "#3B7A70";
const secondaryColorDark = "#6BB5AA";

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
  },
});
export default theme;
