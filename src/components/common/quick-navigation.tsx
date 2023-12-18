import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../layout/container";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Tab } from "@/types";

interface IProps {
  tabs: Tab[];
}

const QuickNavigation = ({ tabs }: IProps) => {
  return (
    <Tabs defaultValue={tabs[0].slug}>
      <Container className="2xl:px-[152px] flex flex-col lg:flex-row gap-x-20 xl:gap-x-32 justify-center pb-36 items-stretch">
        <div className="mb-10 lg:mb-0 lg:max-w-[306px] w-full h-auto">
          <p>&nbsp;</p>
          <h3 className="text-[30px] font-bold text-white bg-[#FF6600] block lg:inline-block px-8 py-6 mb-8 rounded-tl-md rounded-tr-md">
            Quick Navigation
          </h3>
          <TabsList
            className={cn(
              "flex flex-col items-start justify-start bg-white space-y-3"
            )}
          >
            {tabs.map((tab) => (
              <TabsTrigger key={tab.slug} value={tab.slug}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="flex-1 shadow-accordion">
          {tabs.map((tab) => (
            <TabsContent key={tab.slug} value={tab.slug}>
              <Accordion type="single" collapsible className="w-full">
                {tab.content.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-md overflow-hidden"
                  >
                    <AccordionTrigger
                      className={cn(
                        "text-lg font-semibold text-[#FF6600] px-9"
                      )}
                    >
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent
                      className={cn(
                        "opacity-80 text-[#000B33] text-base  pt-6 pb-14 px-9"
                      )}
                    >
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </div>
      </Container>
    </Tabs>
  );
};

export default QuickNavigation;
