import Header from "@/components/layout/header";
import {
  Hero,
  DedicatedApps,
  Features,
  Highlight,
  Pricing,
} from "@/components/pages/home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header isBear={false}>
        <Hero />
      </Header>
      <Features className="px-[152px] mx-auto text-center" />
      <Highlight />
      <DedicatedApps />
      <Pricing className="text-center py-48 text-[#000B33]" />
    </main>
  );
}
