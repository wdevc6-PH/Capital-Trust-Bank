import { Box, Typography } from '@mui/material';
import React from 'react';
import image1 from '../../assests/Team/Ellipse 3497 (1).png';
import image2 from '../../assests/Team/Ellipse 3497 (2).png';
import image3 from '../../assests/Team/Ellipse 3497.png';
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

import '../../App.css';

const Team = () => {
    return (
        <Box className='team-area'>
            <Box className='container mx-auto'>
                <Typography sx={{
                    fontSize: '48px',
                    lineHeight: '56px',
                    fontWeight: 700,
                    color: '#010C3A'
                }} variant='h3'>Team Of Expert Consulted</Typography>
                <Box className='grid gap-5 md:grid-cols-3 py-16 mt-[100px]'>
                    <Box
                        sx={{
                            position: 'relative',
                            height: '280px',
                            maxWidth: '424px',
                            // width: '424px',
                        }}
                        className='team'>

                        <Box                       
                            sx={{
                                position: 'absolute',
                                height: '348px',
                                left: '38px',
                                right: '38px',
                                // right: '30px',
                                top: '-45%'
                            }}
                        > <img className='bg-image' src={image1} alt="" />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '30%',
                                    bottom: '36%',
                                }}
                                className='flex justify-between w-[100px] icon-box'>
                                <FaLinkedin className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                                <FaTwitter className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                                <FaFacebook className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                            </Box>
                        </Box>
                        <Box

                        ><Typography
                            className='title'
                            sx={{
                                position: 'absolute',
                                bottom: '5px',
                                width: '134px',
                                height: '28px',
                                left: '101px',
                                top: '185px',
                                // left: '144px',
                                // top: '240px',
                                fontSize: '20px',
                                lineHeight: '28px',
                                fontWeight: 700,
                                color: '#010C3A'
                            }}
                        >Adam Smith</Typography>

                            <Typography
                                className='title'
                                sx={{
                                    position: 'absolute',
                                    width: '216px',
                                    height: '24px',
                                    left: '61px',
                                    top: '205px',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                    color: '#706F6D',
                                    opacity: 0.5
                                }}
                            >Co-Founder</Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'relative',
                            height: '280px',
                            maxWidth: '424px',
                            // width: '424px'
                        }}
                        className='team team-2'>

                        <Box
                            sx={{
                                position: 'absolute',
                                height: '348px',
                                left: '38px',
                                right: '38px',
                                // right: '30px',
                                top: '-45%'
                            }}
                        > <img className='bg-image' src={image2} alt="" />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '30%',
                                    bottom: '36%',
                                }}
                                className='flex justify-between w-[100px] icon-box'>
                                <FaLinkedin className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                                <FaTwitter className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                                <FaFacebook className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                            </Box>
                        </Box>
                        <Box

                        ><Typography
                            className='title'
                            sx={{
                                position: 'absolute',
                                bottom: '5px',
                                width: '134px',
                                height: '28px',
                                left: '101px',
                                top: '185px',
                                fontSize: '20px',
                                lineHeight: '28px',
                                fontWeight: 700,
                                color: '#010C3A'
                            }}
                        >Adam Smith</Typography>

                            <Typography
                                className='title'
                                sx={{
                                    position: 'absolute',
                                    width: '216px',
                                    height: '24px',
                                    left: '61px',
                                    top: '205px',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                    color: '#706F6D',
                                    opacity: 0.5
                                }}
                            >Co-Founder</Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'relative',
                            height: '280px',
                            maxWidth: '424px',
                            // width: '424px'
                        }}
                        className='team team-2'>

                        <Box
                            sx={{
                                position: 'absolute',
                                height: '348px',
                                left: '38px',
                                right: '38px',
                                // right: '30px',
                                top: '-45%'
                            }}
                        > <img className='bg-image' src={image3} alt="" />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '30%',
                                    bottom: '36%',
                                }}
                                className='flex justify-between w-[100px] icon-box'>
                                <FaLinkedin className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                                <FaTwitter className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                                <FaFacebook className='icon cursor-pointer w-[30px] h-[30px] p-2' />
                            </Box>
                        </Box>
                        <Box
                            className='title-2'
                        ><Typography
                            className='title'
                            sx={{
                                position: 'absolute',
                                bottom: '5px',
                                width: '134px',
                                height: '28px',
                                left: '101px',
                                top: '185px',
                                fontSize: '20px',
                                lineHeight: '28px',
                                fontWeight: 700,
                                color: '#010C3A'
                            }}
                        >Adam Smith</Typography>

                            <Typography
                                className='title'
                                sx={{
                                    position: 'absolute',
                                    width: '216px',
                                    height: '24px',
                                    left: '61px',
                                    top: '205px',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '24px',
                                    color: '#706F6D',
                                    opacity: 0.5
                                }}
                            >Co-Founder</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Team;