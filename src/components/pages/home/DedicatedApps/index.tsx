"use client";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface IAppCardProps {
  title: string;
  description: string;
  icon: string;
}
const AppCard = ({ title, description, icon }: IAppCardProps) => {
  const isHoveredRef = useRef(false);
  return (
    <div
      className="text-left border rounded-[120px] py-28 px-9 group transition-all duration-300 ease-in-out hover:bg-white hover:text-foreground"
      onMouseEnter={() => (isHoveredRef.current = true)}
      onMouseLeave={() => (isHoveredRef.current = false)}
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.8809 26.2559C57.9689 29.1209 55.6292 31.446 52.7582 32.343C48.1142 33.795 43.6979 31.803 41.4899 28.296C41.3159 28.02 41.3279 27.6721 41.4869 27.3871C42.7919 25.0591 43.533 22.371 43.533 19.5C43.533 18.504 43.4459 17.5319 43.2719 16.5809C43.2149 16.2689 43.3108 15.9449 43.5538 15.7379C45.2188 14.3249 47.3731 13.5 49.6831 13.5C56.0311 13.5 60.9809 19.6529 58.8809 26.2559ZM54.33 36.8401H48.39C47.88 36.8401 47.4899 37.2299 47.4899 37.7399C47.4899 37.9799 47.5801 38.2201 47.7601 38.3701C47.7901 38.4001 47.8199 38.4298 47.8499 38.4598C52.0499 42.5098 54 48.3001 54 54.0601C54 55.1701 53.9401 56.2499 53.7601 57.2399C53.7301 57.3719 53.7209 57.4832 53.7209 57.6031C53.7209 58.1131 54.1199 58.5 54.5999 58.5H58.9801C64.4701 58.5 67.5 55.5002 67.5 50.0402C67.5 43.9502 64.05 36.8401 54.33 36.8401ZM27.03 7.5C20.4 7.5 15.03 12.87 15.03 19.5C15.03 26.13 20.4 31.5 27.03 31.5C33.63 31.5 39.03 26.13 39.03 19.5C39.03 12.87 33.63 7.5 27.03 7.5ZM33 37.5H21C8.82 37.5 4.5 46.4101 4.5 54.0601C4.5 60.9001 8.13 64.5 15 64.5H39C45.87 64.5 49.5 60.9001 49.5 54.0601C49.5 46.4101 45.18 37.5 33 37.5Z"
          className="group-hover:fill-[#FF6600] fill-white transition-all duration-300 ease-in-out"
        />
      </svg>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4 leading-8">{description}</p>
      <Button
        className={`mt-5 ${
          isHoveredRef.current ? "bg-transparent" : "bg-[#FF8500]"
        }`}
        size="lg"
        variant={isHoveredRef.current ? "outline" : "default"}
      >
        Read More
      </Button>
    </div>
  );
};

const apps = [
  {
    title: "Parent App",
    description:
      "Parents can view their child’s daily activities, photos, videos, milestones and more.",
    icon: "/assets/images/parent-app.png",
  },
  {
    title: "Teacher App",
    description:
      "Teachers can record daily activities, photos, videos, milestones and more.",
    icon: "/assets/images/teacher-app.png",
  },
];

const DedicatedApps = () => {
  return (
    <div className="bg-[#FF6600] text-center mx-auto py-36 text-background px-[152px]">
      <h3 className="text-5xl font-bold">
        Dedicated App for Parents & Teachers
      </h3>
      <p className="mt-6 text-2xl">
        Paperless as you can store kids records and report online.
      </p>
      {/* cards */}
      <div className="grid grid-cols-2 gap-9 pt-20">
        {apps.map((app) => (
          <AppCard
            key={app.title}
            title={app.title}
            description={app.description}
            icon={app.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DedicatedApps;
