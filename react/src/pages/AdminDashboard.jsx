import React from "react";
import LayoutAdmin from "../components/admin/layouts/LayoutAdmin";
import AdminHome from "../components/admin/AdminHome";
import { useAuth } from "../components/admin/api/useAuth";
import Loading from "../components/loading/Loading";
import { useNavigate } from "react-router";

function AdminDashboard() {
    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    if (isAuthenticated === null) return <Loading />;
    if (!isAuthenticated) return navigate("/admin/login");

  return (
    <LayoutAdmin activePage={'index'}>
      <AdminHome />
    </LayoutAdmin>
  );
}

export default AdminDashboard;
