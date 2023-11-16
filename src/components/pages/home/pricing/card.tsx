import Image from "next/image";

import { Button } from "@/components/ui/button";

interface IProps {
  img: string;
  title: string;
  price: string;
  features: string[];
}

const Card = ({ features, img, price, title }: IProps) => {
  return (
    <div className="flex flex-col shadow-pricing group rounded-[40px] max-w-[416px] w-full justify-center items-center px-11 py-10 divide-y  hover:shadow-none border-[3px] border-transparent hover:border-[#FF6600] text-[#000B33] transition-none">
      <div className="space-y-8 w-full mb-5">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <Image
          className="h-20 w-auto mx-auto"
          src={img}
          width={100}
          height={100}
          alt="pricing"
        />
        <div className="flex flex-col">
          <p className="text-7xl font-semibold">{price}</p>
          <p className="mt-3 opacity-80">Per Month</p>
        </div>
      </div>
      {/* features */}
      <div className="w-full pt-8">
        <ul className="space-y-4">
          {features &&
            features.map((feature, i) => (
              <li key={feature + i} className="flex items-center ml-[25%]">
                <Image
                  src="/assets/check.svg"
                  className="mr-3 w-5 h-5"
                  width={100}
                  height={100}
                  alt="check"
                />
                <p>{feature}</p>
              </li>
            ))}
        </ul>
        <Button
          size="lg"
          className="mt-10 group-hover:bg-[#FF6600] group-hover:hover:bg-[#FF8500] group-hover:text-white border-2 border-[#FF6600] text-[#FF6600] font-medium"
          variant="outline"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Card;
