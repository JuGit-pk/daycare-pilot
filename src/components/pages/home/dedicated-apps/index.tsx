import Card from "./card";
import WavyWrapper from "@/components/layout/wavy-wrapper";
import { DEDICATED_APPS } from "@/lib/constants";

const DedicatedApps = () => {
  return (
    <WavyWrapper>
      <div>
        <h3 className="text-[50px] font-bold">
          Dedicated App for Parents & Teachers
        </h3>
        <p className="mt-6 text-[19px]">
          Paperless As You Can Store Kids Records And Report Online.
        </p>
      </div>
      {/* cards */}
      <div className="flex justify-center space-x-9 items-center pt-20">
        {DEDICATED_APPS.map((app) => (
          <Card
            key={app.title}
            title={app.title}
            description={app.description}
            type={app.type as "parent" | "teacher"}
          />
        ))}
      </div>
    </WavyWrapper>
  );
};

export default DedicatedApps;
