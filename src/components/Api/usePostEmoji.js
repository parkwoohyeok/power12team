/* eslint-disable */
import axiosInstance from "utils/axiosInstance";

const usePostEmoji = async (postData) => {
  const postEmoji = () =>
    axiosInstance.post("recipients/2821/reactions/", postData);
  const response = await postEmoji();
  return { response };
};

export default usePostEmoji;
