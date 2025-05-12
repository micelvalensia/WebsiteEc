import axios from 'axios';

export const getFoods = async () => {
  const res = await axios.get("http://localhost:8092/getfood");
  return res.data.data;
}

export const getOneFood = async (id) => {
  const res = await axios.get(`http://localhost:8092/getfood/${id}`);
  return res.data.data;
}

export const getTopFoods = async () => {
  const res = await axios.get("http://localhost:8092/topfoods");
  return res.data.data;
};

export const getChartData = async (type) => {
  const res = await axios.get(`http://localhost:8092/chart/${type}`);
  return res.data;
};
