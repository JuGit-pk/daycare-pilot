import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IProps {
  isInverted?: boolean;
  img: string;
  title: string;
  price: string;
  features: string[];
}

const Card = ({ features, img, price, title, isInverted }: IProps) => {
  return (
    <div
      className={cn(
        "group mx-auto flex flex-col shadow-pricing group rounded-[40px] max-w-[416px] w-full justify-center items-center px-11 py-10 divide-y hover:shadow-none border-[3px] border-transparent transition-none text-[#000B33]",
        isInverted
          ? "hover:bg-[#F9FAFB] border-[#F9FAFB] text-[#F9FAFB] hover:text-[#000B33]"
          : "hover:border-[#FF6600]"
      )}
    >
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
        <ul className="space-y-4 flex flex-col relative left-[20%]">
          {features &&
            features.map((feature, i) => (
              <li key={feature + i} className="flex text-left max-w-[200px]">
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 w-5 h-5 shrink-0"
                >
                  <path
                    d="M13.7319 0.295798C13.639 0.20207 13.5284 0.127675 13.4065 0.0769067C13.2846 0.026138 13.1539 0 13.0219 0C12.8899 0 12.7592 0.026138 12.6373 0.0769067C12.5155 0.127675 12.4049 0.20207 12.3119 0.295798L4.86192 7.7558L1.73192 4.6158C1.6354 4.52256 1.52146 4.44925 1.3966 4.40004C1.27175 4.35084 1.13843 4.32671 1.00424 4.32903C0.870064 4.33135 0.737655 4.36008 0.614576 4.41357C0.491498 4.46706 0.380161 4.54428 0.286922 4.6408C0.193684 4.73732 0.12037 4.85126 0.0711659 4.97612C0.0219619 5.10097 -0.00216855 5.2343 0.000152918 5.36848C0.00247438 5.50266 0.0312022 5.63507 0.0846957 5.75814C0.138189 5.88122 0.215401 5.99256 0.311922 6.0858L4.15192 9.9258C4.24489 10.0195 4.35549 10.0939 4.47735 10.1447C4.59921 10.1955 4.72991 10.2216 4.86192 10.2216C4.99393 10.2216 5.12464 10.1955 5.2465 10.1447C5.36836 10.0939 5.47896 10.0195 5.57192 9.9258L13.7319 1.7658C13.8334 1.67216 13.9144 1.5585 13.9698 1.432C14.0252 1.30551 14.0539 1.1689 14.0539 1.0308C14.0539 0.892697 14.0252 0.756091 13.9698 0.629592C13.9144 0.503092 13.8334 0.389441 13.7319 0.295798Z"
                    fill={isInverted ? "white " : "#00BB98"}
                    className={"group-hover:fill-[#00BB98]"}
                  />
                </svg>

                <p>{feature}</p>
              </li>
            ))}
        </ul>
        <Button
          size="lg"
          className={cn(
            "mt-10 group-hover:bg-[#FF6600] group-hover:hover:bg-[#FF8500] group-hover:text-white border-2 border-[#FF6600] text-[#FF6600] font-medium",
            isInverted && "border-[#F9FAFB] text-[#F9FAFB] bg-[#FF6600]"
          )}
          variant="outline"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Card;
