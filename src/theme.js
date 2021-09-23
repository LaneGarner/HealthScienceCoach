import { useMediaQuery } from "react-responsive";

export const theme = {
  colors: {
    blue: "dodgerblue",
    red: "red",
    lightGrey: "#fafafa",
  },
  breakpoints: {
    xs: `300px`,
    // s: '375px',
    s: `500px`,
    m: `900px`,
    l: `1024px`,
    xl: `1440px`,
    xxl: `2560px`,
  },
};

export const SmallScreen = ({ children }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: theme.breakpoints.s });
  return isSmallScreen ? children : null;
};
