import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  export default function Category() {
    return (
      <div className="grid md:grid-cols-2 space-y-1 py-0.5 lg:gap-2">
        <Card className="flex-row justify-between w-full h-24 lg:h-28 cursor-pointer bg-transparent from-gray-50 to-gray-300 hover:bg-white">
          <CardBody className="flex-row justify-center mx-auto items-center">
            <Typography variant="h6" color="blue" className="uppercase">
              Evolution Gaming
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Play Now
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
        <Card className="flex-row justify-between w-full h-24 lg:h-28 cursor-pointer bg-transparent from-gray-50 to-gray-300 hover:bg-white">
          <CardBody className="flex-row justify-center mx-auto items-center">
            <Typography variant="h6" color="blue" className="uppercase">
              Euro Casino
            </Typography>
            <Typography variant="h6" color="blue-gray" className="">
              Play Now
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
        <Card className="flex-row justify-between w-full h-24 lg:h-28 cursor-pointer bg-transparent from-gray-50 to-gray-300 hover:bg-white">
          <CardBody className="flex-row justify-center mx-auto items-center">
            <Typography variant="h6" color="blue" className="uppercase">
              Live Table
            </Typography>
            <Typography variant="h6" color="blue-gray" className="">
              Play Now
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
        <Card className="flex-row justify-between w-full h-24 lg:h-28 cursor-pointer bg-transparent from-gray-50 to-gray-300 hover:bg-white">
          <CardBody className="flex-row justify-center mx-auto items-center">
            <Typography variant="h6" color="blue" className="uppercase">
              Triple Patti
            </Typography>
            <Typography variant="h6" color="blue-gray" className="">
              Play Now
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
        <Card className="flex-row justify-between w-full h-24 lg:h-28 cursor-pointer bg-transparent from-gray-50 to-gray-300 hover:bg-white">
          <CardBody className="flex-row justify-center mx-auto items-center">
            <Typography variant="h6" color="blue" className="uppercase">
              Jori
            </Typography>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Play Now
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
        <Card className="flex-row justify-between w-full h-24 lg:h-28 cursor-pointer bg-transparent from-gray-50 to-gray-300 hover:bg-white">
          <CardBody className="flex-row justify-center items-center">
            <Typography variant="h6" color="blue" className="uppercase mx-auto">
              History
            </Typography>
            <Typography variant="h6" color="blue-gray" className="">
              Today
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
      </div>
    );
  }
  