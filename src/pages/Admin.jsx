import { Button } from '@/components/ui/button';
import { DatabaseBackup, Pencil, Trash2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import NavbarAdmin from './utils/NavbarAdmin';
import Footer from './utils/Footer';


const Admin = () => {
  const [users, setUsers] = useState([]);  // State to hold the users
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', role: 'admin' });
  const [loading, setLoading] = useState(true);  // State to handle loading
  const [error, setError] = useState(null); // For handling errors
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/admin.php', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('adminAuth')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data);  // Set the users in state
        } else {
          const error = await response.json();
          alert(error.message || 'Failed to fetch users');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching users');
      } finally {
        setLoading(false);  // Set loading to false after the request completes
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const response = await fetch('/api/signup.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setNewUser({ username: '', email: '', password: '', role: 'admin' }); // Reset form
        // Optionally, refetch the users after creating a new one
        setLoading(true);  // Trigger loading again
        await fetchUsers();
      } else {
        const error = await response.json();
        setError(error.message);
      }
    } catch (error) {
      setError('An error occurred while adding the user');
      console.error(error);
      handleRefresh()
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/admin.php?id=${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // If using authentication, include the auth token
          'Authorization': `Bearer ${sessionStorage.getItem('adminAuth')}`,
        },
        credentials: 'include', // Include credentials if needed
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to delete user');
      } else {
        const data = await response.json();
        alert(data.message || 'User deleted successfully');
        // Optionally, refetch users after deletion
        setLoading(true);
        fetchUsers();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the user');
    }
  };
  
  
  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleResetPassword = async (userId) => {
    const confirmReset = window.confirm("Are you sure you want to reset the password for this user?");
    if (!confirmReset) return;
  
    const defaultPassword = "3n3rg33kloker";  // Default password
  
    try {
      const response = await fetch('/api/reset-password.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('adminAuth')}`,
        },
        body: JSON.stringify({ userId, password: defaultPassword }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response text:", errorText);
        alert("Failed to reset password");
        return;
      }
  
      const data = await response.json();
      alert(data.message || "Password reset successfully");
  
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while resetting the password');
    }
  };  
  
  const handleUpdateUser = async () => {
    try {
      const response = await fetch('/api/admin.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('adminAuth')}`,
        },
        body: JSON.stringify(selectedUser),
      });
  
      if (response.ok) {
        alert("User updated successfully");
        setSelectedUser(null);  // Reset selected user
        setLoading(true);  // Reload users after update
        await fetchUsers();
      } else {
        const error = await response.json();
        alert(error.message || "Failed to update user");
      }
    } catch (error) {
      console.error('Error:', error);
      // alert('An error occurred while updating the user');
      handleRefresh()
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <NavbarAdmin />
      <div className='flex gap-4 mb-4 mt-32'>
        <h1 className="text-3xl font-bold">User Admin Manajemen</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='rounded-full'>Tambah User</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tambah User</DialogTitle>
              <DialogDescription>
                Silahkan isi semua form
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                <p htmlFor="username" className="text-sm w-[120px]">
                  Username
                </p>
                <Input
                  id='username'
                  type="text"
                  placeholder="Username"
                  value={newUser.username}
                  onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                  required
                />
              </div>
              <div className="flex items-center gap-4">
                <p htmlFor="email" className="text-sm w-[120px]">
                  Email
                </p>
                <Input
                  id='email'
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-4">
                <p htmlFor="password" className="text-sm w-[120px]">
                  Password
                </p>
                <Input
                  id='password'
                  type="password"
                  placeholder="Password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-4">
                <p htmlFor="Role" className="text-sm w-[120px]">
                  Role
                </p>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="border p-2 w-full rounded text-sm dark:bg-black"
                >
                  <option value="admin">Admin</option>
                  <option value="superadmin">Super Admin</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddUser}>Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      {/* Users Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table className='border shadow-sm'>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">ID</TableHead> */}
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="w-[200px] text-center">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
              <TableRow>
                <TableCell className="text-center p-2 w-full">No users found</TableCell>
              </TableRow>
            ) : (
              users.map(user => (
                <TableRow key={user.id}>
                  {/* <TableCell className="p-2">{user.id}</TableCell> */}
                  <TableCell className="">{user.username}</TableCell>
                  <TableCell className="">{user.email}</TableCell>
                  <TableCell className="">{user.role}</TableCell>
                  <TableCell className="flex gap-3">
                    <Button size='icon' className='rounded-2xl' variant='destructive' onClick={() => handleDeleteUser(user.id)}>
                      <Trash2 className='w-4 h-4'/>
                    </Button>
                    <Button className='rounded-2xl' variant='outline' onClick={() => handleEditUser(user)}>
                      <Pencil className='w-4 h-4 mr-2' /> Edit
                    </Button>
                    <Button size='icon' className='rounded-2xl' variant='outline' onClick={() => handleResetPassword(user.id)}>
                      <DatabaseBackup className='w-4 h-4'/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
        </TableBody>
      </Table>
      )}
      
      <Dialog open={selectedUser !== null} onOpenChange={() => setSelectedUser(null)}>
  {/* <DialogTrigger asChild>
    <Button className='rounded-2xl' variant='outline' onClick={() => handleEditUser(user)}>
      <Pencil className='w-4 h-4 mr-2' /> Edit
    </Button>
  </DialogTrigger> */}
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit User</DialogTitle>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="flex items-center gap-4">
        <p className="text-sm w-[120px]">Username</p>
        <Input
          type="text"
          value={selectedUser?.username || ''}
          onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })}
        />
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm w-[120px]">Email</p>
        <Input
          type="email"
          value={selectedUser?.email || ''}
          onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
        />
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm w-[120px]">Role</p>
        <select
          value={selectedUser?.role || 'admin'}
          onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
          className="border p-2 w-full rounded text-sm dark:bg-black"
        >
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>
        </select>
      </div>
    </div>
    <DialogFooter>
      <Button onClick={handleUpdateUser}>Update</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
    {/* <Footer /> */}
    </div>
  );
};

export default Admin;
