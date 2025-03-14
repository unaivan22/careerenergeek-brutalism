import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NavbarPublic from './utils/NavbarPublic';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Footer from './utils/Footer';
import data from './data.json'
import Lottie from 'react-lottie-player';
import nojobData from '../pages/lottie/nojob.json';
import { ModeToggle } from '@/components/mode-toggle';
import { Tilt } from '@/components/ui/tilt';
import { Spotlight } from '@/components/ui/spotlight';
import { GlowEffect } from '@/components/ui/glow-effect';
import { motion } from "framer-motion";
import { BsCursorFill } from "react-icons/bs";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InfiniteSlider } from '@/components/ui/infinite-slider';
const images = import.meta.glob('/public/clients/*.webp', { eager: true });
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const getRandomValue = (range) => Math.random() * range;

const getRandomTranslation = () => ({
  x: getRandomValue(100) - getRandomValue(120),
  y: getRandomValue(100) - getRandomValue(120),
  z: getRandomValue(100) - getRandomValue(120),
});

const Home = () => {
  const [lokers, setLokers] = useState([]);
  const navigate = useNavigate();
  const [innovationTranslation, setInnovationTranslation] = useState(
    getRandomTranslation()
  );

  const [teamworkTranslation, setTeamworkTranslation] = useState(
    getRandomTranslation()
  );

  const [professionalTranslation, setProfessionalTranslation] = useState(
    getRandomTranslation()
  );

  useEffect(() => {
      const innovationInterval = setInterval(() => {
        setInnovationTranslation(getRandomTranslation());
      }, 2500);
  
      return () => clearInterval(innovationInterval);
    }, []);
  
  useEffect(() => {
    const teamworkInterval = setInterval(() => {
      setTeamworkTranslation(getRandomTranslation());
    }, 2000);

    return () => clearInterval(teamworkInterval);
  }, []);

  useEffect(() => {
    const professionalInterval = setInterval(() => {
      setProfessionalTranslation(getRandomTranslation());
    }, 2200);

    return () => clearInterval(professionalInterval);
  }, []);

  useEffect(() => {
    // Fetch loker list from the backend
    fetchLoker();
  }, []);

  // Fetch loker list from backend
  const fetchLoker = async () => {
    try {
      const response = await axios.get('/api/home.php');
      // Filter out expired lokers based on the deadline
      const currentDate = new Date();
      const filteredLokers = response.data.filter((loker) => {
        const deadlineDate = new Date(loker.deadline);
        return deadlineDate >= currentDate; // Keep only lokers with valid deadlines
      });
      setLokers(filteredLokers);
    } catch (error) {
      console.error('Error fetching loker:', error);
    }
  };

  const formatDeadline = (deadline) => {
    const date = new Date(deadline); // Convert the deadline string to a Date object
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <div id='home' className='bg-yellow-300 pb-12 md:pb-0'>
      <motion.div
        className="absolute lg:top-[52vh] top-[32vh] lg:left-[24vw] left-[16vw] z-9"
        animate={{
          x: innovationTranslation.x,
          y: innovationTranslation.y,
          z: innovationTranslation.z,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
      >
        <div className="flex gap-x-1">
          <div className="mt-4 -mr-2 py-1 px-3 bg-lime-600 rounded-full flex items-center gap-x-2 w-fit">
            <p className="text-white text-[1rem] capitalize capitalize">innovation</p>
          </div>
          <BsCursorFill className="h-4 w-4 text-lime-600" />
        </div>
      </motion.div>

      <motion.div
        className="absolute lg:top-[52vh] top-[42vh] lg:right-[26vw] right-[16vw] z-9"
        animate={{
          x: teamworkTranslation.x,
          y: teamworkTranslation.y,
          z: teamworkTranslation.z,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
      >
        <div className="flex gap-x-1">
          <BsCursorFill className="scale-x-[-1] h-4 w-4 text-sky-600" />
          <div className="mt-4 -ml-2 py-1 px-3 bg-sky-600 rounded-full flex items-center gap-x-2 w-fit">
            <p className="text-white text-[1rem] capitalize">teamwork</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute lg:top-[72vh] top-[56vh] lg:left-[46vw] left-[32vw] z-9"
        animate={{
          x: professionalTranslation.x,
          y: professionalTranslation.y,
          z: professionalTranslation.z,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
      >
        <div className="flex gap-x-1">
          <div className="mt-4 -mr-2 py-1 px-3 bg-purple-600 rounded-full flex items-center gap-x-2 w-fit">
            <p className="text-white text-[1rem] capitalize capitalize">professional</p>
          </div>
          <BsCursorFill className="h-4 w-4 text-purple-600" />
        </div>
      </motion.div>
      
      <NavbarPublic />
      {/* {lokers.length === 0 ? (
        <img className='hidden md:block mt-24' src='/bgteam.webp' />
        ) : ( */}
        <div className='flex flex-col gap-4 bg-orange-400'>
          <div className='hidden lg:grid grid-cols-9 gap-3 mt-[120px] px-4'>
          <div className='flex flex-col gap-4 mt-16'>
            { data.leftMember.slice(0,3).map((leftMemberitem, i) => {
                return (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                          <img
                            src={leftMemberitem.img}
                            className='h-auto w-auto object-cover translate-y-[6px]'
                          />
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                      <div className="grid">
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                            />
                            <div className='bg-white w-full p-4 flex flex-col gap-2'>
                              <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                              <p className='text-sm font-light'>{leftMemberitem.position}</p>
                            </div>
                        </Card>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })
            }
            </div>
            <div className='flex flex-col gap-4'>
              { data.leftMember.slice(3,6).map((leftMemberitem, i) => {
                  return (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-auto w-auto object-cover translate-y-[6px]'
                            />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                        <div className="grid">
                          <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                              <img
                                src={leftMemberitem.img}
                                className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                              />
                              <div className='bg-white w-full p-4 flex flex-col gap-2'>
                                <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                                <p className='text-sm font-light'>{leftMemberitem.position}</p>
                              </div>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })
              }
            </div>
            <div className='flex flex-col gap-4 mt-20'>
              { data.leftMember.slice(6,8).map((leftMemberitem, i) => {
                  return (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-auto w-auto object-cover translate-y-[6px]'
                            />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                        <div className="grid">
                          <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                              <img
                                src={leftMemberitem.img}
                                className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                              />
                              <div className='bg-white w-full p-4 flex flex-col gap-2'>
                                <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                                <p className='text-sm font-light'>{leftMemberitem.position}</p>
                              </div>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })
              }
            </div>
            <div className='flex flex-col gap-4'>
              { data.leftMember.slice(8,10).map((leftMemberitem, i) => {
                  return (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-auto w-auto object-cover translate-y-[6px]'
                            />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                        <div className="grid">
                          <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                              <img
                                src={leftMemberitem.img}
                                className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                              />
                              <div className='bg-white w-full p-4 flex flex-col gap-2'>
                                <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                                <p className='text-sm font-light'>{leftMemberitem.position}</p>
                              </div>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })
              }
            </div>
            <div className='flex flex-col gap-4 mt-8'>
              { data.leftMember.slice(10,12).map((leftMemberitem, i) => {
                  return (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-auto w-auto object-cover translate-y-[6px]'
                            />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                        <div className="grid">
                          <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                              <img
                                src={leftMemberitem.img}
                                className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                              />
                              <div className='bg-white w-full p-4 flex flex-col gap-2'>
                                <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                                <p className='text-sm font-light'>{leftMemberitem.position}</p>
                              </div>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })
              }
            </div>
            <div className='flex flex-col gap-4'>
              { data.leftMember.slice(12,14).map((leftMemberitem, i) => {
                  return (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-auto w-auto object-cover translate-y-[6px]'
                            />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                        <div className="grid">
                          <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                              <img
                                src={leftMemberitem.img}
                                className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                              />
                              <div className='bg-white w-full p-4 flex flex-col gap-2'>
                                <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                                <p className='text-sm font-light'>{leftMemberitem.position}</p>
                              </div>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })
              }
            </div>
            <div className='flex flex-col gap-4 mt-20'>
              { data.leftMember.slice(14,16).map((leftMemberitem, i) => {
                  return (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-auto w-auto object-cover translate-y-[6px]'
                            />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                        <div className="grid">
                          <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                              <img
                                src={leftMemberitem.img}
                                className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                              />
                              <div className='bg-white w-full p-4 flex flex-col gap-2'>
                                <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                                <p className='text-sm font-light'>{leftMemberitem.position}</p>
                              </div>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })
              }
            </div>
            <div className='flex flex-col gap-4'>
              { data.leftMember.slice(16,19).map((leftMemberitem, i) => {
                  return (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-auto w-auto object-cover translate-y-[6px]'
                            />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                        <div className="grid">
                          <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                              <img
                                src={leftMemberitem.img}
                                className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                              />
                              <div className='bg-white w-full p-4 flex flex-col gap-2'>
                                <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                                <p className='text-sm font-light'>{leftMemberitem.position}</p>
                              </div>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })
              }
            </div>
            <div className='flex flex-col gap-4 mt-16'>
              { data.leftMember.slice(19,22).map((leftMemberitem, i) => {
                  return (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-auto w-auto object-cover translate-y-[6px]'
                            />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                        <div className="grid">
                          <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                              <img
                                src={leftMemberitem.img}
                                className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                              />
                              <div className='bg-white w-full p-4 flex flex-col gap-2'>
                                <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                                <p className='text-sm font-light'>{leftMemberitem.position}</p>
                              </div>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })
              }
            </div>
          </div>
          <div className='flex items-center justify-center my-8 -translate-y-[150px]'>
            <a href='/#/teams'>
              <Button variant='secondary' className='rounded-xl'>All Teams</Button>
            </a>
          </div>
      </div>
        
      {/* <img className='md:hidden mt-0 md:mt-24' src='/bgteam.webp' /> */}
      <div className='lg:hidden mt-8 md:mt-24 space-y-6'>
        <InfiniteSlider gap={24}>
          { data.leftMember.slice(0,11).map((leftMemberitem, i) => {
                return (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                          <img
                            src={leftMemberitem.img}
                            className='h-[160px] w-auto object-cover translate-y-[6px]'
                          />
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                      <div className="grid">
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                            />
                            <div className='bg-white w-full p-4 flex flex-col gap-2'>
                              <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                              <p className='text-sm font-light'>{leftMemberitem.position}</p>
                            </div>
                        </Card>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })
            }
        </InfiniteSlider>
        <InfiniteSlider gap={24} reverse>
          { data.leftMember.slice(12,22).map((leftMemberitem, i) => {
                return (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 px-1 lg:px-3 cursor-pointer ${leftMemberitem.bg}`}>
                          <img
                            src={leftMemberitem.img}
                            className='h-[160px] w-auto object-cover translate-y-[6px]'
                          />
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[325px] bg-transparent border-0">
                      <div className="grid">
                        <Card key={leftMemberitem.id} className={`w-full flex flex-col items-center justify-center relative pt-2 ${leftMemberitem.bg} rounded-t-full`}>
                            <img
                              src={leftMemberitem.img}
                              className='h-[360px] w-auto object-cover translate-y-[6px] mb-2'
                            />
                            <div className='bg-white w-full p-4 flex flex-col gap-2'>
                              <p className='font-semibold text-xl'>{leftMemberitem.name}</p>
                              <p className='text-sm font-light'>{leftMemberitem.position}</p>
                            </div>
                        </Card>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })
            }
        </InfiniteSlider>
        <div className='flex items-center justify-center'>
        <a href='/#/teams'>
          <Button variant='secondary' className='rounded-xl'>All Teams</Button>
        </a>
        </div>
      </div>
      <div className='container mb-32 -translate-y-[100px] lg:-translate-y-[180px] bg-green-500 mt-32 pt-12 pb-24 px-6 lg:px-12 border-2 border-black'>
        <div className='flex flex-col mt-12 md:mt-24 md:mb-32 mb-16'>
          {/* <img src='/bgteam.webp' /> */}
          <div></div>
          <h1 className="md:text-[3rem] text-[2rem] font-bold w-full text-center leading-snug">
            Discover your place at Energeek
          </h1>
          <p className='w-full text-center opacity-50'>We seek driven individuals ready to bring your passion and talent to the table.</p>
          <p className='w-full text-center opacity-50'>Our culture emphasizes innovation, teamwork, and professional growth.</p>
        </div>

        <div className='grid grid-cols-1 gap-4 md:mx-[12vw]'>
          {lokers.length === 0 ? (
            <div className='flex flex-col gap-4 items-center justify-center h-[100px] my-32 md:my-24'>
              <Lottie
                play
                loop
                animationData={nojobData}
                className='w-[300px] h-[300px]'
                />
              <p className='text-center text-sm font-light text-gray-500'>
                No jobs available at the current time
              </p>
              <a href='https://energeek.co.id/' target='_blank'>
                <Button>Go to Energeek</Button>
              </a>
            </div>
          ) : (
            lokers.map((loker) => (
              <div className='relative'>
                <Card className="w-full cursor-pointer" onClick={() => navigate(`/job/${loker.id}`)} key={loker.id}>
                  <CardHeader>
                    <CardTitle>{loker.namaposisi}</CardTitle>
                    <CardDescription>Deadline : {formatDeadline(loker.deadline)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center justify-between'>
                      <Badge variant='outline'>{loker.divisi}</Badge>
                      <Button className='rounded-xl '>Read More</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          )}
        </div>
        <svg width="1154" height="1154" className='z-50 scale-[.5] hidden lg:absolute top-[100vh] -right-[500px] opacity-20' viewBox="0 0 577 577" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_38_123)">
          <path d="M288.38 576.413C447.469 576.413 576.436 447.446 576.436 288.357C576.436 129.268 447.469 0.300781 288.38 0.300781C129.291 0.300781 0.324219 129.268 0.324219 288.357C0.324219 447.446 129.291 576.413 288.38 576.413Z" fill="url(#paint0_radial_38_123)"/>
          </g>
          <defs>
          <radialGradient id="paint0_radial_38_123" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(288.38 288.357) rotate(90) scale(288.056)">
          <stop stop-color="#B33022"/>
          <stop offset="1" stop-color="#B33022" stop-opacity="0"/>
          </radialGradient>
          <clipPath id="clip0_38_123">
          <rect width="577" height="577" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>

      <div className='-translate-y-[100px] md:-translate-y-[150px]'>
        <InfiniteSlider gap={24}>
          {Object.keys(images).map((key, index) => {
              const fileName = key.split('/').pop().replace('.webp', '');
              return (
                <div key={key} className="flex flex-col gap-1">
                  <img
                    src={images[key]?.default || images[key]}
                    alt={fileName}
                    className="h-[50px] md:h-[80px] mr-4"
                    onClick={() => openLightbox(index)}
                  />
                  {/* <p className="font-light text-sm text-stone-400 mt-2 capitalize">{fileName}</p> */}
                </div>
              );
            })}
        </InfiniteSlider>
      </div>

      <div className='container'>
        <Card className="md:mx-[12vw] bg-[#A56DFE] p-4 lg:p-12">
          <CardHeader>
            <CardTitle className='text-center text-4xl'>We Can't Wait To Join Out Teams</CardTitle>
            <CardDescription className='text-black text-center'>Let's connect with you and hear your story.
            Let's work together to achieve amazing things!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex items-center justify-center'>
              <a href='https://energeek.co.id/#bt_contact' target='blank'>
                <Button className='rounded-xl'>Contact Us</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='bg-stone-50 dark:bg-black'>
        <div className='container'>
          <Footer />
        </div>
      </div>
      {/* <div className='fixed bottom-8 right-8 z-999'>
        <ModeToggle />
      </div> */}
    </div>
  );
};

export default Home;
