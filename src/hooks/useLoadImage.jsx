import { useEffect, useState } from "react";

export const useLoadImage = (ref) => {
  const [loading, setLoading] = useState(true)

  const onImageLoaded = () => setLoading(false)

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('load', onImageLoaded);
      return () => ref.current?.removeEventListener('load', onImageLoaded);
    }
  },[ref.current?.complete])

  return loading;
};
