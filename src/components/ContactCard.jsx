import React from "react";

export default function ContactCard(props) {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center gap-3 md:w-1/3">
      {props.icon}
      <p className="scale-x-75 text-2xl uppercase text-slate-500">
        {props.title}
      </p>
      <p className="scale-x-90 text-2xl ">{props.details}</p>
    </div>
  );
}
