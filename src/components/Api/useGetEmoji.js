/* eslint-disable */
import axiosInstance from "utils/axiosInstance";

const useGetEmoji = async () => {
  const getEmoji = () => axiosInstance.get("recipients/2821/reactions/");
  const response = await getEmoji();
  const data = response.data;
  return { data };
};

export default useGetEmoji;
