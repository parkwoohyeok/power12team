import axiosInstance from "utils/axiosInstance";

const usePostPaper = async (recipientData) => {
  try {
    const response = await axiosInstance.post("recipients/", recipientData);
    if (response.status !== 200) {
      throw new Error("Error fetching data:", response.status);
    }
    return response.data;
  } catch (error) {
    throw new Error("API Error", error);
  }
};

export default usePostPaper;
