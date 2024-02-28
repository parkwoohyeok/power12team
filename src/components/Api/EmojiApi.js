export const postEmoji = async (data) => {
  try {
    const response = await fetch(
      `https://rolling-api.vercel.app/4-12/recipients/2821/reactions/`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
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
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(), // body data type must match "Content-Type" header
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
