import Container from "@/components/layout/container";
import { PRICING_CARDS } from "@/lib/constants";
import Card from "./card";

interface IProps {
  className?: string;
}
const Pricings = ({ className }: IProps) => {
  return (
    <section className={`${className} text-center py-48 text-[#000B33]`}>
      <Container className="space-y-5">
        <p className="text-[#00BB98] text-xl font-semibold">Pricing Plan</p>
        <h3 className="font-bold text-5xl">
          We have exclusive plan in
          <span className="block">our pricing</span>
        </h3>
        <p className="max-w-[353px] mx-auto opacity-80">
          Vero homero perfecto mei ut, sonet aperiam an nec.mpus elit a laoreet
          volut pat.
        </p>
        <div className="flex space-x-6 justify-center pt-20">
          {PRICING_CARDS.map((card, i) => (
            <Card key={card.title + i} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricings;
