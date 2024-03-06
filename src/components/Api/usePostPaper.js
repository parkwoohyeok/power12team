/* eslint-disable */
import axiosInstance from "utils/axiosInstance";

const usePostPaper = async (recipientData) => {
  try {
    const response = await axiosInstance.post("recipients/", recipientData);
    return response.data;
  } catch (error) {
    throw new Error(`"Error fetching data:", ${error.message}`);
  }
};

export default usePostPaper;
