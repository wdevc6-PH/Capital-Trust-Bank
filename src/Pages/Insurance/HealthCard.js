
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaRegHandPeace } from "react-icons/fa";
import { FiLifeBuoy } from "react-icons/fi";

import React from 'react';
import { Card, CardBody } from "@chakra-ui/card";
import { Text } from "@chakra-ui/layout";

export default function HealthCard() {

    const healthdata=[
        {
            'id':0,
            'title':'Peace of Mind',
            'details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            "icon":FaRegHandPeace
        },
        {
            'id':1,
            'title':'Set For Life',
            'details':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            "icon":FiLifeBuoy
        },
        {
            id:2,
            "title":'Tailored Covered',
            "details":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
            "icon":FaRegHandPeace
        },
    ]

  return (
    <div className=' container flex align-center justify-center gap-6 my-20 flex-col md:flex-row'>
        {
            healthdata.map(hel=>(
    <Card key={hel.id} style={{width:'100%' ,height:'auto'}}  className="hover:bg-[#041C51]  hover:text-[#fff] hover:animate-animated hover:animate-pulse">

        <CardBody className='flex flex-col align-center justify-center hover:text-white'>
        <div className="w-100  text-4xl flex align-center justify-center my-3">
        <hel.icon  />
        </div>
        <Text fontWeight={700} color='#DF0303' marginY={2} fontSize={24} textAlign='center'>
         {hel.title}
        </Text>
        <div className='text-md text-center'>
          {hel.details}
        </div>
        <div className="w-100 text-sky-500 text-4xl flex align-center justify-center my-3">
        <BsFillArrowRightCircleFill/>
        </div>
      </CardBody>

    </Card>
            ))
        }
    </div>
  );
}
