import { useState } from "react";

export function useStableRandom(multiplier = 1): number {
  const [value] = useState(() => Math.random() * multiplier);
  return value;
}
