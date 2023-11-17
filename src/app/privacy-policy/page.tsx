import Image from "next/image";

import Container from "@/components/layout/container";
import Hero from "@/components/layout/hero";
import { PRIVACY_POLICY } from "@/lib/constants";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Privacy Policy"
        description="An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula"
        page="Privacy Policy"
      />
      <Container className="space-y-10 px-40 text-[26px] pb-20 opacity-80 relative">
        <Image
          className="absolute bottom-[10%] left-0"
          src="/assets/horizon.png"
          width={90}
          height={90}
          alt="horizon image"
        />
        {PRIVACY_POLICY.map((pp, i) => (
          <p className="text-[#000B33]" key={i}>
            {pp}
          </p>
        ))}
      </Container>
    </main>
  );
};

export default PrivacyPolicyPage;
