import Image from "next/image";

import Container from "@/components/layout/container";
import { FEATURES } from "@/lib/constants";
interface IProps {
  className?: string;
}

const Features: React.FC<IProps> = ({ className }) => {
  return (
    <section
      className={`text-[#000B33] ${className} py-36 px-[152px] text-center`}
    >
      <Container className="text-center">
        <h2 className="text-5xl font-bold">
          Simplify Childcare Management on Your Phone
        </h2>
        <p className="text-2xl mt-7 opacity-70">
          Running a daycare? Our software is designed with you in mind. Heres
          how we make it easy.
        </p>
        <div className="grid grid-cols-4 gap-x-10 gap-y-24 mt-20">
          {FEATURES.map(({ description, title, image }) => (
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
