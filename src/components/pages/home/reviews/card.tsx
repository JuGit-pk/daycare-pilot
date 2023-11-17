import { cn } from "@/lib/utils";

interface IProps {
  id: number;
  description: string;
  name: string;
  review: string;
  avatar: string;
}
const Card = ({ id, description, name, review, avatar }: IProps) => {
  return (
    <>
      <div
        className={cn(
          "px-6 py-11  rounded-md text-white text-left",
          id % 2 === 0 ? "bg-[#FF6600]" : "bg-[#FBB821]"
        )}
      >
        <p className="text-xl">{review}</p>
      </div>
      <div className="mt-9 gap-x-4 items-center justify-start flex">
        <div className="w-20 h-20 rounded-full bg-[#f5f5f5]"></div>
        <div className="flex flex-col text-left">
          <h4 className="text-[#171717] text-[26px] font-extrabold">{name}</h4>
          <p className="text-base mt-1 text-[#737373]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
