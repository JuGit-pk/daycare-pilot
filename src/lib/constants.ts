import { features } from "process";

export const NAVBAR_ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
];
export const FOOTER_ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const FOOTER_SOCIAL_ITEMS = [
  {
    name: "X",
    img: "/assets/x.svg",
    link: "",
  },
  {
    name: "linkedin",
    img: "/assets/linkedin.svg",
    link: "",
  },
  {
    name: "facebook",
    img: "/assets/fb.svg",
    link: "",
  },
];

export const PRICING_CARDS = [
  {
    title: "Basic Plan (Free)",
    price: "$5",
    img: "/assets/starter-plan.svg",
    features: [
      "Upto 3 kids",
      "Daily Reports",
      "Announcements",
      "Real time Chat",
      "Limited customer Support",
    ],
  },
  {
    title: "Premium Plan",
    price: "$45",
    img: "/assets/basic-plan.svg",
    features: [
      "Upto 10 Kids",
      "Daily Reports with detailed insights",
      "Real-time messaging",
      "Calendar management",
      "Daily Feed",
      "Priority customer support",
    ],
  },
  {
    title: "Enterprise Plan",
    price: "$120",
    img: "/assets/premium-plan.svg",
    features: [
      "All Basic Plan features",
      "Multiple Center Support",
      "Compliance reports",
      "Capacity Planning",
      "Custom features on request",
    ],
  },
];
// FEATURES
export const HOME_PAGE_FEATURES = {
  title: "Simplify Childcare Management on Your Phone",
  description:
    "Running a daycare? Our software is designed with you in mind. Here's how we make it easy.",
  features: [
    {
      image: "/assets/check-in.png",
      title: "Intuitive Check-In/Check-Out",
      description:
        "Simplify child attendance management with our intuitive check-in/check-out system. Designed for busy parents and caregivers.",
    },
    {
      image: "/assets/seo-report.png",
      title: "Daily Reports, No Hassle",
      description:
        "Effortlessly track and record children's activities, meals, behaviour, and more throughout the day. Share the reports with parents with one click and keep them informed and engaged in their child's daily experiences.",
    },
    {
      image: "/assets/schedule.png",
      title: "Calendar Management",
      description:
        "Organize your daycare's schedule with ease. Our calendar management tool allows you to plan activities, track important events, and manage holiday closures",
    },
    {
      image: "/assets/comments.png",
      title: "Real-Time Messaging",
      description:
        "Stay connected with real-time messaging. Our secure platform enables direct communication between parents and caregivers. Whether it's a quick update, a question, or sharing a special moment, our messaging feature ensures you're always just a message away.",
    },
    {
      image: "/assets/share.png",
      title: "Share Moments Seamlessly",
      description:
        "Capture and share precious moments instantly. Our app makes it easy to snap photos and videos of children's activities and milestones, sharing them securely with parents. Bring joy to parents by giving them a glimpse into their child's day-to-day adventures.",
    },
    {
      image: "/assets/loudspeaker.png",
      title: "Announcements Made Simple",
      description:
        "Efficiently broadcast important updates or emergency alerts directly from your mobile device or even receive acknowledgements of communication from the intuitive app. Simplify your communication process, ensuring every vital message is delivered promptly and reliably.",
    },
    {
      image: "/assets/delivery.png",
      title: "Streamlined Task Management",
      description:
        "CEasily set up and monitor tasks, ensuring you stay organized and in control of your daycare activities. Our intuitive system helps keep your daily operations running smoothly.",
    },
    {
      image: "/assets/bill.png",
      title: "Hassle-Free Receipts",
      description:
        "Send payment receipts directly from your phone. No fuss, just a few taps.",
    },
  ],
};
export const SERVICES_PARENT_PAGE_FEATURES = {
  title: "Parent App Features",
  description:
    "Running a daycare? Our software is designed with you in mind. Here's how we make it easy.",
  features: [
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
  ],
};
export const SERVICE_TEACHER_PAGE_FEATURES = {
  title: "Simplify Childcare Management on Your Phone",
  description:
    "Running a daycare? Our software is designed with you in mind. Here's how we make it easy.",
  features: [
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
      image: "/assets/share.png",
      title: "Share Moments Seamlessly",
      description:
        "Post images and videos of activities. Parents get notified when their child is tagged - all from your trusty phone.",
    },
    {
      image: "/assets/loudspeaker.png",
      title: "Critical Announcements Made Simple",
      description:
        "Send announcements with ease - regular updates, acknowledgments, or emergencies. All from the device in your pocket.",
    },
    {
      image: "/assets/delivery.png",
      title: "Task Tracking, Effortless",
      description:
        "Create and track tasks for yourself, keeping you organized and on top of daycare operations.",
    },
    {
      image: "/assets/bill.png",
      title: "Hassle-Free Receipts",
      description:
        "Send payment receipts directly from your phone. No fuss, just a few taps.",
    },
  ],
};

export const CUSTOMERS_REVIEWS = [
  {
    avatar: "",
    name: "Sarah - Ottawa",
    description: "Dad of four girls",
    review:
      "DaycarePilot has been a game-changer for my daycare. It's made attendance tracking and communication with parents a breeze. Highly recommended!",
  },
  {
    avatar: "",
    name: "Pam - Winnipeg",
    description: "Mom of 2 boys",
    review:
      "I can't imagine running my daycare without this software now. The daily reports and messaging features have improved parent-teacher communication immensely.",
  },
  {
    avatar: "",
    name: "Jane",
    description: "Under the sun Daycare",
    review:
      "The calendar feature is a lifesaver! It helps me schedule vacations and events effortlessly. Parents love it too.",
  },
  {
    avatar: "",
    name: "Fauzia",
    description: "Dad of four girls",
    review:
      "Real-time messaging has made my job so much easier. It's convenient, and I can keep parents updated instantly.",
  },
  {
    avatar: "",
    name: "Rita",
    description: "Mom of 2 boys",
    review:
      "I've tried other childcare software, but this one stands out. The announcements feature, especially during emergencies, is invaluable. It brings peace of mind.",
  },
  {
    avatar: "",
    name: "Abiola",
    description: "Mom of 2 boys",
    review:
      "The task tracking feature helps me stay organized and ensures I never miss important to-dos. It's efficient and user-friendly.",
  },
];

export const PRIVACY_POLICY = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];

export const TERMS_AND_POLICY_LIST = [
  {
    name: "Terms of Use",
    slug: "terms-of-use",
    content: [
      {
        title: "Terms of Use",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
      {
        title: "Terms of Use",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
      {
        title: "Terms of Use",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
    ],
  },
  {
    name: "Privacy Policy",
    slug: "privacy-policy",
    content: [
      {
        title: "Privacy Policy",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
      {
        title: "Privacy Policy",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
      {
        title: "Privacy Policy",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
    ],
  },
  {
    name: "Cookie Policy",
    slug: "cookie-policy",
    content: [
      {
        title: "Cookie Policy",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
      {
        title: "Cookie Policy",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
      {
        title: "Cookie Policy",
        description:
          "An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula",
      },
    ],
  },
];

export const FAQ_LIST = [
  {
    name: "Getting Started",
    slug: "getting-started",
    content: [
      {
        title: "Introduction",
        description:
          "Learn about the basics of our application and how to get started.",
      },
      {
        title: "Installation",
        description:
          "Follow these steps to install our application on your device.",
      },
      {
        title: "System Requirements",
        description:
          "Check the system requirements before installing the application.",
      },
    ],
  },
  {
    name: "Features",
    slug: "features",
    content: [
      {
        title: "Feature 1",
        description: "Explore the functionality of Feature 1 in detail.",
      },
      {
        title: "Feature 2",
        description: "Discover what Feature 2 has to offer.",
      },
      {
        title: "Feature 3",
        description: "Learn how to make the most of Feature 3.",
      },
    ],
  },
  {
    name: "Troubleshooting",
    slug: "troubleshooting",
    content: [
      {
        title: "Common Issues",
        description: "Find solutions to common problems encountered by users.",
      },
      {
        title: "Error Codes",
        description:
          "Understand the meaning of error codes and how to fix them.",
      },
    ],
  },
];

export const DEDICATED_APPS = [
  {
    title: "Parent App",
    description:
      "Engage in your child's day with real-time updates, easy communication, and essential insights, all at your fingertips. Embrace a stress-free approach to managing your child's daycare experience, where efficiency meets peace of mind.",
    type: "parent",
  },
  {
    title: "Teacher App",
    description:
      "Crafted to support providers, this app brings efficiency to your fingertips. Manage day to day activities and communicate updates with ease. Experience the convenience of streamlined task management and enhanced parent-teacher engagement, all through one intuitive platform. Transform your teaching approach with a tool that blends functionality with simplicity. Transform your teaching approach with a tool that blends functionality with simplicity.",
    type: "teacher",
  },
];
