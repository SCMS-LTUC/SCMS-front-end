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
      main: secondaryColorDark,
      light: secondaryColorLight,
      dark: secondaryColor,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
  },
});
export default theme;
