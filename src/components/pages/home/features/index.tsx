import Image from "next/image";

import Container from "@/components/layout/container";
import { PageFeature } from "@/types";
import { cn } from "@/lib/utils";
interface IProps {
  className?: string;
  features: PageFeature;
  isAdditionalVectors?: boolean;
}

const Features: React.FC<IProps> = ({
  className,
  features: feat,
  isAdditionalVectors,
}) => {
  const { description, features, title } = feat;
  return (
    <section className={cn(`text-[#000B33]  text-center relative`, className)}>
      {isAdditionalVectors && (
        <Image
          src="/assets/dots.svg"
          width={70}
          height={180}
          alt="bg"
          className="absolute top-12 right-3"
        />
      )}
      <Container className="text-center py-20 lg:py-36 lg:px-[152px]">
        <h2 className="text-2xl lg:text-5xl font-bold">{title}</h2>
        <p className="max-w-lg mx-auto lg:max-w-none text-xl lg:text-2xl mt-7 opacity-80">
          {description}
        </p>
        <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-24 mt-20">
          {features.map(({ description, title, image }) => (
            <div
              key={description}
              className="text-center lg:text-left mx-auto 2xl:m-0 max-w-[269px]"
            >
              <Image
                src={image}
                className="w-[60px] h-[60px] mx-auto lg:mx-0 mb-10"
                width={1000}
                height={1000}
                alt="feature image"
              />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 opacity-70">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
