import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    primary: {
      700: "#996DFF",
      800: "#9333ea",
    },

    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
});