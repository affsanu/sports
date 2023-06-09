import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CalendarDaysIcon,
  CalendarIcon,
  TrophyIcon
} from "@heroicons/react/24/solid";
import InplayCard from "../Card/Inplay";
import Today from "../Card/Today";
import Tomorrow from "../Card/Tomorrow";

export default function SportsList() {
  const data = [
    {
      label: "In-Play",
      value: "inplay",
      icon: ClockIcon,
      card: <InplayCard />,
    },
    {
      label: "Today",
      value: "today",
      icon: CalendarDaysIcon,
      card: <Today />,
    },
    {
      label: "Tomorrow",
      value: "tomorrow",
      icon: CalendarIcon,
      card: <Tomorrow />,
    },
    {
      label: "Leagues",
      value: "leagues",
      icon: TrophyIcon,
      card: `we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="">
      <h3 className="text-pink-500 text-sm font-bold uppercase">Exchange Sports</h3>
      <Tabs value="inplay" orientation="vertical">
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
          {data.map(({ value, card }) => (
            <TabPanel key={value} value={value} className="py-0">
              {card}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
