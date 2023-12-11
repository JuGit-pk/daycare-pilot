import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Highlight = () => {
  return (
    <section className="bg-[#D9D9D933]">
      <Container className="text-center py-20 lg:pt-[120px] lg:pb-44">
        <h3 className="hidden xl:block text-5xl font-bold text-[#000B33]">
          Experience Effortless Childcare Management Today
        </h3>
        {/* for small screens */}
        <h3 className="text-[28px] md:text-4xl xl:hidden font-bold text-[#000B33]">
          <span className="block">Experience Effortless</span>
          Childcare Management Today
        </h3>
        <p className="max-w-md mx-auto lg:max-w-none mt-7 text-xl 2xl:text-2xl opacity-70">
          Sign up for a 30-day trial. No credit card required. Witness the
          transformative difference firsthand.
        </p>
        <Button
          size="lg"
          className={cn("bg-[#25314C] mt-14 py-7 text-base px-10 font-medium")}
        >
          Get Started Now
        </Button>
      </Container>
    </section>
  );
};

export default Highlight;
