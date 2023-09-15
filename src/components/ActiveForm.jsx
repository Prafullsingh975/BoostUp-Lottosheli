/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import DashboardHead from "./DashboardHead";
import { Link } from "react-router-dom";
import ActiveFromData from "./ActiveFormData";
import axios from "axios";

const navData = [
  "More details",
  "sending status",
  "Form cost",
  "Date",
  "Game and lottery number",
];
// const userInfo = JSON.parse(localStorage.getItem("userInfo"));


export default function ActiveForm() {
  const [activeFormData, setActiveFormData] = useState();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  //Api Calls
  const fetchActiveForm = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
          "Content-type": "application/json",
        },
      };
      try {
        const { data } = await axios.get(
          `http://localhost:5050/api/user/active-game`,
          config,
        );
        setActiveFormData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        return error;
      }
    
  };

  useEffect(()=>{
    fetchActiveForm();
  },[])

  
  return (
    <div className={`flex h-full w-full flex-col`}>
      <DashboardHead navData={navData} />
      {activeFormData ? (
        <ActiveFromData data={activeFormData} />
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
          <p className="my-3 text-2xl font-semibold">
            Hello {userInfo.name} <br />
            You do not have active forms
          </p>
          <Link to="/lotto/regular">
            <button className=" rounded-full bg-green-500 p-5 py-2 text-white shadow-xl shadow-gray-400">
              Send form
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
