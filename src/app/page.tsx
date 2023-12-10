import Pricing from "@/components/common/pricing";
import Header from "@/components/layout/header";
import {
  CTA,
  DedicatedApps,
  Features,
  Highlight,
  Downlaod,
  Reviews,
  Available,
} from "@/components/pages/home";
import { HOME_PAGE_FEATURES } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header isBear={false}>
        <CTA />
      </Header>
      <Features features={HOME_PAGE_FEATURES} />
      <Highlight />
      <DedicatedApps />
      <Pricing />
      <Downlaod />
      <Reviews />
      <Available />
    </main>
  );
}
