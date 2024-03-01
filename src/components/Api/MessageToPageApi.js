import useAsync from "hooks/useAsync";
import axiosInstance from "utils/axiosInstance";

import ROLLING_URL from "./constants";

const postPaper = async (recipientData) => {
  const postPaper = () => {
    axiosInstance.post("recipients/", recipientData);
    const response = await postPaper();
    return {response}
  }
};
