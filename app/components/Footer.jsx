"use client";
import { Button, Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-blue-50 p-4 lg:rounded-t-md">
      <div className=" flex flex-row flex-wrap items-center justify-center gap-y-3 gap-x-12 text-center md:justify-between">
        <Button
          size="sm"
          variant="gradient"
          color="pink"
          className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
        >
          Android App
          <span className="absolute right-0 grid h-full w-12 place-items-center bg-pink-600 transition-colors group-hover:bg-pink-700">
            <img src="/assets/images/android.svg" alt="metamask" className="h-6 w-6" />
          </span>
        </Button>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="policy"
              color="blue-gray"
              className="text-xs transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Privacy Policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="gambling"
              color="blue-gray"
              className="text-xs transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Gambling
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/term"
              color="blue-gray"
              className="text-xs transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terms & Conditions
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-3 border-cyan-200" />
      <Typography color="blue-gray" className="text-center text-sm">
        &copy; 2023 Demo. All Right Reserve.
      </Typography>
    </footer>
  );
}
