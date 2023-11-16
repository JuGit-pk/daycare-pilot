import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
  children: React.ReactNode;
}
const Container = ({ children, className }: IProps) => {
  return <div className={cn("px-[88px] mx-auto", className)}>{children}</div>;
};

export default Container;
