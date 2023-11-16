import Image from "next/image";
import Card from "./card";

const APPS = [
  {
    title: "Parent App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "parent",
  },
  {
    title: "Teacher App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "teacher",
  },
];
const DedicatedApps = () => {
  return (
    <section className="bg-[#FF6600] text-center mx-auto pt-32 pb-36 text-background px-[152px] relative">
      {/* pattern */}
      {/* top */}
      <Image
        src="/assets/zag-top.svg"
        width={5000}
        height={5000}
        alt="bg"
        className="absolute top-0 left-0"
      />
      {/* bottom */}
      <Image
        src="/assets/zag-bottom.svg"
        width={5000}
        height={5000}
        alt="bg"
        className="absolute bottom-0 left-0"
      />
      <div className="text-[#FAFAFA]">
        <h3 className="text-[50px] font-bold">
          Dedicated App for Parents & Teachers
        </h3>
        <p className="mt-6 text-[19px]">
          Paperless As You Can Store Kids Records And Report Online.
        </p>
      </div>
      {/* cards */}
      <div className="flex justify-center space-x-9 items-center pt-20">
        {APPS.map((app) => (
          <Card
            key={app.title}
            title={app.title}
            description={app.description}
            type={app.type as "parent" | "teacher"}
          />
        ))}
      </div>
    </section>
  );
};

export default DedicatedApps;
