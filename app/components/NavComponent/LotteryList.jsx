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
  PresentationChartBarIcon
} from "@heroicons/react/24/solid";
import { MdCalculate } from "react-icons/md";
import Thai from "../LotteryCard/Thai";
import Kalyan from "../LotteryCard/Kalyan";

export default function LotteryList() {
  const data = [
    {
      label: "Thai",
      value: "thai",
      icon: SwatchIcon,
      content: <Thai />,
    },
    {
      label: "Kalyan",
      value: "kalyan",
      icon: FireIcon,
      content: <Kalyan />,
    },
    {
      label: "Bingo",
      value: "bingo",
      icon: CubeTransparentIcon,
      content: <Thai />,
    },
    {
      label: "Results",
      value: "result",
      icon: PresentationChartBarIcon,
      content: <Thai />,
    },
    {
      label: "Rate",
      value: "rate",
      icon: MdCalculate,
      content: <Thai />,
    },
  ];
  return (
    <div className="">
      <h1 className="text-pink-500 text-sm font-bold uppercase">
        Lottery Zone
      </h1>
      <Tabs value="thai" orientation="vertical">
        <TabsHeader className="w-20 lg:w-24">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="place-items-center">
              <div className="grid gap-1 text-xs">
                {React.createElement(icon, {
                  className: "w-8 h-8 lg:w-12 lg:h-12 mx-auto",
                })}
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
