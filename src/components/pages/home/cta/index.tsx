"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
});

const CTA = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const saveEmail = async (email: string) => {
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      if (res.status === 400) {
        throw new Error("Email already exists");
      }
      if (res.status === 200) {
        console.log("Email saved");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.email) await saveEmail(values.email);
    form.reset();
  }

  return (
    <section className="grid grid-col-1 lg:grid-cols-12 text-background">
      <div className="lg:col-span-6 flex flex-col justify-center items-center lg:block">
        <h1 className="text-[41px] text-center md:text-6xl lg:text-6xl lg:text-left xl:text-7xl font-extrabold max-w-[688px]">
          Supporting Daycare Providers
        </h1>
        <p className="text-lg text-center lg:text-left md:text-xl lg:text-3xl font-medium mt-5 md:mt-7">
          Because Your Passion Dose&apos;nt
          <span className="lg:block"> Clock Out</span>
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center lg:items-start"
          >
            <div className="relative mt-7 md:mt-9 w-full sm:max-w-[500px]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative mt-7 md:mt-9 w-full sm:max-w-[500px] lg:flex-1">
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Email ... "
                          {...field}
                          className="pl-12 text-[#000B33] text-base font-medium py-6 w-full lg:max-w-[442px] placeholder:text-[#25314C5C]"
                        />
                        <Image
                          src="/assets/envelope.svg"
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
                          width={100}
                          height={100}
                          alt="envelope"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              size="lg"
              className={cn(
                "bg-[#25314C] mt-5 py-7 text-base px-10 font-medium"
              )}
            >
              Get Started
            </Button>
          </form>
        </Form>
        <p className="text-xs font-bold mt-2.5 mb-5 2xl:mb-0">
          *Start a 3- day trial no credit card required
        </p>
      </div>
      {/* hero image */}
      <div className="lg:col-span-6 relative z-10">
        <Image
          src="/assets/hero.png"
          className="lg:scale-125 2xl:scale-[135%] relative top-3 lg:top-10 xl:top-40 lg:left-20 2xl:-left-24"
          width={1400}
          height={1400}
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default CTA;
