import Image from "next/image";

import Container from "@/components/layout/container";
import { PageFeature } from "@/types";
import { cn } from "@/lib/utils";
interface IProps {
  className?: string;
  features: PageFeature;
}

const Features: React.FC<IProps> = ({ className, features: feat }) => {
  const { description, features, title } = feat;
  return (
    <section
      className={cn(`text-[#000B33] py-36 px-[152px] text-center`, className)}
    >
      <Container className="text-center">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-2xl mt-7 opacity-80">{description}</p>
        <div className="grid grid-cols-4 gap-x-10 gap-y-24 mt-20">
          {features.map(({ description, title, image }) => (
            <div key={description} className="text-left max-w-[269px]">
              <Image
                src={image}
                className="w-[60px] h-[60px] mb-10"
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
