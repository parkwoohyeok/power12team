import axiosInstance from "utils/axiosInstance";

const useGetEmoji = async (id) => {
  const getEmoji = () => axiosInstance.get(`recipients/${id}/reactions/`);
  const response = await getEmoji();
  const { data } = response;
  return data;
};

export default useGetEmoji;
