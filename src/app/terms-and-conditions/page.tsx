import Hero from "@/components/layout/hero";
import QuickNavigation from "@/components/common/quick-navigation";
import { TERMS_AND_POLICY_LIST } from "@/lib/constants";

const TermAndConditionsPages = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Terms and Conditions"
        description="An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula"
        page="Terms and Conditions"
      />
      <QuickNavigation tabs={TERMS_AND_POLICY_LIST} />
    </main>
  );
};

export default TermAndConditionsPages;
