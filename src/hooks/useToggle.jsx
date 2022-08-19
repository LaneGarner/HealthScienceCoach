import { useState } from "react";

export const useToggle = (initial) => {
  const [isToggled, setIsToggled] = useState(initial || false)

  const toggle = () => setIsToggled(!isToggled);
  return {isToggled, toggle}
} 