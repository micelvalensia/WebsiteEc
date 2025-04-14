import React from "react";
import LayoutAdmin from "../components/admin/layouts/LayoutAdmin";
import AdminHome from "../components/admin/AdminHome";

function AdminDashboard() {
  return (
    <LayoutAdmin>
      <AdminHome />
    </LayoutAdmin>
  );
}

export default AdminDashboard;
