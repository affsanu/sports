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
import Category from "../CasinoCard/Category";

export default function CasinoList() {
  const data = [
    {
      label: "Catalog",
      value: "catalog",
      icon: SwatchIcon,
      content: <Category />,
    },
    {
      label: "Latest",
      value: "latest",
      icon: FireIcon,
      content: <Category />,
    },
    {
      label: "A-Z",
      value: "az",
      icon: CubeTransparentIcon,
      content: <Category />,
    },
  ];
  return (
    <div className="">
      <h1 className="text-pink-500 text-sm font-bold uppercase">Live Casino</h1>
      <Tabs value="catalog" orientation="vertical">
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
          {data.map(({ value, content }) => (
            <TabPanel key={value} value={value} className="py-0">
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
