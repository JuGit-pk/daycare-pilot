import Header from "@/components/layout/header";
import {
  CTA,
  DedicatedApps,
  Features,
  Highlight,
  Pricing,
  Downlaod,
  Reviews,
  Available,
} from "@/components/pages/home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header isBear={false}>
        <CTA />
      </Header>
      <Features />
      <Highlight />
      <DedicatedApps />
      <Pricing />
      <Downlaod />
      <Reviews />
      <Available />
    </main>
  );
}
