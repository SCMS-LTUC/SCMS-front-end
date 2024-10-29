import fullConfig from "../../tailwind.config";
import { createTheme } from "@mui/material";

const primaryColor = fullConfig.theme.colors.primary; // e.g., primary color shade 500
const primaryColorLight = fullConfig.theme.colors.primary.light;
const primaryColorDark = fullConfig.theme.colors.primary.dark;

const secondaryColor = fullConfig.theme.colors.secondary;
const secondaryColorLight = fullConfig.theme.colors.secondary.light;
const secondaryColorDark = fullConfig.theme.colors.secondary.dark;

const textPrimary = fullConfig.theme.colors.neutral.textPrimary;
const textSecondary = fullConfig.theme.colors.neutral.textSecondary;
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor, // Replace with your desired primary color,
      light: primaryColorLight, // Replace with your desired primary color light shade
      dark: primaryColorDark,
    },
    secondary: {
      main: secondaryColor, // Replace with your desired secondary color
      light: secondaryColorLight, // Replace with your desired secondary color light shade
      dark: secondaryColorDark,
    },
    text: {
      main: textPrimary,
      secondary: textSecondary,
      disabled: textSecondary,
    },
  },
});
export default theme;
