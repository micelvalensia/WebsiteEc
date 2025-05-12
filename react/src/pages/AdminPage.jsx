import React, { useEffect } from 'react'
import { useAuth } from '../components/admin/api/useAuth.js';
import { useNavigate } from 'react-router';
import Dashboard from '../components/admin/Dashboard.jsx';
import Loading from '../components/loading/Loading.jsx';

const AdminPage = () => {
    const isAuthenticated = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
      if (isAuthenticated === false) {
          navigate("/admin/login");
      }
    }, [isAuthenticated, navigate]); 

    if (isAuthenticated === null) return <Loading />;
    if (!isAuthenticated) return null;

  return (
    <div className="">
      <Dashboard />
    </div>
  )
}

export default AdminPage
