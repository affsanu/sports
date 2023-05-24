import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SportsList from "./NavComponent/SportsList";
import CasinoList from "./NavComponent/CasinoList";
import SlotsList from "./NavComponent/SlotsList";
import VirtualList from "./NavComponent/VirtualList";
import LotteryList from "./NavComponent/LotteryList";
import { MdSportsSoccer, MdSportsCricket } from "react-icons/md";
import { GiSloth, GiGamepadCross, GiSpinningBlades } from "react-icons/gi";

export default function SportsBar() {
  const [activeTab, setActiveTab] = React.useState("sports");
  const data = [
    {
      label: "Sports",
      value: "sports",
      icon: MdSportsSoccer,
      component: <SportsList />,
    },
    {
      label: "Casino",
      value: "casino",
      icon: GiSloth,
      component: <CasinoList />,
    },
    {
      label: "Slots",
      value: "slots",
      icon: GiGamepadCross,
      component: <SlotsList />,
    },
    {
      label: "Lottery",
      value: "lottery",
      icon: GiSpinningBlades,
      component: <LotteryList />,
    },
    {
      label: "Virtual",
      value: "virtual",
      icon: MdSportsCricket,
      component: <VirtualList />,
    },
  ];
  return (
    <Tabs value={activeTab} className="bg-gray-200">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-200 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-pink-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "text-pink-500 uppercase font-bold"
                : "uppercase hover:text-pink-200"
            }
          >
            <div className="grid gap-1 text-sm">
              {React.createElement(icon, { className: "w-6 h-6 lg:w-8 lg:h-8 mx-auto" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
