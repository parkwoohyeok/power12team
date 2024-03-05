/* eslint-disable */

import { useEffect, useState } from "react";
import axiosInstance from "utils/axiosInstance";

const useGetRecipients = () => {
  const [isHotLoading, setIsHotLoading] = useState();
  const [isRecentLoading, setIsRecentLoading] = useState();
  const [hotData, setHotData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNextHotPage, setHasNextHotPage] = useState(true);
  const [hasNextRecentPage, setHasNextRecentPage] = useState(true);

  const fetchHotData = async () => {
    setIsHotLoading(true);
    try {
      const url = `recipients/?limit=4&offset=${offset}&sort=like`;
      const response = await axiosInstance.get(url);
      const newData = response?.data.results;
      setHotData((prevData) => [...prevData, ...newData]);
      if (response?.data.next !== null) {
        setOffset((prevOffset) => prevOffset + 4);
      } else {
        setHasNextHotPage(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsHotLoading(false);
  };

  const fetchRecentData = async () => {
    setIsRecentLoading(true);
    try {
      const url = `recipients/?limit=4&offset=${offset}`;
      const response = await axiosInstance.get(url);
      const newData = response?.data.results;
      setRecentData((prevData) => [...prevData, ...newData]);
      if (response?.data.next !== null) {
        setOffset((prevOffset) => prevOffset + 4);
      } else {
        setHasNextRecentPage(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsHotLoading(false);
  };

  return {
    isHotLoading,
    isRecentLoading,
    hotData,
    recentData,
    fetchHotData,
    fetchRecentData,
    hasNextHotPage,
    hasNextRecentPage,
  };
};

export default useGetRecipients;
