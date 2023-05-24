import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  FireIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";

export default function SlotsList() {
  const data = [
    {
      label: "Latest",
      value: "latest",
      icon: FireIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "A-Z",
      value: "az",
      icon: CubeTransparentIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="">
      <h1 className="text-pink-500 text-sm font-bold uppercase">Slot Machine</h1>
      <Tabs value="latest" orientation="vertical">
        <TabsHeader className="w-20 lg:w-24">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="place-items-center">
              <div className="grid gap-1 text-xs">
                {React.createElement(icon, { className: "w-8 h-8 lg:w-12 lg:h-12 mx-auto" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
