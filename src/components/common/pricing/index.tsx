import Container from "@/components/layout/container";
import WavyWrapper from "@/components/layout/wavy-wrapper";
import { PRICING_CARDS } from "@/lib/constants";
import Card from "./card";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  isInverted?: boolean;
}
const Pricing = ({ className, isInverted = false }: IProps) => {
  const WrapperComponent = isInverted ? WavyWrapper : "section";
  return (
    <WrapperComponent
      className={cn(
        `text-center`,
        isInverted ? "text-[#F9FAFB]" : "text-[#000B33]",
        className
      )}
    >
      <Container
        className={cn(`space-y-5`, !isInverted && "pt-24 pb-72 lg:pt-48")}
      >
        <p
          className={cn(
            " text-xl font-semibold",
            isInverted ? "text-[#F9FAFB]" : "text-[#00BB98]"
          )}
        >
          Pricing Plan
        </p>
        <h3 className="font-bold text-[28px] lg:text-5xl">
          We have exclusive plan in
          <span className="block">our pricing</span>
        </h3>
        <p className="max-w-[353px] mx-auto opacity-80">
          Vero homero perfecto mei ut, sonet aperiam an nec.mpus elit a laoreet
          volut pat.
        </p>
        <div className="grid gap-6 xl:grid-cols-3 w-full pt-6 lg:pt-20 max-w-7xl mx-auto">
          {PRICING_CARDS.map((card, i) => (
            <Card key={card.title + i} isInverted={isInverted} {...card} />
          ))}
        </div>
      </Container>
    </WrapperComponent>
  );
};

export default Pricing;
