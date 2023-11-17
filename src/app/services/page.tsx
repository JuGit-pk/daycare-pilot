import Link from "next/link";
import Header from "@/components/layout/header";

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      <Header className="text-center text-white">
        <h1 className="text-7xl font-bold  pt-20">Our Services</h1>
        <p className="max-w-[400px] inline-block mt-5 mb-10 text-base opacity-80">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo
          congue purus pretium ligula
        </p>
        {/* create breadcrump  of Home > Services */}
        <div className="text-base font-semibold text-white">
          <Link href="/">Home</Link>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-[10px] inline-block"
          >
            <path
              d="M0 9.10606L0.89394 10L5.89394 5L0.89394 0L0 0.893939L4.10606 5L0 9.10606Z"
              fill="white"
            />
          </svg>
          <span>Services</span>
        </div>
      </Header>
    </main>
  );
};

export default ServicesPage;
