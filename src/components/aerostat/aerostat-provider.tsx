import { MotionValue, useMotionValue } from "motion/react";
import { createContext, useContext } from "react";

interface State {
  xRat: MotionValue<number>;
  yRat: MotionValue<number>;
}

const Context = createContext<State>({
  xRat: new MotionValue(1),
  yRat: new MotionValue(1),
});

function Provider({ children }: { children: React.ReactNode }) {
  const xRat = useMotionValue(1);
  const yRat = useMotionValue(1);

  return <Context.Provider value={{ xRat, yRat }}>{children}</Context.Provider>;
}

export default Object.assign(Provider, {
  Context,
});
