import { useMouseOverAnimation } from "@/hooks/use-mouse-over-animation";
import { motion } from "motion/react";
import { Base } from "./base";
import { cn } from "@/lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scope, style } = useMouseOverAnimation();

  return (
    <motion.article
      ref={scope}
      style={style}
      className={cn(
        `
        flex 
        flex-col  
        gap-1 
        p-4
        bg-background 
        border 
        rounded-xl 
        transition-colors 
        ease-in-out 
        hover:bg-card-background 
        hover:border-foreground/3 
        hover:duration-250 
        duration-700 
        motion-reduce:duration-0 
      `,
        className
      )}
    >
      {children}
    </motion.article>
  );
};

const Title = ({
  children,
  size = "lg",
}: {
  children: React.ReactNode;
  size?: "lg" | "md";
}) => {
  const bSize = size === "lg" ? "sm" : "xs";

  return (
    <Base.Title size={bSize} className="pointer-events-none">
      {children}
    </Base.Title>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="flex gap-2 items-center pointer-events-none">
      {children}
    </header>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="flex flex-1 pt-0.5 pb-4 text-sm text-justify text-muted-foreground pointer-events-none">
      {children}
    </p>
  );
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="flex flex-col self-start md:self-end gap-2 pointer-events-none">
      {children}
    </footer>
  );
};

export const Card = Object.assign(Wrapper, {
  Title,
  Header,
  Footer,
  Content,
});
