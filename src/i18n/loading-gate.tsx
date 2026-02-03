import { Header } from "@/components/header";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface Props {
  children: React.ReactNode;
  loading: boolean;
}

export function LoadingGate({ children, loading }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      {!loading ? (
        <motion.div
          animate={{
            opacity: [0, 1],
            scale: [0.98, 1],
            filter: ["blur(8px)", "blur(0px)"],
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.375,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Header />
          <main className="flex justify-center">{children}</main>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
