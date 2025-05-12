import axios from 'axios';
import Swal from 'sweetalert2';

export const handleDelete = (id, setList, setLoading) => {
  setList((prev) => prev.filter(item => item.id !== id));
  setLoading(true);

  axios.post(`http://localhost:8092/delete/${id}`)
    .then((res) => {
      setLoading(false);
      Swal.fire({
        title: 'Data terhapus!',
        text: "Data yang anda pilih berhasil dihapus",
        icon: "success",
        timer: 3000,
        showConfirmButton: false
      });
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
};
