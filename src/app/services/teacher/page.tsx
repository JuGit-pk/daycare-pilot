import Pricing from "@/components/common/pricing";
import Hero from "@/components/layout/hero";
import { Features, Reviews } from "@/components/pages/home";
import { SERVICE_TEACHER_PAGE_FEATURES } from "@/lib/constants";

const TeacherServicesPage = () => {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Services"
        description="An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula"
        page="Services"
      />
      <Features
        features={SERVICE_TEACHER_PAGE_FEATURES}
        isAdditionalVectors
        className="pt-5"
      />
      <Pricing isInverted />
      <Reviews />
    </main>
  );
};

export default TeacherServicesPage;
