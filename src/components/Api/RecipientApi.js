import axiosInstance from "../../utils/axiosInstance";

export const getRecipient = async (recipientId) => {
  const RESPONSE = await axiosInstance
    .get(`recipients/${recipientId}/`)
    .catch((error) => {
      throw new Error("사용자 정보를 받아오는데 실패했어요.");
    });

  return RESPONSE.data;
};

export const getMessages = async ({ recipientId, limit, offset }) => {
  const RESPONSE = await axiosInstance
    .get(`recipients/${recipientId}/messages/?limit=${limit}&offset=${offset}`)
    .catch((error) => {
      throw new Error("메세지 목록을 받아오는데 실패했어요.");
    });

  return RESPONSE.data;
};

export const deleteMessage = async (id) => {
  const RESPONSE = await axiosInstance
    .delete(`messages/${id}/`)
    .catch((error) => {
      throw new Error("메세지가 존재하지 않거나 지워지지 않았어요.");
    });

  return RESPONSE.status;
};
