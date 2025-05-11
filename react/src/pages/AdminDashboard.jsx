import React from "react";
import LayoutAdmin from "../components/admin/layouts/LayoutAdmin";
import AdminHome from "../components/admin/AdminHome";

function AdminDashboard() {
  return (
    <LayoutAdmin activePage={'index'}>
      <AdminHome />
    </LayoutAdmin>
  );
}

export default AdminDashboard;
