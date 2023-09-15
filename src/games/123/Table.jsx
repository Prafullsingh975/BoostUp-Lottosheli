import { useContext } from "react";
import { context } from "./Game";

export default function Table() {
  const { state, dispatch } = useContext(context);

  return (
    <div className="flex flex-col items-center justify-between gap-2">
      <div className="flex h-fit w-fit flex-col gap-2 rounded-xl border-2 border-white bg-slate-200 p-3">
        <div className="flex gap-2">
          <button
            onClick={() => dispatch({ type: "CLEAR_ALL" })}
            className="rounded-full bg-white p-1 px-2"
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
            onClick={() => dispatch({ type: "FILL_ALL" })}
            className="rounded-full bg-blue-600 px-2 py-1 text-sm font-bold text-white"
          >
            fill out form
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {state.tables.map((table, idx) => (
            <div
              onClick={() => dispatch({ type: "UPDATE_TABLE", payload: idx })}
              key={`KJSHKJDF${idx}`}
              className={`${
                state.activeTable === idx
                  ? "relative rounded-bl-xl rounded-tl-xl border-blue-500 bg-blue-200 shadow-table after:absolute after:-right-8 after:top-0 after:h-full after:w-8 after:origin-left after:scale-x-[102%] after:bg-blue-200 after:shadow-after after:content-['']"
                  : table.enabled
                  ? "rounded-xl border-blue-200 bg-white"
                  : "rounded-xl border-transparent bg-slate-200"
              } flex w-fit items-center gap-2 border-2 p-2`}
            >
              {table.vals.map((val, i) => (
                <button
                  onClick={() => dispatch({ type: "UPDATE_INPUT", payload: i })}
                  key={`${i}KJAHGSDF`}
                  className={`${
                    val !== -1
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-black"
                  } h-10 w-10 rounded-md border-2 shadow-input ${
                    table.activeInput === i && state.activeTable === idx
                      ? "border-orange-400"
                      : "border-white"
                  } ${!table.enabled && "pointer-events-none"}`}
                >
                  {val === -1 ? "" : val}
                </button>
              ))}
              <button
                onClick={(e) => {
                  dispatch({ type: "SET_ACTIVE_TABLES", payload: idx });
                  e.stopPropagation();
                }}
                className={`${
                  table.enabled ? "bg-blue-200" : "bg-slate-100"
                } grid h-8 w-8 place-items-center rounded-full border-2 border-white hover:border-blue-500`}
              >
                {idx}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
