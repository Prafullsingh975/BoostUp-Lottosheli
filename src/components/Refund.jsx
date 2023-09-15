import React from "react";
import Data from "./refundData";
import DashboardHead from "./DashboardHead";

const navData = ["Play", "Total in Rs. ", "Date", "A Number"];
export default function Refund() {
  return (
    <div className="flex flex-col">
      <DashboardHead navData={navData} />
      <Data />
    </div>
  );
}
