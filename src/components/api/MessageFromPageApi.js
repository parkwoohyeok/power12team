import axios from "axios";
import axiosInstance from "utils/axiosInstance";

const API_BASE_URL = "https://rolling-api.vercel.app";

// 이미지 url 불러오는 api (GET)
export const fetchImageUrls = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile-images/`);
    return response.data.imageUrls;
  } catch (error) {
    throw new Error("Error fetching image urls:", error);
  }
};

// 폼 데이터 전송 api (POST)
export const sendMessageData = async (recipientId, messageData) => {
  try {
    const response = await axiosInstance.post(
      `recipients/${recipientId}/messages/`,
      messageData,
    );
    return response.data;
  } catch (error) {
    throw new Error("API Error", error);
  }
};
