import axios from "axios";
import Swal from "sweetalert2";

export const updateStatus = async (id, status, callback) => {
  try {
    await axios.put(`http://localhost:8092/update-status/${id}`, {
      status: status,
    });
    Swal.fire("Status Berhasil diubah!");
    await callback();
  } catch (error) {
    console.error("Gagal update status:", error);
  }
};
