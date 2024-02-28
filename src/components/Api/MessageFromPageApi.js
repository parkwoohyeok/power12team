const API_BASE_URL = "https://rolling-api.vercel.app/4-12";

const sendMessageData = async (recipientId, messageData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/recipients/${recipientId}/messages/`,
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

export default sendMessageData;
