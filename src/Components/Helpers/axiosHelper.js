import axios from "axios";
const apiEndPoint = "https://www.omdbapi.com/?i=tt3896198&apikey=f6b3e200&&";

export const fetchMoviesinfo = async (title) => {
  try {
    const url = apiEndPoint + "t=" + title;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
