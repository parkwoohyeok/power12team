const API_BASE_URL = "https://rolling-api.vercel.app";

// 이미지 url 불러오는 api (GET)
export const fetchImageUrls = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/profile-images/`);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`,
      );
    }
    const data = await response.json();
    return data.imageUrls;
  } catch (error) {
    console.error("Error fetching image urls:", error);
    throw error;
  }
};

// 폼 데이터 전송 api (POST)
export const sendMessageData = async (recipientId, messageData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/4-12/recipients/${recipientId}/messages/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`,
      );
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API Error", error);
    throw error;
  }
};
