import Pricing from "@/components/common/pricing";
import Hero from "@/components/layout/hero";
import { Features, Reviews } from "@/components/pages/home";
import { SERVICES_PAGE_FEATURES } from "@/lib/constants";

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Services"
        description="An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula"
        page="Services"
      />
      <Features
        features={SERVICES_PAGE_FEATURES}
        isAdditionalVectors
        className="pt-5"
      />
      <Pricing isInverted />
      <Reviews />
    </main>
  );
};

export default ServicesPage;
