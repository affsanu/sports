import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  SwatchIcon,
  FireIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";

export default function CasinoList() {
  const data = [
    {
      label: "Catalog",
      value: "catalog",
      icon: SwatchIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
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
      <h1 className="text-pink-500 font-bold uppercase">Live Casino</h1>
      <Tabs value="catalog" orientation="vertical">
        <TabsHeader className="w-24">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="place-items-center">
              <div className="grid gap-1">
                {React.createElement(icon, { className: "w-12 h-12 mx-auto" })}
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
