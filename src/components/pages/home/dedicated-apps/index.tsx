import Container from "@/components/layout/container";
import Card from "./card";
import WavyWrapper from "@/components/layout/wavy-wrapper";
import { DEDICATED_APPS } from "@/lib/constants";

const DedicatedApps = () => {
  return (
    <WavyWrapper>
      <Container className="2xl:px-[152px]">
        <div>
          <h3 className="text-3xl lg:text-[50px] font-bold">
            Dedicated App for Parents & Teachers
          </h3>
          <p className="mt-6 text-[19px]">
            Paperless As You Can Store Kids Records And Report Online.
          </p>
        </div>
        {/* cards */}
        <div className="grid gap-20 xl:grid-cols-2 pt-10 sm:pt-20">
          {DEDICATED_APPS.map((app, i) => (
            <Card
              id={i + 1}
              key={app.title}
              title={app.title}
              description={app.description}
              type={app.type as "parent" | "teacher"}
            />
          ))}
        </div>
      </Container>
    </WavyWrapper>
  );
};

export default DedicatedApps;
