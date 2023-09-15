/* eslint-disable no-sparse-arrays */
import React from "react";
import certify from "../assets/certificate.png";

export default function winningData() {
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

  const winning = data.map((data) => (
    <div className="relative flex justify-between border-b-2 px-3 pb-1">
      <a
        target="_blank"
        href={certify}
        className="fr rounded bg-blue-500 p-1 text-white"
      >
        view form
      </a>

      <p className="">{data.play}</p>
      <p className="ml-10">{data.total}</p>
      <p>{data.date}</p>
      <p>{data.number}</p>
    </div>
  ));

  return (
    <div className="flex h-[90vh] flex-col gap-3 overflow-y-scroll scroll-smooth">
      {winning}
    </div>
  );
}
