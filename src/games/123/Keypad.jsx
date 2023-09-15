import { useContext } from "react";
import { context } from "./Game";

export default function Keypad() {
  const { state, dispatch } = useContext(context);

  return (
    <div className="flex h-fit w-fit flex-col gap-2 overflow-hidden rounded-xl border-2 border-blue-500 bg-blue-200 shadow-table">
      <div className="bg-blue-500 py-1 text-center text-white">
        Select one number
      </div>
      <div className="my-1 flex items-center justify-between gap-2 px-3">
        <button
          onClick={() => dispatch({ type: "DEC_INPUT" })}
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
            onClick={() => dispatch({ type: "CLEAR_SINGLE" })}
            className="rounded-full bg-white px-2 py-1"
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
            className="rounded-full bg-blue-600 px-2 py-1 text-sm font-bold text-white"
            onClick={() => {
              dispatch({ type: "FILL_SINGLE" });
              dispatch({ type: "INC_TABLE" });
            }}
          >
            fill current table
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: "INC_INPUT" })}
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
      <div className="m-3 mt-0 grid grid-cols-3 place-items-center gap-2 rounded-md bg-white p-6">
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <button
              key={`BKHKJ#45${idx}`}
              onClick={() => {
                dispatch({ type: "UPDATE_INPUT_VALUE", payload: idx });
                dispatch({ type: "INC_INPUT" });
              }}
              className={`${
                state.tables[state.activeTable].vals[
                  state.tables[state.activeTable].activeInput
                ] === idx
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-slate-300 bg-slate-100 text-black hover:bg-slate-200"
              } grid h-14 w-14 place-items-center rounded text-lg hover:shadow-lg ${
                idx === 0 ? "col-start-2 row-start-4 w-full" : ""
              }`}
            >
              {idx}
            </button>
          ))}
      </div>
    </div>
  );
}
