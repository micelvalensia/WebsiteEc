import React, { useState } from 'react'
import LayoutAdmin from '../components/admin/layouts/LayoutAdmin'
import axios from "axios"
import { useNavigate } from 'react-router'
import { useAuth } from '../components/admin/api/useAuth'
import Loading from '../components/loading/Loading'
import AdminPlus from '../components/admin/AdminPlus'

const AdminAdd = () => {
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    if (isAuthenticated === null) return <Loading />;
    if (!isAuthenticated) return navigate("/admin/login");

  return (
    <LayoutAdmin activePage={'add'}>
        <AdminPlus />
    </LayoutAdmin>
  )
}

export default AdminAdd
