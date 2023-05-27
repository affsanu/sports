import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

import {XMarkIcon} from '@heroicons/react/24/outline';

export default function Login(props) {
  return (
    <React.Fragment>
      <Dialog
        size="sm"
        open={props.open}
        className="bg-transparent shadow-none"
      >
        <div className="flex justify-center">
          <Card className="mx-auto w-96">
            <CardHeader
              variant="gradient"
              color="pink"
              className="mb-4 grid h-20 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Username" size="lg" />
              <Input label="Password" size="lg" />
              <div className="flex justify-end -mr-3">
                <Button variant="text" size="sm">
                  reset password
                </Button>
              </div>
              <Button
                color="pink"
                variant="gradient"
                onClick={props.handleOpen}
                fullWidth
              >
                login now
              </Button>
            </CardBody>
            <CardFooter className="">
              <Typography variant="small" className="flex justify-between items-center">
                {' '} Or
                <Typography
                  as="a"
                  href="/register"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Create Account
                </Typography>
                <Button onClick={props.handleOpen} variant="text" color="red" size="sm">
                Close
              </Button>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
