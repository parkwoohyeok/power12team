import axiosInstance from "utils/axiosInstance";

const useCreatePaper = async (recipientData) => {
  const postPaper = () => {
    axiosInstance.post("recipients/", recipientData);
    const response = await postPaper();
    return response.data
  };
};

export default useCreatePaper;
