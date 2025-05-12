import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import LayoutAdmin from "../components/admin/layouts/LayoutAdmin";
import Swal from "sweetalert2";
import FoodForm from "../components/admin/FoodForm";
import useFood from "../components/admin/api/edit";
import { useAuth } from "../components/admin/api/useAuth";
import Loading from "../components/loading/Loading";

const EditMakanan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isAuthenticated = useAuth();

  if (isAuthenticated === null) return <Loading />;
  if (!isAuthenticated) return navigate("/admin/login");

  const { form, preview, loading, handleChange, handleSubmit } = useFood(id);

  const onSubmit = async (e) => {
    const result = await handleSubmit(e);
    if (result.success) {
      Swal.fire({
        title: "Berhasil!",
        text: result.message,
        icon: "success",
        timer: 3000,
      }).then(() => navigate("/admin/crud"));
    } else {
      Swal.fire({
        title: "Gagal!",
        text: result.message,
        icon: "error",
      });
    }
  };

  return (
    <LayoutAdmin>
      <div className="w-full min-h-screen p-10">
        <h2 className="text-2xl font-semibold mb-5">Edit Makanan</h2>
        <FoodForm
          form={form}
          preview={preview}
          handleChange={handleChange}
          handleSubmit={onSubmit}
        />
      </div>
    </LayoutAdmin>
  );
};

export default EditMakanan;
