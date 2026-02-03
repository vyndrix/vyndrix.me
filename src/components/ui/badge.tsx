import * as React from "react";
import { Icon as AppIcon } from "./icon";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <span
      className={cn(
        `flex
        transition-color
        border-transparent
        bg-secondary
        text-secondary-foreground
        duration-700
        ease-in-out
        motion-reduce:duration-0
        items-center
        justify-center
        rounded-full
        border
        px-2
        py-1
        text-xs
        font-medium
        [&>svg]:size-3.5
        [&>svg]:pointer-events-none`,
        className
      )}
    >
      {children}
    </span>
  );
};

const Group = ({ children, className }: Props) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>{children}</div>
  );
};

const Icon = ({
  className,
  ...props
}: React.ComponentProps<typeof AppIcon>) => {
  return (
    <AppIcon
      {...props}
      className={cn(
        "transition-colors delay-700 mr-2 w-6 h-6 text-slate-900 dark:text-slate-100",
        className
      )}
    />
  );
};

const Text = ({ children, className }: Props) => {
  return (
    <span
      className={cn(
        "transition-colors delay-700 text-slate-900 dark:text-slate-100",
        className
      )}
    >
      {children}
    </span>
  );
};

export const Badge = Object.assign(Wrapper, {
  Group,
  Icon,
  Text,
});
