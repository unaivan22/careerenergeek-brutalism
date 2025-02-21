import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import "quill/dist/quill.core.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const AddLoker = () => {
  const [lokers, setLokers] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    namaposisi: '',
    divisi: '',
    deadline: '',
    jobdeskripsi: '',
    techstack: '',
  });

  useEffect(() => {
    fetchLoker();
  }, []);

  // Fetch loker list using axios
  const fetchLoker = async () => {
    try {
      const response = await axios.get('/api/loker.php', { withCredentials: true });
      setLokers(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Session expired. Please log in again.');
      } else {
        console.error('Error fetching loker:', error);
      }
    }
  };

  // Handle form nput changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit for creating or updating loker
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = formData.id ? 'PUT' : 'POST';
    const url = '/api/loker.php';

    try {
      const response = await axios({
        method,
        url,
        headers: { 'Content-Type': 'application/json' },
        data: formData,
        withCredentials: true, // Include session data
      });

      alert(response.data.message);
      window.location.reload();
      fetchLoker();
      setFormData({
        id: null,
        namaposisi: '',
        divisi: '',
        deadline: '',
        jobdeskripsi: '',
        techstack: '',
      });
    } catch (error) {
      console.error('Error saving loker:', error);
    }
  };

  // Handle editing a loker
  const handleEdit = (loker) => {
    setFormData(loker);
  };

  // Handle deleting a loker
  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Yakin ingin hapus loker ini?');

    if (isConfirmed) {
      axios
        .delete('/api/loker.php', {
          data: { id },
          withCredentials: true, // Include session data
        })
        .then((response) => {
          alert(response.data.message);
          fetchLoker();
        })
        .catch((error) => {
          console.error('Error deleting loker:', error);
        });
    }
  };

  const fullToolbarOptions = [
    [{ 'header': '1'}, { 'header': '2'}],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    // [{ 'script': 'sub'}, { 'script': 'super' }],
    // [{ 'indent': '-1'}, { 'indent': '+1' }],
    // [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ['clean']
  ];

  return (
    <div>
        <Accordion type="single" collapsible className='mb-12'>
          <AccordionItem value="item-1">
              <AccordionTrigger>Add New Loker</AccordionTrigger>
              <AccordionContent>
                  <form onSubmit={handleSubmit} className="mb-12 flex flex-col gap-4 p-2">
                      <div className="flex flex-col md:flex-row items-center gap-2">
                        <p htmlFor="nameposisi" className="text-sm md:w-[120px] w-full">
                            Posisi
                        </p>
                        <Input
                            id='nameposisi'
                            type="text"
                            name="namaposisi"
                            value={formData.namaposisi}
                            onChange={handleChange}
                            placeholder="E.g. Backend Developer"
                            className="p-2 w-full"
                            required
                        />
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-2">
                        <p htmlFor="divisi" className="text-sm md:w-[120px] w-full">
                            Divisi
                        </p>
                        <Input
                            id='divisi'
                            type="text"
                            name="divisi"
                            value={formData.divisi}
                            onChange={handleChange}
                            placeholder="E.g. Developer"
                            className="p-2 w-full"
                            required
                        />
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-2">
                        <p htmlFor="deadline" className="text-sm md:w-[120px] w-full">
                            Deadline
                        </p>
                        <Input
                            id='deadline'
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="p-2 w-full"
                            required
                        />
                      </div>
                      <div className="flex flex-col md:flex-row items-start gap-2 h-fit">
                        <p htmlFor="jobdesc" className="text-sm md:w-[120px] w-full md:pt-2">
                            Job Deskripsi
                        </p>
                        <ReactQuill
                            theme="snow"
                            value={formData.jobdeskripsi}
                            onChange={(content) => setFormData({ ...formData, jobdeskripsi: content })}
                            modules={{ toolbar: fullToolbarOptions }}
                            className="quill-editor w-full h-[200px] rounded mb-20 md:mb-12"
                            required
                        />
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-2">
                        <p htmlFor="techstack" className="text-sm md:w-[120px] w-full">
                            Stacks
                        </p>
                        <Input
                            id='techstack'
                            type="text"
                            name="techstack"
                            value={formData.techstack}
                            onChange={handleChange}
                            placeholder="E.g. Laravel, Vuejs, Bootstrap"
                            className="p-2 w-full"
                            required
                        />
                      </div>
                      <div className="flex items-center">
                      <p className="text-sm md:w-[120px] w-full invisible">
                          Tech Stacks
                      </p>
                      <Button type="submit" className="rounded-full mt-8">
                          {formData.id ? 'Update Loker' : 'Submit Loker'}
                      </Button>
                      </div>
                  </form>
              </AccordionContent>
          </AccordionItem>
        </Accordion>
    </div>
  );
};

export default AddLoker;
