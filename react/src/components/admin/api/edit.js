import { useState, useEffect } from 'react';
import axios from 'axios';
import { getOneFood } from './menu';

const useFood = (id) => {
  const [form, setForm] = useState({
    makanan: '',
    harga: '',
    gambar: '',
    kategori: '',
  });
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFood = async () => {
      setLoading(true);
      try {
        const foodData = await getOneFood(id);
        setForm({
          makanan: foodData.makanan,
          harga: foodData.harga,
          gambar: foodData.gambar,
          kategori: foodData.kategori,
        });
        setPreview(`http://localhost:8092/${foodData.gambar}`);
      } catch (error) {
        console.error('Error fetching food data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getFood();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'gambar') {
      setForm({ ...form, gambar: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('makanan', form.makanan);
    formData.append('harga', form.harga);
    formData.append('kategori', form.kategori);
    if (form.gambar instanceof File) {
      formData.append('gambar', form.gambar);
    }

    try {
      await axios.post(`http://localhost:8092/update/${id}`, formData);
      return { success: true, message: 'Data makanan berhasil diperbarui.' };
    } catch (error) {
      console.error('Error updating food data:', error);
      return { success: false, message: 'Gagal memperbarui data makanan.' };
    }
  };

  return {
    form,
    preview,
    loading,
    handleChange,
    handleSubmit,
  };
};

export default useFood;
