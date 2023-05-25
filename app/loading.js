'use client';
import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className="h-screen justify-center items-center mx-auto">
      <Spinner className="h-12 w-12" />
    </div>
  );
};

export default Loading;
