import { useMediaQuery } from "react-responsive";

export const WIDTH = '776'

export const useIsMobile = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${WIDTH}px)` })

  return isMobile;
};
