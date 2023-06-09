"use client";
import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import Login from "./Login";
import Link from "next/link";

// profile menu component
const profileMenuItems = [
  {
    label: "Cashbox",
    icon: BanknotesIcon,
  },
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Transaction",
    icon: LifebuoyIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default function ComplexNavbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="flex justify-center mx-auto">
      <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 bg">
        <div className="relative mx-auto flex justify-between items-center text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <span className="uppercase text-bold text-pink-500">DE</span>
            <span className="uppercase text-bold text-cyan-500">MO</span>
          </Typography>

          {1 == 1 ? (
            <div className="flex">
              <Button onClick={handleOpen} variant="text" size="sm">
                Login
              </Button>
              <Link href="/register">
                <Button variant="gradient" size="sm" color="pink">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex">
              <Button variant="text" size="sm">
                <span className="text-orange-700">55.20 USD</span>
              </Button>
              <ProfileMenu />
            </div>
          )}
        </div>
      </Navbar>
      <Login open={open} handleOpen={handleOpen} />
    </div>
  );
}
