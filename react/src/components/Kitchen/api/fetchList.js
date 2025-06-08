import axios from "axios";

const getList = async () => {
  try {
    const data = await axios.get("http://localhost:8092/listkitchen");
    const list = data.data.data;
    return list;
  } catch (error) {
    throw new Error(error);
  }
};

export default getList;
