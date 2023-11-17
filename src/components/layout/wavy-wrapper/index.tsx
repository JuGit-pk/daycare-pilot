import { cn } from "@/lib/utils";
import Image from "next/image";

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const WavyWrapper = ({ children, className }: IProps) => {
  return (
    <section
      className={cn(
        "bg-[#FF6600] text-center mx-auto pt-32 pb-36 text-[#FAFAFA] px-[152px] relative",
        className
      )}
    >
      <Image
        src="/assets/zag-top.svg"
        width={5000}
        height={5000}
        alt="bg"
        className="absolute top-0 inset-x-0"
      />
      {children}
      {/* bottom */}
      <Image
        src="/assets/zag-bottom.svg"
        width={5000}
        height={5000}
        alt="bg"
        className="absolute bottom-0 inset-x-0"
      />
    </section>
  );
};

export default WavyWrapper;
