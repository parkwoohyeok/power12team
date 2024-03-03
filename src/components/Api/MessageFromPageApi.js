import axios from "axios";

const API_BASE_URL = "https://rolling-api.vercel.app";

// 이미지 url 불러오는 api (GET)
export const fetchImageUrls = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile-images/`);
    return response.data.imageUrls;
  } catch (error) {
    console.error("Error fetching image urls:", error);
    throw error;
  }
};

// 폼 데이터 전송 api (POST)
export const sendMessageData = async (recipientId, messageData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/4-12/recipients/${recipientId}/messages/`,
      messageData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("API Error", error);
    throw error;
  }
};
