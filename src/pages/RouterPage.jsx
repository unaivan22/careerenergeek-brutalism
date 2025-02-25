import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './Admin';
import Login from './Login';
import Home from './Home';
import JobDetail from './JobDetail';
import Loker from './loker/Loker';
import Applicant from './Applicant';
import NotFound from './NotFound';
import AllTeams from './AllTeams';
import OnlyLogin from './OnlyLogin';


const RouterPage = () => {
  const isAuthenticated = sessionStorage.getItem('adminAuth');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<AllTeams />} />
        <Route 
          path="/admin-rJWbRV" 
          element={isAuthenticated ? <Admin /> : <Navigate to="/IUgM0pcSTnifR7AU" />} 
        />
        <Route path="/IUgM0pcSTnifR7AU" element={<Login />} />
        <Route path="/admin" element={<OnlyLogin />} />
        <Route 
          path="/loker-rJWbRV" 
          element={isAuthenticated ? <Loker /> : <Navigate to="/IUgM0pcSTnifR7AU" />} 
        />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route 
          path="/job/:jobId/applicant" 
          element={isAuthenticated ? <Applicant /> : <Navigate to="/" />} 
        />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default RouterPage;