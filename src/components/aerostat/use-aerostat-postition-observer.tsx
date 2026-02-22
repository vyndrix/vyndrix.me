import { useRef } from "react";
import { useResizeObserver } from "usehooks-ts";
import { useAerostatPositionRatting } from "./use-aerostat-position-ratting";

const IMG_MIN_WIDTH = 462;
const IMG_MIN_HEIGHT = 616;

export const useFloatPositionObserver = <T extends HTMLElement | null>() => {
  const ref = useRef<T>(null);
  const { xRat, yRat } = useAerostatPositionRatting();

  //This type is a deadlock
  useResizeObserver({
    ref: ref as any,
    onResize: ({ width, height }) => {
      xRat.set((width || 0) / IMG_MIN_WIDTH);
      yRat.set((height || 0) / IMG_MIN_HEIGHT);
    },
  });

  return ref;
};
