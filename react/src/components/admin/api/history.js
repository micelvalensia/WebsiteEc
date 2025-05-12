import axios from "axios"

export const getHistory = async (callback) => {
  try {
    const history = await axios.get("http://localhost:8092/history")
    callback(history.data.data)
  } catch (error) {
    console.log(error)
  }
}