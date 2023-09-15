import React, { useEffect, useState } from "react";
import DashboardHead from "./DashboardHead";
import Data from "./winningData";
import axios from "axios";

const navData = ["form", "Play", "Total in Rs. ", "Date", "A Number"];
export default function Winning() {
  const [winningData, setWinningData] = useState();

  //Api Calls
  const fetchWinning = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        `http://localhost:5050/api/user/winning`,
        config,
      );
      console.log(data);
      setWinningData(data);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  useEffect(() => {
    fetchWinning();
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <DashboardHead navData={navData} />
        <Data data={winningData} />
      </div>
    </>
  );
}
