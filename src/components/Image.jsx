import {  useRef} from "react";
import { useLoadImage } from "../hooks/useLoadImage";

export const Image = ({src, alt, style }) => {
  const imgRef = useRef(null);
  const [loading] = useLoadImage(imgRef)
  return (
    <>
        {loading && <div style={{...style, backgroundColor: "#ddd"}}></div>}
        <img 
          src={src}
          alt={alt}
          style={{...style, opacity: loading ? 0 : 1, position: loading ? 'absolute' : 'relative'}}
          ref={imgRef}
        />
    </>
  );
};
