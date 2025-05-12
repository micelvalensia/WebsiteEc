import axios from 'axios';

export const getUsers = async () => {
  const res = await axios.get("http://localhost:8092/getuser");
  return res.data.data;
};
