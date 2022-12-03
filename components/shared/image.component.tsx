import NextImage, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface Props extends ImageProps {
  fallbackSrc: string;
}

export const Image = ({ fallbackSrc, ...props }: Props) => {
  const [imgSrc, setImgSrc] = useState(props.src);

  useEffect(() => {
    setImgSrc(props.src);
  }, [props.src]);

  return (
    <NextImage
      {...props}
      alt={props.alt}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          setImgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

Image.defaultProps = {
  fallbackSrc:
    "https://www.toyzone.co.za/wp-content/uploads/woocommerce-placeholder-600x600.png",
};
