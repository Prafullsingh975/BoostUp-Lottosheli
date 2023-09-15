import { useState } from "react";

export default function KeyPad({
  activeInput,
  setActiveInput,
  values,
  setValues,
  fillRandomVals,
  activeButton,
  setActiveButton,
  totalNumbers,
}) {
  function handleClick(val) {
    const arr = [...values[activeInput]];
    if (arr[activeButton[activeInput]] !== -1) return;

    arr[activeButton[activeInput]] = val;

    const activeButtonCopy = [...activeButton];
    activeButtonCopy[activeInput] += 1;

    setActiveButton(activeButtonCopy);

    const valCopy = [...values];
    valCopy[activeInput] = arr;
    setValues(valCopy);
  }

  function isActiveKey(idx, val) {
    const arr = [...values[idx]];
    return arr.find((item) => item === val);
  }

  function setNewInput(seed) {
    let val = (activeInput + seed) % values.length;
    let active = val < 0 ? values.length - 1 : val;
    console.log(active);
    setActiveInput(active);
  }

  function clearCurrentInputRow() {
    const valsCopy = [...values];
    valsCopy[activeInput].fill(-1);
    setValues(valsCopy);

    const active = [...activeButton];
    active[activeInput] = 0;
    setActiveButton(active);
  }

  return (
    <div className="h-fit w-fit overflow-hidden rounded-2xl border-2 border-blue-500 bg-blue-200 shadow-table">
      <div className="mb-2 w-full bg-blue-500 px-2 py-1 text-center font-bold text-white">
        Select total {totalNumbers} numbers
      </div>
      <div className="mb-2 flex items-center justify-between px-2">
        <button
          onClick={() => setNewInput(-1)}
          className="grid h-8 w-8 place-items-center rounded-full bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => clearCurrentInputRow(activeInput)}
            className="rounded bg-white p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash-x-filled"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                strokeWidth="0"
                fill="currentColor"
              />
              <path
                d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
                strokeWidth="0"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            className="rounded bg-blue-600 px-2 py-1 text-sm font-bold text-white"
            onClick={() => fillRandomVals(activeInput)}
          >
            fill current table
          </button>
        </div>
        <button
          onClick={() => setNewInput(1)}
          className="grid h-8 w-8 place-items-center rounded-full bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </div>
      <div className="m-2 grid w-fit grid-cols-7 gap-2 rounded-lg bg-white p-2">
        {Array(70)
          .fill(-1)
          .map((_el, idx) => (
            <button
              onClick={() => handleClick(idx + 1)}
              key={`asfd${idx}`}
              className={`${
                isActiveKey(activeInput, idx + 1)
                  ? "pointer-events-none cursor-not-allowed border-blue-600 bg-blue-600 text-white"
                  : "cursor-pointer bg-slate-200 hover:border-blue-400"
              } h-8 w-8 rounded border-2`}
            >
              {idx + 1}
            </button>
          ))}
      </div>
    </div>
  );
}
