import { useMediaQuery } from "usehooks-ts";

export const useIsDesktopLike = () => {
  const canHover = useMediaQuery("(hover: hover)");
  const canFinePointer = useMediaQuery("(pointer: fine)");
  const hasMinWidth = useMediaQuery("(min-width: 768px)");

  return canHover && canFinePointer && hasMinWidth;
};
