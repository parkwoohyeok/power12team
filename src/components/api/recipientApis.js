import axiosInstance from "../../utils/axiosInstance";

export const fetchRecipient = async (recipientId) => {
  const RESPONSE = await axiosInstance
    .get(`recipients/${recipientId}/`)
    .catch((error) => {
      throw error;
    });

  return RESPONSE.data;
};

export const fetchMessages = async ({ recipientId, limit, offset }) => {
  const RESPONSE = await axiosInstance
    .get(`recipients/${recipientId}/messages/?limit=${limit}&offset=${offset}`)
    .catch((error) => {
      throw error;
    });

  return RESPONSE.data;
};

export const deleteMessage = async (id) => {
  const RESPONSE = await axiosInstance
    .delete(`messageds/${id}/`)
    .catch((error) => {
      throw error;
    });

  return RESPONSE.status;
};
