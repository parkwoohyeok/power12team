import axiosInstance from "utils/axiosInstance";

const usePostEmoji = async (id, postData) => {
  const postEmoji = () =>
    axiosInstance.post(`recipients/${id}/reactions/`, postData);
  const response = await postEmoji();
  return { response };
};

export default usePostEmoji;
