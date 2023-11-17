import Header from "@/components/layout/header";
import {
  Hero,
  DedicatedApps,
  Features,
  Highlight,
  Pricing,
} from "@/components/pages/home";
import Available from "@/components/pages/home/available";
import Downlaod from "@/components/pages/home/download";
import Reviews from "@/components/pages/home/reviews";

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
      <Downlaod />
      <Reviews />
      <Available />
    </main>
  );
}
