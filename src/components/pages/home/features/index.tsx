import Image from "next/image";
import React from "react";
interface IProps {
  className?: string;
}
const featuresList = [
  {
    image: "/assets/check-in.png",
    title: "Intuitive Check-In/Check-Out",
    description:
      "Effortlessly manage child attendance right from your phone. Parents request check-in/check-out, and you confirm with a tap.",
  },
  {
    image: "/assets/seo-report.png",
    title: "Daily Reports, No Hassle",
    description:
      "Record activities, meals, behavior, and more, all from your mobile device. Parents receive reports at day's end.",
  },
  {
    image: "/assets/schedule.png",
    title: "Easy Calendar Management",
    description:
      "Schedule vacations, events, and more, without the tech headache. Parents can view and mark their child's days.",
  },
  {
    image: "/assets/comments.png",
    title: "Real-Time Messaging",
    description:
      "Anytime Stay connected with parents through real-time messaging. Group chats, direct messages, and notifications - all at your fingertips.",
  },
  {
    image: "/assets/comments.png",
    title: "Intuitive Check-In/Check-Out",
    description:
      "Effortlessly manage child attendance right from your phone. Parents request check-in/check-out, and you confirm with a tap.",
  },
  {
    image: "/assets/comments.png",
    title: "Intuitive Check-In/Check-Out",
    description:
      "Effortlessly manage child attendance right from your phone. Parents request check-in/check-out, and you confirm with a tap.",
  },
  {
    image: "/assets/comments.png",
    title: "Intuitive Check-In/Check-Out",
    description:
      "Effortlessly manage child attendance right from your phone. Parents request check-in/check-out, and you confirm with a tap.",
  },
  {
    image: "/assets/comments.png",
    title: "Intuitive Check-In/Check-Out",
    description:
      "Effortlessly manage child attendance right from your phone. Parents request check-in/check-out, and you confirm with a tap.",
  },
];
const Features: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`text-[#000B33] ${className} py-36`}>
      <h2 className="text-5xl ">Simplify Childcare Management on Your Phone</h2>
      <p className="text-2xl mt-7">
        Running a daycare? Our software is designed with you in mind. Heres how
        we make it easy.
      </p>
      <div className="grid grid-cols-4 gap-x-10 gap-y-24 mt-20">
        {featuresList.map(({ description, title, image }) => (
          <div key={description} className="text-left">
            <Image
              src={image}
              className="w-[60px] h-[60px] mb-10"
              width={120}
              height={120}
              alt="feature image"
            />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-4 leading-8">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
