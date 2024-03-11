import axios from "axios";

const API_BASE_URL = "https://rolling-api.vercel.app/";

const fetchBackgroundImageUrls = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}background-images/`);
    if (response.status !== 200) {
      throw new Error("Error fetching image urls:", response.status);
    }
    return response.data.imageUrls;
  } catch (error) {
    throw new Error("API Error", error);
  }
};

export default fetchBackgroundImageUrls;
