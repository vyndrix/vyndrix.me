import { MotionStyle, useAnimate } from "motion/react";
import { useEventListener } from "usehooks-ts";

const FIXED_PERSPECTIVE_STYLE: MotionStyle = {
  transformPerspective: "5cm",
};

export function useMouseOverAnimation() {
  const [scope, animate] = useAnimate<HTMLElement>();

  useEventListener(
    "pointermove",
    (event: PointerEvent) => {
      const { width, height } = scope.current!.getBoundingClientRect();

      const xRatting = event.offsetY / height;
      const yRatting = event.offsetX / width;

      animate(
        scope.current,
        {
          rotateX: `${10 * xRatting - 5}deg`,
          rotateY: `${(10 * yRatting - 5) * -1}deg`,
          rotateZ: `${2 * yRatting - 1}deg`,
          scale: 1.02,
          zIndex: 20,
        },
        {
          duration: 0.15,
        },
      );
    },
    scope,
  );

  useEventListener(
    "pointerleave",
    () => {
      animate(
        scope.current,
        {
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          zIndex: 10,
        },
        {
          ease: [0.4, 0, 0.2, 1],
          duration: 0.375,
        },
      );
    },
    scope,
  );

  return {
    scope,
    style: FIXED_PERSPECTIVE_STYLE,
  };
}
