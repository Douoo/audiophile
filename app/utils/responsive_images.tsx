import { getImageProps } from "next/image";

interface CommonProps {
  alt: string;
  width: number;
  height: number;
  className: string;
}
interface ResponsiveImage {
  srcSet: string;
}
export function getResponsiveImageProps<T extends CommonProps>(
  common: T,
  src: string
): ResponsiveImage {
  //The `common` property refers to shared properties
  const {
    props: { srcSet: image },
  } = getImageProps({
    ...common,
    src: src,
  });
  return { srcSet: image! };
}
