export const postEmoji = async (data) => {
  try {
    const response = await fetch(
      `https://rolling-api.vercel.app/4-12/recipients/2821/reactions/`,
      {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      throw new Error(`불러오는데 실패했습니다`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getEmoji = async () => {
  try {
    const response = await fetch(
      `https://rolling-api.vercel.app/4-12/recipients/2821/reactions/?limit=8`,
      {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(),
      },
    );
    if (!response.ok) {
      throw new Error(`이모지 정보를 불러오는데 실패했습니다`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
