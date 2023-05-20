import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const inplayData = [
  { id: 1, name: "All", total: 74 },
  { id: 2, name: "Cricket", total: 4 },
  { id: 3, name: "Soccer", total: 67 },
  { id: 4, name: "Tennis", total: 3 },
];

export default function InplayCard() {
  return (
    <div className="flex-row space-y-1">
      <Card className="flex-row justify-between w-full h-28 cursor-pointer">
        <CardBody className="flex-row justify-center mx-auto items-center">
          <Typography variant="h6" color="blue" className="uppercase mb-4">
            All
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            60
          </Typography>
        </CardBody>
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/6 shrink-0 m-0 rounded-l-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
      </Card>
      <Card className="flex-row justify-between w-full h-28 cursor-pointer">
        <CardBody className="flex-row justify-center mx-auto items-center">
          <Typography variant="h6" color="blue" className="uppercase mb-4">
            Cricket
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            4
          </Typography>
        </CardBody>
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/6 shrink-0 m-0 rounded-l-none"
        >
          <img
            src="/assets/images/exchange.png"
            alt="image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
      </Card>
      <Card className="flex-row justify-between w-full h-28 cursor-pointer">
        <CardBody className="flex-row justify-center mx-auto items-center">
          <Typography variant="h6" color="blue" className="uppercase mb-4">
            Soccer
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            64
          </Typography>
        </CardBody>
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/6 shrink-0 m-0 rounded-l-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
      </Card>
    </div>
  );
}
