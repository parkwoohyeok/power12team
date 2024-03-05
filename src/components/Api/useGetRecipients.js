/* eslint-disable */

import { useEffect, useState } from "react";
import axiosInstance from "utils/axiosInstance";

const useGetRecipients = () => {
  const [hotData, setHotData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchHotData = async () => {
    try {
      const url = `recipients/?limit=4&offset=${offset}&sort=like`;
      const response = await axiosInstance.get(url);
      const newData = response?.data.results;
      setHotData((prevData) => [...prevData, ...newData]);
      if (response?.data.next !== null) {
        setOffset((prevOffset) => prevOffset + 4);
      } else {
        setHasNextPage(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchRecentData = async () => {
    try {
      const url = `recipients/?limit=4&offset=${offset}`;
      const response = await axiosInstance.get(url);
      const newData = response?.data.results;
      setRecentData((prevData) => [...prevData, ...newData]);
      const hasNextPage = response?.data.next !== null;
      if (hasNextPage) {
        setOffset((prevOffset) => prevOffset + 4);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { hotData, recentData, fetchHotData, fetchRecentData, hasNextPage };
};

export default useGetRecipients;
