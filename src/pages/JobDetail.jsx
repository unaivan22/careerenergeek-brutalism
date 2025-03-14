import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavbarPublic from './utils/NavbarPublic';
import parse from 'html-react-parser';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircle2Icon, Download, Send, Share } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toPng } from 'html-to-image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Footer from './utils/Footer';
import { Textarea } from '@/components/ui/textarea';
import { Helmet } from 'react-helmet';
import Lottie from 'react-lottie-player';
import loaderData from './lottie/loader.json';
import { ModeToggle } from '@/components/mode-toggle';
import { GlowEffect } from '@/components/ui/glow-effect';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    loker_id: id,
    name: '',
    email: '',
    phone: '',
    portfolio_link: '',
    attachment: null,
    shortresume: '',
    desiredsalary: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const currentURL = window.location.href;
  const elementRef = useRef(null);
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    fetchJobDetail();
  }, []);

  const fetchJobDetail = async () => {
    try {
      const response = await axios.get(`/api/job-detail.php?id=${id}`);
      setJob(response.data);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  const handleApplicationChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setApplicationData({ ...applicationData, attachment: file });
    } else {
      alert('Only PDF files are allowed');
    }
  };

  const handleApply = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('loker_id', applicationData.loker_id);
    formData.append('name', applicationData.name);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    formData.append('portfolio_link', applicationData.portfolio_link);
    formData.append('attachment', applicationData.attachment);
    formData.append('shortresume', applicationData.shortresume);
    formData.append('desiredsalary', applicationData.desiredsalary);

    try {
      const response = await axios.post('/api/apply.php', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
      if (!appliedJobs.includes(applicationData.loker_id)) {
        appliedJobs.push(applicationData.loker_id);
        localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
      }
      // alert(response.data.message);
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  useEffect(() => {
    // Check if the user has already applied
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    if (appliedJobs.includes(id)) {
      setHasApplied(true);
    }
  }, [id]);

  const HtmlRenderer = ({ html }) => {
    // Ensure `html` is a string
    const safeHtml = typeof html === 'string' ? html : '';
  
    const parsedHtml = parse(safeHtml, {
      replace: (domNode) => {
        if (domNode.type === 'text') {
          // Remove leading and trailing whitespaces
          return domNode.data.trim();
        }
      },
    });
  
    return <>{parsedHtml}</>;
  };

  const formatDeadline = (deadline) => {
    const date = new Date(deadline); // Convert the deadline string to a Date object
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const htmlToImageConvert = () => {
    const element = elementRef.current;
    const scale = 2.16; // Scale factor
  
    toPng(element, { cacheBust: false, quality: 1, pixelRatio: scale }) // quality ranges from 0 to 1
      .then((dataUrl) => {
        const img = new window.Image(); // Specify `window.Image` to avoid scope conflicts
        img.src = dataUrl;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = element.offsetWidth * scale;
          canvas.height = element.offsetHeight * scale;
          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingEnabled = true; // Enable image smoothing for HD
          ctx.imageSmoothingQuality = 'high';
          // Draw the image onto the canvas at the desired scale
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
          // Convert the canvas to a PNG and trigger the download
          canvas.toBlob((blob) => {
            const link = document.createElement("a");
            link.download = "export.png";
            link.href = URL.createObjectURL(blob);
            link.click();
          }, "image/png");
        };
      })
      .catch((err) => {
        console.error("Error generating image:", err);
      });
  };

  const isExpired = () => {
    if (!job?.deadline) return false;
    const deadlineDate = new Date(job.deadline);
    const today = new Date();
    return today > deadlineDate;
  };

  if (!job) return <div className='grid h-screen place-items-center'>
    <div className='flex flex-col items-center justify-center'>
      <Lottie
        play
        loop
        animationData={loaderData}
        className='w-40 h-40'
        />
        <p>Loading...</p>
      </div>
  </div>;

  return (
    <div id='home' className='bg-lime-300'>
      <Helmet>
        <title>{job.namaposisi} - Careers at Energeek</title>
      </Helmet>
      <NavbarPublic />
      <div className='container md:px-[12vw] md:mb-32 pt-[120px] md:pb-12 pb-32'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{job.namaposisi}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      <Tabs defaultValue="jobdetail" className="w-full mt-12">
        <TabsList className="w-full mb-6 hidden md:grid grid-cols-2 w-[250px] ">
          <TabsTrigger value="jobdetail">Job Detail</TabsTrigger>
          <TabsTrigger value="share">Share</TabsTrigger>
        </TabsList>
        <TabsContent value="jobdetail">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12'>
            <div className='col-span-3 md:col-span-2 mb-12 border-b pb-6'>
              <h1 className='text-3xl font-bold'>{job.namaposisi}</h1>
              <div className='flex flex-col gap-2 mt-6'>
                <p className=''><strong>Division:</strong> {job.divisi}</p>
                <p className=''><strong>Deadline:</strong> {formatDeadline(job.deadline)}</p>
              </div>
              <div className='loker-detail my-12'>
                <HtmlRenderer html={job.jobdeskripsi} /> 
              </div>
              <p className=''><strong>Stack:</strong> {job.techstack}</p>
            </div>
            {hasApplied ? (
            <Badge variant='destructive' className='h-fit py-2 text-center w-fit'>You have already submitted this job.</Badge>
      ) : (
            <div className='col-span-3 md:col-span-1'>
              <div className='flex items-center justify-between  mb-6'>
                <h1 className='text-3xl font-bold '>Apply Now</h1>
              </div>
              {!isExpired() ? (
                <div className='relative'>
                <form onSubmit={handleApply} className='flex flex-col gap-4'>
                    <Card className="w-full">
                      <CardContent>
                        <div className='pt-6 flex flex-col gap-3'>
                          <div className='flex flex-col gap-1'>
                            <p className='text-sm font-base'>Nama <span className='text-red-500 text-xs'>*Required</span></p>
                            <Input
                              type='text'
                              name='name'
                              value={applicationData.name}
                              onChange={handleApplicationChange}
                              placeholder='Nama Lengkap'
                              className='w-full'
                              required
                            />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <p className='text-sm font-base'>Email <span className='text-red-500 text-xs'>*Required</span></p>
                            <Input
                              type='email'
                              name='email'
                              value={applicationData.email}
                              onChange={handleApplicationChange}
                              placeholder='Email'
                              className='w-full'
                              required
                            />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <p className='text-sm font-base'>Phone <span className='text-red-500 text-xs'>*Required</span></p>
                            <Input
                              type='text'
                              name='phone'
                              value={applicationData.phone}
                              onChange={handleApplicationChange}
                              placeholder='No Telp'
                              className='w-full'
                              required
                            />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <p className='text-sm font-base'>Resume/CV <span className='text-red-500 text-xs'>*Required</span></p>
                            <Input
                              type='file'
                              name='attachment'
                              onChange={handleFileChange}
                              accept="application/pdf"
                              className='w-full'
                              required
                            />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <p className='text-sm font-base'>Desired Salary <span className='text-stone-500 text-xs'>in Rupiah</span></p>
                            <Input
                              type='text'
                              name='desiredsalary'
                              value={applicationData.desiredsalary}
                              onChange={handleApplicationChange}
                              placeholder='0 (optional)'
                              className='w-full'
                              // required
                            />
                          </div>
                          <div className='flex flex-col gap-1'>
                            <p className='text-sm font-base'>Porfolio Link</p>
                            <Input
                              type='text'
                              name='portfolio_link'
                              value={applicationData.portfolio_link}
                              onChange={handleApplicationChange}
                              placeholder='Portfolio Link (Optional)'
                              className='w-full'
                            />
                          </div>
                          <div className='flex flex-col gap-1  mb-8'>
                            <p className='text-sm font-base'>Short Experience</p>
                            <Textarea
                              type='text'
                              name='shortresume'
                              value={applicationData.shortresume}
                              onChange={handleApplicationChange}
                              placeholder='Max 200 characters (optional)'
                              className='w-full'
                              // maxLength={200}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Button type='submit' className=' rounded-full'> <Send className='w-4 h-4 mr-2' /> Submit Application</Button>
                  </form>
                </div>
                ) : (
                  <div className="p-4 bg-red-100 border border-red-300 rounded-xl">
                    <p className="text-red-600 font-medium">This job posting has expired and applications are no longer accepted.</p>
                  </div>
                )}
            </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="share">
        {!isExpired() ? (
          <div className='w-full flex flex-col gap-10 items-center justify-center mt-12'>
            <div ><Button className='rounded-full' onClick={htmlToImageConvert}> <Share className='w-4 h-4 mr-2' /> Export</Button></div>
              <div className="bg-white dark:bg-black w-[600px] p-8 border relative overflow-hidden" ref={elementRef} id='share'>
                <div className="grid gap-4 py-4 z-999">
                  <div className='flex flex-col' >
                    <div className='flex justify-between items-end'>
                      <img src='/e.svg' className='w-20 mb-6' />
                      <div className='flex gap-1 flex-col mb-12 z-999'>
                        <p className='text-xs font-light opacity-60'>Apply ke alamat dibawah ini</p>
                        <Badge className='w-fit text-[.7rem]'>{currentURL}</Badge>
                      </div>
                    </div>
                    <p className='text-sm font-light opacity-70'>We’re Hiring</p>
                    <h1 className='font-bold text-2xl'>{job.namaposisi}</h1>
                    
                    <div className='share-detail mt-8'>
                      <HtmlRenderer html={job.jobdeskripsi} /> 
                    </div>
                    <div className='flex flex-col my-6'>
                      <h2 className='font-semibold text-lg'>Stack</h2>
                      <h1 className='font-base text-sm'>{job.techstack}</h1>
                    </div>
                  </div>
                  {/* <Button className='w-full' onClick={htmlToImageConvert}> <Download className='w-4 h-4 mr-2' /> Download</Button> */}
                </div>
                <svg width="1154" height="1154" className='z-50 scale-[.5] absolute -top-[520px] left-0 opacity-20' viewBox="0 0 577 577" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
          ) : (
            <div className='w-full flex flex-col gap-10 items-center justify-center mt-12'>
              <div className="p-4 bg-red-100 border border-red-300 rounded-xl">
                    <p className="text-red-600 font-medium">This job posting has expired and applications are no longer accepted.</p>
                  </div>
                <div className="bg-white dark:bg-black w-[600px] p-8 border relative overflow-hidden grayscale opacity-40">
                  <div className="grid gap-4 py-4 z-999">
                    <div className='flex flex-col opacity-80' >
                      <div className='flex justify-between items-end'>
                        <img src='/e.svg' className='w-20 mb-6' />
                        <div className='flex gap-1 flex-col mb-12 z-999'>
                          <p className='text-xs font-light opacity-60'>Apply ke alamat dibawah ini</p>
                          <Badge className='w-fit text-[.7rem]'>{currentURL}</Badge>
                        </div>
                      </div>
                      <p className='text-sm font-light opacity-70'>We’re Hiring</p>
                      <h1 className='font-bold text-2xl'>{job.namaposisi}</h1>
                      
                      <div className='share-detail mt-8'>
                        <HtmlRenderer html={job.jobdeskripsi} /> 
                      </div>
                      <div className='flex flex-col my-6'>
                        <h2 className='font-semibold text-lg'>Stack</h2>
                        <h1 className='font-base text-sm'>{job.techstack}</h1>
                      </div>
                    </div>
                    {/* <Button className='w-full' onClick={htmlToImageConvert}> <Download className='w-4 h-4 mr-2' /> Download</Button> */}
                  </div>
                  <svg width="1154" height="1154" className='z-50 scale-[.5] absolute -top-[520px] left-0 opacity-20' viewBox="0 0 577 577" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          )}
        </TabsContent>
      </Tabs>        
      </div>


      {showSuccess && (
        <div className='fixed bg-white w-screen h-screen top-0 left-0' id='home'>
          <div className='flex flex-col items-center justify-center h-[100vh]'>
            <CheckCircle2Icon className='w-32 h-32 text-lime-500 shadow-2xl rounded-full mb-3' />
            <h1 className='text-3xl font-semibold mb-2'>Success</h1>
            <p className='font-light opacity-60 text-sm max-w-xs text-center'>Lamaran anda berhasil dikirim, tim kami akan mengontak anda.</p>

            <a href='/'><Button className='rounded-full shadow-sm mt-5'>Selesai</Button></a>
          </div>
        </div>
      )}
      <div className='bg-stone-50 dark:bg-black'>
        <div className='container'>
          <Footer />
        </div>
      </div>
      {/* <div className='fixed bottom-8 right-8'>
        <ModeToggle />
      </div> */}
    </div>
  );
};

export default JobDetail;
