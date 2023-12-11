"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IAppCardProps {
  id: number;
  title: string;
  description: string;
  type: "parent" | "teacher";
}

const Card = ({ title, description, type, id }: IAppCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "text-left py-28 px-9 transition-all duration-75 ease-in-out max-w-[582px] relative mx-auto xl:mx-0",
        isHovered ? "text-[#262626]" : "text-[#FAFAFA]",
        id % 2 === 0 ? "xl:mr-auto" : "xl:ml-auto"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/*  background image of the card using the next js image component for better optimization */}
      {isHovered ? (
        <Image src="/assets/blob.svg" fill alt="bg" className="z-0" />
      ) : (
        <Image src="/assets/blob-outline.svg" fill alt="bg" className="z-0" />
      )}
      {/* icon for each app card */}
      <div className="z-10 relative">
        {type === "parent" ? (
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.8809 26.2559C57.9689 29.1209 55.6292 31.446 52.7582 32.343C48.1142 33.795 43.6979 31.803 41.4899 28.296C41.3159 28.02 41.3279 27.6721 41.4869 27.3871C42.7919 25.0591 43.533 22.371 43.533 19.5C43.533 18.504 43.4459 17.5319 43.2719 16.5809C43.2149 16.2689 43.3108 15.9449 43.5538 15.7379C45.2188 14.3249 47.3731 13.5 49.6831 13.5C56.0311 13.5 60.9809 19.6529 58.8809 26.2559ZM54.33 36.8401H48.39C47.88 36.8401 47.4899 37.2299 47.4899 37.7399C47.4899 37.9799 47.5801 38.2201 47.7601 38.3701C47.7901 38.4001 47.8199 38.4298 47.8499 38.4598C52.0499 42.5098 54 48.3001 54 54.0601C54 55.1701 53.9401 56.2499 53.7601 57.2399C53.7301 57.3719 53.7209 57.4832 53.7209 57.6031C53.7209 58.1131 54.1199 58.5 54.5999 58.5H58.9801C64.4701 58.5 67.5 55.5002 67.5 50.0402C67.5 43.9502 64.05 36.8401 54.33 36.8401ZM27.03 7.5C20.4 7.5 15.03 12.87 15.03 19.5C15.03 26.13 20.4 31.5 27.03 31.5C33.63 31.5 39.03 26.13 39.03 19.5C39.03 12.87 33.63 7.5 27.03 7.5ZM33 37.5H21C8.82 37.5 4.5 46.4101 4.5 54.0601C4.5 60.9001 8.13 64.5 15 64.5H39C45.87 64.5 49.5 60.9001 49.5 54.0601C49.5 46.4101 45.18 37.5 33 37.5Z"
              className={cn(
                "transition-all duration-300 ease-in-out",
                isHovered ? "fill-[#FF6600]" : "fill-white"
              )}
            />
          </svg>
        ) : (
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.0001 43.2572V50.1002C54.0001 52.1822 52.8988 54.1054 51.1378 55.2184C41.0458 61.5934 30.9507 61.5934 20.8587 55.2184C19.0977 54.1084 17.9971 52.1822 17.9971 50.1002V43.2572C17.9971 43.0292 18.24 42.8855 18.441 42.9935L29.4573 49.0203C31.4373 50.1003 33.7171 50.6704 35.9971 50.6704C38.2771 50.6704 40.5569 50.1003 42.5369 49.0203L53.5533 42.9935C53.7573 42.8825 54.0001 43.0292 54.0001 43.2572ZM59.8111 23.7155L40.3983 13.1225C37.6593 11.6285 34.3468 11.6285 31.6048 13.1225L12.192 23.7155C7.93796 26.0345 7.93796 32.1425 12.192 34.4645L31.6048 45.0575C34.3438 46.5515 37.6563 46.5515 40.3983 45.0575L59.8111 34.4645L57.7501 35.5895V48.0004C57.7501 49.2424 58.7581 50.2504 60.0001 50.2504C61.2421 50.2504 62.2501 49.2424 62.2501 48.0004V32.0134C63.7621 29.2174 62.9581 25.4315 59.8111 23.7155Z"
              className={cn(
                "transition-all duration-300 ease-in-out",
                isHovered ? "fill-[#FF6600]" : "fill-white"
              )}
            />
          </svg>
        )}
        <div className="max-w-[492px]">
          <h3 className="text-xl font-bold py-2 lg:py-6">
            <Link href={`/services/${type}`}>{title}</Link>
          </h3>
          <p className="leading-8">{description}</p>
        </div>
        <Link
          href={`/services/${type}`}
          className={cn(
            "mt-4 md:mt-8 border border-transparent text-white",
            buttonVariants({
              variant: isHovered ? "default" : "outline",
              size: "lg",
            }),
            isHovered
              ? "border-transparent bg-[#FF8500] hover:bg-[#FBB821]"
              : "border-white bg-transparent"
          )}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
