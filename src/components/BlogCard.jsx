import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const BlogCard = ({ link, image, name, desc }) => {
  return (
    <Card className="w-full max-w-[60rem] flex-row p-5">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="blog cover"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className='ml-5'>
        <Typography variant="h6" color="white" className="mb-4 uppercase">
          Blockchain
        </Typography>
        <Typography variant="h4" className="mb-2 text-[#cfac83]">
          {name}
        </Typography>
        <Typography  className="mb-8 text-[#8892b0] font-normal">
         {desc}...
        </Typography>
        <a href={link} className="inline-block">
          <Button variant="text" className="flex items-center gap-2 text-gray-500">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default BlogCard;