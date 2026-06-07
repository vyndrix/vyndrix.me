import { Base } from "./base";

const Section = ({
  children,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section className="flex flex-col justify-center" {...props}>
      {children}
    </section>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-testid="section-content" className="flex flex-col px-2 gap-6">
      {children}
    </div>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <Base.Title size="md" className=" mt-5 mb-7 md:mt-6 md:mb-8">
      {children}
    </Base.Title>
  );
};

export default Object.assign(Section, {
  Title,
  Content,
});
