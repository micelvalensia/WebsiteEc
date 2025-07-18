import React from 'react'
import LayoutAdmin from '../components/admin/layouts/LayoutAdmin'
import { useAuth } from '../components/admin/api/useAuth';
import Loading from '../components/loading/Loading';
import { useNavigate } from 'react-router';
import History from '../components/admin/history';

function AdminHistory() {
   const isAuthenticated = useAuth();
   const navigate = useNavigate();

  if (isAuthenticated === null) return <Loading />;
  if (!isAuthenticated) return navigate("/admin/login");
   
  return (
     <LayoutAdmin activePage={'history'}>
        <div className="p-10 w-full min-h-screen">
            <History />
        </div>
     </LayoutAdmin>
  )
}

export default AdminHistory
