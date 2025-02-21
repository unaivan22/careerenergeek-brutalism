import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAdmin from '../utils/NavbarAdmin';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, Pencil, Trash2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddLoker from './AddLoker';
import { useNavigate } from 'react-router-dom';
import Footer from '../utils/Footer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from '@/components/ui/switch';
import Lottie from 'react-lottie-player';
import nojobData from '../lottie/nojob.json';

const Loker = () => {
  const [lokers, setLokers] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    namaposisi: '',
    divisi: '',
    deadline: '',
    jobdeskripsi: '',
    techstack: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLoker();
  }, []);

  const fetchLoker = async () => {
    try {
      const response = await axios.get('/api/loker.php', { withCredentials: true });
      setLokers(response.data);
    } catch (error) {
      console.error('Error fetching loker:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
        withCredentials: true,
      });

      alert(response.data.message);
      fetchLoker();
      setIsModalOpen(false); // Close modal after submission
    } catch (error) {
      console.error('Error saving loker:', error);
    }
  };

  const handleEdit = (loker) => {
    setFormData(loker);
    setIsModalOpen(true); // Open modal
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Yakin ingin hapus loker ini?');
    if (isConfirmed) {
      axios
        .delete('/api/loker.php', {
          data: { id },
          withCredentials: true,
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
    <div className="container">
      <NavbarAdmin />
      <h1 className="text-3xl font-bold mt-32 mb-4">Manage Loker</h1>
      <AddLoker />

      <h2 className="text-xl font-bold mb-4">Loker List</h2>
      {lokers.length === 0 ? (
        <div className="flex items-center justify-center h-[50vh]">
          <div className="flex flex-col gap-1 items-center justify-center text-center">
          <Lottie
            play
            loop
            animationData={nojobData}
            className='w-[300px] h-[300px]'
            />
            <p className="text-sm opacity-50 -translate-y-[50px]">No Applicants Yet</p>
          </div>
        </div>
        ) : (
        <Table className='mb-32 border'>
          <TableHeader>
            <TableRow>
              <TableHead>Job Position</TableHead>
              <TableHead>Division</TableHead>
              <TableHead className='text-center'>Deadline</TableHead>
              <TableHead className="w-[100px] text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lokers.map((loker) => (
              <TableRow key={loker.id}>
                <TableCell className='py-4'>{loker.namaposisi}</TableCell>
                <TableCell className='py-4'>{loker.divisi}</TableCell>
                <TableCell className='py-4 text-center'>{formatApplied(loker.deadline)}</TableCell>
                <TableCell className='py-4'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Opsi</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                      <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => handleEdit(loker)}>
                          <Pencil className='w-4 h-4 mr-2' />
                          <span>Edit Loker</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate(`/job/${loker.id}/applicant`)}>
                          <Users className='w-4 h-4 mr-2' />
                          <span>Applicant</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate(`/job/${loker.id}`)} target='_blank'>
                          <ArrowUpRight className='w-4 h-4 mr-2' />
                          <span>Detail</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleDelete(loker.id)} className='bg-rose-50 hover:bg-rose-100 text-rose-500 hover:text-rose-500 dark:bg-black'>
                        <Trash2 className='w-4 h-4 mr-2' />
                        <span>Hapus</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]">
          <div className="bg-white dark:bg-stone-800 p-6 rounded border-2 border-black shadow-md w-[500px]">
            <h3 className="text-lg font-bold mb-4">Edit Loker</h3>
            <form onSubmit={handleSubmit} className='h-[600px]'>
              <Input
                name="namaposisi"
                value={formData.namaposisi}
                onChange={handleChange}
                placeholder="Job Position"
                className="mb-4"
              />
              <Input
                name="divisi"
                value={formData.divisi}
                onChange={handleChange}
                placeholder="Division"
                className="mb-4"
              />
              <Input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="mb-4"
              />
              <div className='h-[330px]'>
                <ReactQuill
                  theme="snow"
                  value={formData.jobdeskripsi}
                  onChange={(content) => setFormData({ ...formData, jobdeskripsi: content })}
                  className="mb-4 h-[270px]"
                />
              </div>
              <Input
                name="techstack"
                value={formData.techstack}
                onChange={handleChange}
                placeholder="Tech Stacks"
                className="mb-4"
              />
              <div className="flex justify-end gap-4">
                <Button type="button" onClick={() => setIsModalOpen(false)} variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Loker;
