const BASE_URL = "https://rolling-api.vercel.app";

export const getMessages = async (team, id, limit, offset) => {
  const RESPONSE = await fetch(
    `${BASE_URL}/${team}/recipients/${id}/messages/?limit=${limit}&offset=${offset}`,
  );

  if (!RESPONSE.ok) {
    throw new Error("메세지 목록을 받아오는데 실패했어요.");
  }

  const MESSAGES = await RESPONSE.json();

  return MESSAGES.results;
};
