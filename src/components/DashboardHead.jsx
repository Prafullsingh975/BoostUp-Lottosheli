import React from "react";

export default function DashboardHead({ navData }) {
  const nav = navData.map((navdata) => <p>{navdata}</p>);
  return (
    <div className="flex w-full justify-between bg-[#EBEBEB] p-3">{nav}</div>
  );
}
