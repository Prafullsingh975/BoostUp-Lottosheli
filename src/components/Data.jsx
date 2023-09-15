import React from "react";

export default function Data({ data }) {
  const deposit = data.map((data) => (
    <div className="flex justify-between border-b-2 px-5 pb-1">
      <p className="">{data.total}</p>
      <p>{data.date}</p>
      <p>{data.number}</p>
    </div>
  ));

  return (
    <div className="flex h-[90vh] flex-col gap-3 overflow-y-scroll scroll-smooth">
      {deposit}
    </div>
  );
}
