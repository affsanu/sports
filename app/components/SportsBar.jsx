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

export default function SportsBar() {
  const [activeTab, setActiveTab] = React.useState("sports");
  const data = [
    {
      label: "Sports",
      value: "sports",
      component: <SportsList />,
    },
    {
      label: "Casino",
      value: "casino",
      component: <CasinoList />,
    },
    {
      label: "Slots",
      value: "slots",
      component: <SlotsList />,
    },
    {
      label: "Lottery",
      value: "lottery",
      component: <LotteryList />,
    },
    {
      label: "Virtual",
      value: "virtual",
      component: <VirtualList />,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-pink-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? "text-pink-500 uppercase font-bold"
                : "uppercase"
            }
          >
            {label}
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
