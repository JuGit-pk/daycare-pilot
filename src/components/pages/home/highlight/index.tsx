import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Highlight = () => {
  return (
    <section className="text-center bg-[#D9D9D933] py-[120px] mx-auto">
      <h3 className="text-5xl font-bold text-[#000B33]">
        Experience Effortless Childcare Management Today
      </h3>
      <p className="mt-7 text-2xl opacity-70">
        Sign up for a 14-day trial. No credit card required. Try it on your
        phone and see the difference.
      </p>
      <Button
        size="lg"
        className={cn("bg-[#25314C] mt-14 py-7 text-base px-10 font-medium")}
      >
        Get Started Now
      </Button>
    </section>
  );
};

export default Highlight;
