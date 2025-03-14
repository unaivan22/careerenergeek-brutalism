import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import NavbarAdmin from "./utils/NavbarAdmin";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Helmet } from "react-helmet";
import Lottie from 'react-lottie-player';
import emptyData from '../pages/lottie/empty.json';

const Applicant = () => {
  const { jobId } = useParams(); // Extract jobId from route parameters
  const [applicants, setApplicants] = useState([]);
  const [jobName, setJobName] = useState("");

  // Define fetchApplicants function outside of useEffect
  const fetchApplicants = async (jobId) => {
    try {
      const response = await axios.get(`/api/applicant.php`, {
        params: { loker_id: jobId },
      });
      if (response.data.jobName && Array.isArray(response.data.applicants)) {
        setJobName(response.data.jobName);
        setApplicants(response.data.applicants);
      } else {
        console.error("Unexpected response format:", response.data);
        setApplicants([]);
        setJobName("");
      }
    } catch (error) {
      console.error("Error fetching applicants:", error);
      setApplicants([]);
      setJobName("");
    }
  };

  // Fetch applicants when jobId changes
  useEffect(() => {
    if (jobId) {
      fetchApplicants(jobId);
    }
  }, [jobId]);

  const formatApplied = (dateString) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = months[date.getMonth()];  // Get month name in Indonesian
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('en-GB'); // Use en-GB for 24-hour format

    return `${day} ${month} ${year} (${time})`;
};

  return (
    <div>
      <Helmet>
        <title>Applicants {jobName} - Careers at Energeek</title>
      </Helmet>
      <NavbarAdmin />
      <div className="container">
        {/* <a href="/loker">
         <Button size='icon' variant='outline' className=' mt-[100px] rounded-2xl'><ArrowLeft className="w-4 h-4" /></Button>
        </a> */}
        <Breadcrumb className='mt-[120px]'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" target='_blank'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/#/loker-rJWbRV">Loker</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{jobName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold my-12">Applicants : {jobName}</h1>
        {applicants.length === 0 ? (
          <div className="flex items-center justify-center h-[50vh]">
            <div className="flex flex-col gap-1 items-center justify-center text-center">
            <Lottie
              play
              loop
              animationData={emptyData}
              className='w-[300px] h-[300px]'
              />
              <p className="text-sm opacity-50 -translate-y-[50px]">No Applicants Yet</p>
            </div>
          </div>
          ) : (
          <Table className='border shadow-sm mb-24'>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email - Phone - Porfolio</TableHead>
                {/* <TableHead>Phone</TableHead> */}
                {/* <TableHead>Portfolio Link</TableHead> */}
                <TableHead>Attachment</TableHead>
                <TableHead>Applied Date</TableHead>
                {/* <TableHead className='text-center'>Status</TableHead> */}
                <TableHead className='text-center'>*</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>{applicant.name}</TableCell>
                  <TableCell>{applicant.email} <br /> {applicant.phone} <br /> 
                  <a href={applicant.portfolio_link} target="_blank" rel="noopener noreferrer" className="underline">
                      {applicant.portfolio_link}
                    </a> </TableCell>
                  {/* <TableCell>{applicant.phone}</TableCell> */}
                  {/* <TableCell>
                    <a href={applicant.portfolio_link} target="_blank" rel="noopener noreferrer" className="underline">
                      {applicant.portfolio_link}
                    </a>
                  </TableCell> */}
                  <TableCell>
                    <a
                      href={`/api/${applicant.attachment}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold"
                    >
                      View Attachment
                    </a>
                  </TableCell>
                  <TableCell>{formatApplied(applicant.created_at)}</TableCell>
                  {/* <TableCell>
                    <select
                        value={task.pelapor}
                          onChange={(e) => handlePelaporChange(task.id, e.target.value)}
                          className="p-2 bg-transparent rounded dark:bg-black"
                      >
                        <option disabled selected>Pilih</option>
                        <option value="selected">Selected</option>
                        <option value="notselected">Unselected</option>
                    </select>
                  </TableCell> */}
                  <TableCell>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">Detail</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>{applicant.name}</SheetTitle>
                          <SheetDescription>
                            {formatApplied(applicant.created_at)}
                          </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col">
                          <div className="flex flex-col pb-2 pt-6">
                            <p className="text-sm opacity-70">Email <span className="text-rose-500 ml-1">*</span></p>
                            <p className="text-md font-semibold">{applicant.email}</p>
                          </div>
                          <div className="flex flex-col py-2">
                            <p className="text-sm opacity-70">Phone <span className="text-rose-500 ml-1">*</span></p>
                            <p className="text-md font-semibold">{applicant.phone}</p>
                          </div>
                          <div className="flex flex-col py-2">
                            <p className="text-sm opacity-70">Desired Salary</p>
                            <p className="text-md font-semibold">Rp {applicant.desiredsalary ? applicant.desiredsalary : "-"}</p>
                          </div>
                          <div className="flex flex-col py-2">
                            <p className="text-sm opacity-70">Porfolio Link</p>
                            <a className="text-md font-semibold underline" href={applicant.portfolio_link} target="_blank" rel="noopener noreferrer">{applicant.portfolio_link ? applicant.portfolio_link : "-"}</a>
                          </div>
                          <div className="flex flex-col py-2">
                            <p className="text-sm opacity-70">Attachment <span className="text-rose-500 ml-1">*</span></p>
                            <a className="text-md font-semibold underline" href={`/api/${applicant.attachment}`} target="_blank" rel="noopener noreferrer">Attachment</a>
                          </div>
                          <div className="flex flex-col py-2">
                            <p className="text-sm opacity-70">Short Resume</p>
                            <p className="text-md font-semibold">{applicant.shortresume ? applicant.shortresume : "-"}</p>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          )}
      </div>
    </div>
  );
};

export default Applicant;
