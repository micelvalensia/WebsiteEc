import axios from 'axios';

export const getPemasukan = async () => {
  const res = await axios.get("http://localhost:8092/pemasukan");
  return res.data;
};
