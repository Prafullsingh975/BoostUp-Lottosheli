import React, { useEffect, useState } from "react";
import DashboardHead from "./DashboardHead";
import Data from "./historyData";
import axios from "axios";

const navData = [
  "More details",
  "Duplicate form",
  "Form cost",
  "date",
  "Game and lottery number",
];
export default function History() {
   const [historyData, setHistoryData] = useState();

   //Api Calls
   const fetchHistory = async () => {
     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
     const config = {
       headers: {
         Authorization: `Bearer ${userInfo?.token}`,
         "Content-type": "application/json",
       },
     };
     try {
       const { data } = await axios.get(
         `http://localhost:5050/api/user/history`,
         config,
       );
       console.log(data);
       setHistoryData(data);
     } catch (error) {
       console.error(error);
       return error;
     }
   };

   useEffect(() => {
     fetchHistory();
   }, []);
  return (
    <>
      <div className="flex flex-col">
        <DashboardHead navData={navData} />
        <Data data={historyData} />
      </div>
    </>
  );
}
