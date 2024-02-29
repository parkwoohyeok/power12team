/* eslint-disable */
import axiosInstance from "utils/axiosInstance";

const useGetRecipients = async () => {
  const getRecipients = () => axiosInstance.get("recipients/");
  const response = await getRecipients();
  const data = response.data;
  return { data };
};

export default useGetRecipients;
