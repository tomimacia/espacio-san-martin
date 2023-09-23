import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat/400.css";
import "@fontsource/raleway/400.css";
const fonts = {
  heading: `'montserrat','raleway'`,
  body: `'montserrat','raleway'`,
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const colors = {
  brandLight: "#6233BF",
  brandDark: "#381566",
};
const breakpoints = {
  xs: "24em",
  sm: "40em",
  md: "52em",
  lg: "62em",
  xl: "64em",
};
const fontWeights = {
  normal: 300,
  medium: 600,
  bold: 700,
};
const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "64px",
};
const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints,
  fontWeights,
  fontSizes,
  config,
  colors,
};

export const customTheme = extendTheme(overrides);
