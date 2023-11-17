import Hero from "@/components/layout/hero";
import QuickNavigation from "@/components/misc/quick-navigation";
import { Available } from "@/components/pages/home";
import { FAQ_LIST } from "@/lib/constants";

const FAQPage = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Frequently Asked Questions"
        description="An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula"
        page="FAQ"
      />
      <QuickNavigation tabs={FAQ_LIST} />
      <Available />
    </main>
  );
};

export default FAQPage;
