import React from "react";

export default function refundData() {
  const data = [
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
    ,
    {
      play: "round",
      total: "6.58",
      date: "12/20/3034 - 15:05",
      number: "1595634786",
    },
  ];

  const refund = data.map((data) => (
    <div className="flex justify-between border-b-2 px-3 pb-1">
      <p className="">{data.play}</p>
      <p className="ml-10">{data.total}</p>
      <p>{data.date}</p>
      <p>{data.number}</p>
    </div>
  ));

  return (
    <div className="flex h-[90vh] flex-col gap-3 overflow-y-scroll scroll-smooth">
      {refund}
    </div>
  );
}
