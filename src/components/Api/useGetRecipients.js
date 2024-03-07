/* eslint-disable */

import { useState } from "react";
import axiosInstance from "utils/axiosInstance";

const useGetRecipients = () => {
  const [isHotLoading, setIsHotLoading] = useState(false);
  const [isRecentLoading, setIsRecentLoading] = useState(false);
  const [hotData, setHotData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [Hotoffset, setHotOffset] = useState(0);
  const [Recentoffset, setRecentOffset] = useState(0);
  const [hasNextHotPage, setHasNextHotPage] = useState(true);
  const [hasNextRecentPage, setHasNextRecentPage] = useState(true);

  const fetchHotData = async () => {
    setIsHotLoading(true);
    try {
      const url = `recipients/?limit=4&offset=${Hotoffset}&sort=like`;
      const response = await axiosInstance.get(url);

      const newData = response?.data.results;
      setHotData((prevData) => [...prevData, ...newData]);
      if (response?.data.next !== null) {
        setHotOffset((prevOffset) => prevOffset + 4);
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
      const url = `recipients/?limit=4&offset=${Recentoffset}`;
      const response = await axiosInstance.get(url);
      const newData = response?.data.results;
      setRecentData((prevData) => [...prevData, ...newData]);
      if (response?.data.next !== null) {
        setRecentOffset((prevOffset) => prevOffset + 4);
      } else {
        setHasNextRecentPage(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsRecentLoading(false);
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
    setHotOffset,
  };
};

export default useGetRecipients;
