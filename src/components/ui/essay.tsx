import { Base } from "./base";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <article
      className={`flex 
        flex-col
        justify-between
        gap-2
        duration-700
        ease-in-out
        motion-reduce:duration-0`}
    >
      {children}
    </article>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="flex flex-col items-start pb-0.5">{children}</header>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <Base.Title size="sm">{children}</Base.Title>;
};

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return <h5 className="text-xs text-muted-foreground/70">{children}</h5>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-md text-muted-foreground">{children}</p>;
};

export const Essay = Object.assign(Wrapper, {
  Header,
  Title,
  Subtitle,
  Content,
});
