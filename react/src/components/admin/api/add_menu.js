import axios from "axios";

export const submitMenuForm = async (values) => {
  const formData = new FormData();
  formData.append("nama", values.nama);
  formData.append("harga", values.harga);
  formData.append("type", values.type);
  formData.append("gambar", values.gambar);

  const response = await axios.post("http://localhost:8092/addmenu", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
