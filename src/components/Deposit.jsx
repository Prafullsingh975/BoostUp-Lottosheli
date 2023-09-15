import React from "react";
import DashboardHead from "./DashboardHead";
import Data from "./Data";

const navData = ["Total in Rs. ", "Date", "A Number"];
export default function Deposit({ data }) {
  return (
    <div className="flex flex-col">
      <DashboardHead navData={navData} />
      <Data data={data} />
    </div>
  );
}
