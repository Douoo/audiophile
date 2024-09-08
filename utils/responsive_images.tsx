import { getImageProps } from "next/image";

interface ImageProps {
  imgSrc: string;
  alt: string;
  baseWidth: number;
  baseHeight: number;
}
export const getResponsiveImages = (imageProps: ImageProps) => {
  let tabletImgSrc = imageProps.imgSrc.replace("desktop", "tablet");
  let mobileImgSrc = imageProps.imgSrc.replace("desktop", "mobile");
  //common properties
  const common = {
    alt: imageProps.alt,
    width: imageProps.baseWidth,
    height: imageProps.baseHeight,
  };
  const {
    props: { srcSet: desktopImg },
  } = getImageProps({
    ...common,
    src: imageProps.imgSrc,
  });
  const {
    props: { srcSet: mobileImg },
  } = getImageProps({
    ...common,
    src: mobileImgSrc,
  });
  const {
    props: { srcSet: tabletImg },
  } = getImageProps({
    ...common,
    src: tabletImgSrc,
  });
  return { desktopImg, mobileImg, tabletImg };
};
